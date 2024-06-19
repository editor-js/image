/**
 * Image Tool for the Editor.js
 *
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */

import type { TunesMenuConfig } from "@editorjs/editorjs/types/tools";
import type { API, ToolboxConfig, PasteConfig } from '@editorjs/editorjs';
import './index.css';

import Ui from './ui';
import Uploader from './uploader';

import { IconAddBorder, IconStretch, IconAddBackground, IconPicture } from '@codexteam/icons';
import { TunesConfig } from './types/types';

/**
 * ImageToolData interface representing the input and output data format for the image tool.
 */
export interface ImageToolData {
  /**
   * Caption for the image.
   */
  caption: string;
  /**
   * Flag indicating whether the image has a border.
   */
  withBorder: boolean;
  /**
   * Flag indicating whether the image has a background.
   */
  withBackground: boolean;
  /**
   * Flag indicating whether the image is stretched.
   */
  stretched: boolean;
  /**
   * Object containing the URL of the image file.
   */
  file: {
    url: string;
  };
}

/**
 *
 * @description Config supported by Tool
 */
export interface ImageConfig {
  /**
   * Endpoints for upload, whether using file or URL.
   */
  endpoints: {
    /**
     * Endpoint for file upload.
     */
    byFile?: string;
    /**
     * Endpoints for URL upload.
     */
    byUrl?: string;
  };
  /**
   * Field name for the uploaded image.
   */
  field?: string;
  /**
   * Allowed mime-types for the uploaded image.
   */
  types?: string;
  /**
   * Placeholder text for the caption field.
   */
  captionPlaceholder?: string;
  /**
   * Additional data to send with requests.
   */
  additionalRequestData?: object;
  /**
   * Additional headers to send with requests.
   */
  additionalRequestHeaders?: object;
  /**
   * Custom content for the select file button.
   */
  buttonContent?: string;
  /**
   * Optional custom uploader.
   */
  uploader?: {
    /**
     * Method to upload an image by file.
     */
    uploadByFile?: (file: Blob) => Promise<UploadResponseFormat>;
    /**
     * Method to upload an image by URL.
     */
    uploadByUrl?: (url: string) => Promise<UploadResponseFormat>;
  };
  /**
   * Additional actions for the tool.
   */
  actions?: Array<TunesConfig>;
}

/**
 * @typedef {object} UploadResponseFormat
 * @description This format expected from backend on file uploading
 * @property {number} success - 1 for successful uploading, 0 for failure
 * @property {object} file - Object with file data.
 *                           'url' is required,
 *                           also can contain any additional data that will be saved and passed back
 * @property {string} file.url - [Required] image source URL
 */
interface UploadResponseFormat {
  /**
   * success - 1 for successful uploading, 0 for failure 
  */
  success: number;
  /**
  * Object with file data.
   *             'url' is required,
   *             also can contain any additional data that will be saved and passed back
  */
  file: {
    /**
     * The URL of the uploaded image.
    */
    url: string;
  };
}

interface ConstructorParams {
  /**
   * Previously saved data as ImageTool data.
  */
  data: ImageToolData;
  /**
   * User config for Tool.
  */
  config: ImageConfig;
  /**
   * Editor.js API.
  */
  api: API;
  /**
   * Flag indicating read-only mode.
  */
  readOnly: boolean;
  /**
   * Current Block API.
  */
  block: any;
}

export default class ImageTool {
  /** 
   * Editor.js API instance 
  */
  private api: API;
  /** 
   * Flag indicating read-only mode 
  */
  private readOnly: boolean;
  /** 
   * Current Block API instance
  */
  private block: any;
  /** 
   * Configuration for the ImageTool
  */
  private config: ImageConfig;
  /** 
   * Uploader module instance 
  */
  private uploader: Uploader;
  /** 
   * UI module instance
  */
  private ui: Ui;
  /** 
   * Partial data for the ImageTool 
  */
  private _data: ImageToolData;

  /**
   * @param {object} tool - tool properties got from editor.js
   * @param {ImageToolData} tool.data - previously saved data
   * @param {ImageConfig} tool.config - user config for Tool
   * @param {object} tool.api - Editor.js API
   * @param {boolean} tool.readOnly - read-only mode flag
   * @param {BlockAPI|{}} tool.block - current Block API
   */
  constructor({ data, config, api, readOnly, block }: ConstructorParams) {
    this.api = api;
    this.readOnly = readOnly;
    this.block = block;

    /**
     * Tool's initial config
     */
    this.config = {
      endpoints: config.endpoints || '',
      additionalRequestData: config.additionalRequestData || {},
      additionalRequestHeaders: config.additionalRequestHeaders || {},
      field: config.field || 'image',
      types: config.types || 'image/*',
      captionPlaceholder: this.api.i18n.t(config.captionPlaceholder || 'Caption'),
      buttonContent: config.buttonContent || '',
      uploader: config.uploader || undefined,
      actions: config.actions || [],
    };

    /**
     * Module for file uploading
     */
    this.uploader = new Uploader({
      config: this.config,
      onUpload: (response) => this.onUpload(response),
      onError: (error) => this.uploadingFailed(error),
    });

    /**
     * Module for working with UI
     */
    this.ui = new Ui({
      api,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (src: string) => {
            this.ui.showPreloader(src);
          },
        });
      },
      readOnly,
    });

    /**
     * Set saved state
     */
    this._data = {
      caption: '',
      withBorder: false,
      withBackground: false,
      stretched: false,
      file: {
        url: '',
      },
    };
    this.data = data;
  }
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported(): boolean {
    return true;
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox(): ToolboxConfig {
    return {
      icon: IconPicture,
      title: 'Image',
    };
  }

  /**
   * Available image tools
   *
   * @returns {Array}
   */
  static get tunes(): Array<TunesConfig> {
    return [
      {
        name: 'withBorder',
        icon: IconAddBorder,
        title: 'With border',
        toggle: true,
      },
      {
        name: 'stretched',
        icon: IconStretch,
        title: 'Stretch image',
        toggle: true,
      },
      {
        name: 'withBackground',
        icon: IconAddBackground,
        title: 'With background',
        toggle: true,
      },
    ];
  }

  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  render(): HTMLDivElement  {
    return this.ui.render(this.data) as HTMLDivElement;
  }

  /**
   * Validate data: check if Image exists
   *
   * @param {ImageToolData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(savedData: ImageToolData): boolean {
    return savedData.file?.url !== undefined;
  }

  /**
   * Return Block data
   *
   * @public
   *
   * @returns {ImageToolData}
   */
  save(): ImageToolData {
    const caption = this.ui.nodes.caption;

    this._data.caption = caption.innerHTML;

    return this.data;
  }

  /**
   * Returns configuration for block tunes: add background, add border, stretch image
   *
   * @public
   *
   * @returns {Array}
   */
  renderSettings(): Array<TunesMenuConfig> {
    // Merge default tunes with the ones that might be added by user
    // @see https://github.com/editor-js/image/pull/49
    const tunes = ImageTool.tunes.concat(this.config.actions || []);

    return tunes.map(tune => ({
      icon: tune.icon,
      label: this.api.i18n.t(tune.title),
      name: tune.name,
      toggle: tune.toggle,
      isActive: this.data[tune.name as keyof ImageToolData] as boolean,
      onActivate: () => {
        /**If it'a user defined tune, execute it's callback stored in action property */
        if (typeof tune.action === 'function') {
          tune.action(tune.name);

          return;
        }
        this.tuneToggled(tune.name);
      },
    }));
  }

  /**
   * Fires after clicks on the Toolbox Image Icon
   * Initiates click on the Select File button
   *
   * @public
   */
  appendCallback() {
    this.ui.nodes.fileButton.click();
  }

  /**
   * Specify paste substitutes
   *
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @returns {{tags: string[], patterns: object<string, RegExp>, files: {extensions: string[], mimeTypes: string[]}}}
   */
  static get pasteConfig(): PasteConfig {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: [
        {
          img: { src: true },
        },
      ],
      /**
       * Paste URL of image into the Editor
       */
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i,
      },

      /**
       * Drag n drop file from into the Editor
       */
      files: {
        mimeTypes: [ 'image/*' ],
      },
    };
  }

  /**
   * Specify paste handlers
   *
   * @public
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @param {CustomEvent} event - editor.js custom paste event
   *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
   * @returns {void}
   */
  async onPaste(event: CustomEvent): Promise<void> {
    switch (event.type) {
      case 'tag': {
        const image = event.detail.data;

        /** Images from PDF */
        if (/^blob:/.test(image.src)) {
          const response = await fetch(image.src);
          /**
           * the return value of response.blob() is Promise<blob>, which can't be used in the function uploadFile.
           * So, it is converted to File, and then use the file in the uploadFile function.
           */
          const file = await response.blob();

          this.uploadFile(file);
          break;
        }

        this.uploadUrl(image.src);
        break;
      }
      case 'pattern': {
        const url = event.detail.data;

        this.uploadUrl(url);
        break;
      }
      case 'file': {
        const file = event.detail.file;

        this.uploadFile(file);
        break;
      }
    }
  }

  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */

  /**
   * Stores all Tool's data
   *
   * @private
   *
   * @param {ImageToolData} data - data in Image Tool format
   */
  set data(data: ImageToolData) {
    this.image = data.file;

    this._data.caption = data.caption || '';
    this.ui.fillCaption(this._data.caption);

    ImageTool.tunes.forEach(({ name: tune }) => {
      const value = typeof data[tune as keyof ImageToolData] !== 'undefined' ? data[tune as keyof ImageToolData] === true || data[tune as keyof ImageToolData] === 'true' : false;

      this.setTune(tune, value);
    });
  }

  /**
   * Return Tool data
   *
   * @private
   *
   * @returns {ImageToolData}
   */
  get data(): ImageToolData {
    return this._data as ImageToolData;
  }

  /**
   * Set new image file
   *
   * @private
   *
   * @param {object} file - uploaded file data
   */
  set image(file:{ url: string }) {
    this._data.file = file || {};

    if (file && file.url) {
      this.ui.fillImage(file.url);
    }
  }

  /**
   * File uploading callback
   *
   * @private
   *
   * @param {UploadResponseFormat} response - uploading server response
   * @returns {void}
   */
  onUpload(response: UploadResponseFormat):void {
    if (response.success && response.file) {
      this.image = response.file;
    } else {
      this.uploadingFailed('incorrect response: ' + JSON.stringify(response));
    }
  }

  /**
   * Handle uploader errors
   *
   * @private
   * @param {string} errorText - uploading error text
   * @returns {void}
   */
  uploadingFailed(errorText: string): void {
    console.log('Image Tool: uploading failed because of', errorText);

    this.api.notifier.show({
      message: this.api.i18n.t('Couldn’t upload image. Please try another.'),
      style: 'error',
    });
    this.ui.hidePreloader();
  }

  /**
   * Callback fired when Block Tune is activated
   *
   * @private
   *
   * @param {string} tuneName - tune that has been clicked
   * @returns {void}
   */
  tuneToggled(tuneName: string): void {
    // inverse tune state
    this.setTune(tuneName, !this._data[tuneName as keyof ImageToolData]);
  }

  /**
   * Set one tune
   *
   * @param {string} tuneName - {@link Tunes.tunes}
   * @param {boolean} value - tune state
   * @returns {void}
   */
  setTune(tuneName: string, value: boolean): void {
    (this._data[tuneName as keyof ImageToolData] as boolean) = value;

    this.ui.applyTune(tuneName, value);
    if (tuneName === 'stretched') {
      /**
       * Wait until the API is ready
       */
      Promise.resolve().then(() => {
        this.block.stretched = value;
      })
        .catch(err => {
          console.error(err);
        });
    }
  }

  /**
   * Show preloader and upload image file
   *
   * @param {File} file - file that is currently uploading (from paste)
   * @returns {void}
   */
  uploadFile(file: Blob): void {
    this.uploader.uploadByFile(file, {
      onPreview: (src: string) => {
        this.ui.showPreloader(src);
      },
    });
  }

  /**
   * Show preloader and upload image by target url
   *
   * @param {string} url - url pasted
   * @returns {void}
   */
  uploadUrl(url: string): void {
    this.ui.showPreloader(url);
    this.uploader.uploadByUrl(url);
  }
}
