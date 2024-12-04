/**
 * Image Tool for the Editor.js
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.ts — main Tool's interface, public API and methods for working with data
 *  2) uploader.ts — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.ts — module for UI manipulations: render, showing preloader, etc
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

import type { TunesMenuConfig } from '@editorjs/editorjs/types/tools';
import type { API, ToolboxConfig, PasteConfig, BlockToolConstructorOptions, BlockTool, BlockAPI, PasteEvent, PatternPasteEventDetail, FilePasteEventDetail } from '@editorjs/editorjs';
import './index.css';

import Ui from './ui';
import Uploader from './uploader';

import { IconAddBorder, IconStretch, IconAddBackground, IconPicture, IconText } from '@codexteam/icons';
import type { ActionConfig, UploadResponseFormat, ImageToolData, ImageConfig, HTMLPasteEventDetailExtended, ImageSetterParam, FeaturesConfig } from './types/types';

export * from './types/types';

export type ImageToolConstructorOptions = BlockToolConstructorOptions<ImageToolData, ImageConfig>;

/**
 * Implementation of ImageTool class
 */
export default class ImageTool implements BlockTool {
  /**
   * Editor.js API instance
   */
  private api: API;

  /**
   * Current Block API instance
   */
  private block: BlockAPI;

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
   * Stores current block data internally
   */
  private _data: ImageToolData;

  /**
   * @param tool - tool properties got from editor.js
   * @param tool.data - previously saved data
   * @param tool.config - user config for Tool
   * @param tool.api - Editor.js API
   * @param tool.readOnly - read-only mode flag
   * @param tool.block - current Block API
   */
  constructor({ data, config, api, readOnly, block }: ImageToolConstructorOptions) {
    this.api = api;
    this.block = block;

    /**
     * Tool's initial config
     */
    this.config = {
      endpoints: config.endpoints,
      additionalRequestData: config.additionalRequestData,
      additionalRequestHeaders: config.additionalRequestHeaders,
      field: config.field,
      types: config.types,
      captionPlaceholder: this.api.i18n.t(config.captionPlaceholder ?? 'Caption'),
      buttonContent: config.buttonContent,
      uploader: config.uploader,
      actions: config.actions,
      features: config.features || {},
    };

    /**
     * Module for file uploading
     */
    this.uploader = new Uploader({
      config: this.config,
      onUpload: (response: UploadResponseFormat) => this.onUpload(response),
      onError: (error: string) => this.uploadingFailed(error),
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
   */
  public static get isReadOnlySupported(): boolean {
    return true;
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   */
  public static get toolbox(): ToolboxConfig {
    return {
      icon: IconPicture,
      title: 'Image',
    };
  }

  /**
   * Available image tools
   */
  public static get tunes(): Array<ActionConfig> {
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
   */
  public render(): HTMLDivElement {
    if (this.config.features?.caption === true || this.config.features?.caption === undefined || (this.config.features?.caption === 'optional' && this.data.caption)) {
      this.ui.applyTune('caption', true);
    }

    return this.ui.render(this.data) as HTMLDivElement;
  }

  /**
   * Validate data: check if Image exists
   * @param savedData — data received after saving
   * @returns false if saved data is not correct, otherwise true
   */
  public validate(savedData: ImageToolData): boolean {
    return !!savedData.file.url;
  }

  /**
   * Return Block data
   */
  public save(): ImageToolData {
    const caption = this.ui.nodes.caption;

    this._data.caption = caption.innerHTML;

    return this.data;
  }

  /**
   * Returns configuration for block tunes: add background, add border, stretch image
   * @returns TunesMenuConfig
   */
  public renderSettings(): TunesMenuConfig {
    // Merge default tunes with the ones that might be added by user
    // @see https://github.com/editor-js/image/pull/49
    const tunes = ImageTool.tunes.concat(this.config.actions || []);
    const featureTuneMap: Record<string, string> = {
      border: 'withBorder',
      background: 'withBackground',
      stretch: 'stretched',
      caption: 'caption',
    };

    if (this.config.features?.caption === 'optional') {
      tunes.push({
        name: 'caption',
        icon: IconText,
        title: 'With caption',
        toggle: true,
      });
    }

    const availableTunes = tunes.filter((tune) => {
      const featureKey = Object.keys(featureTuneMap).find(key => featureTuneMap[key] === tune.name);

      if (featureKey === 'caption') {
        return this.config.features?.caption !== false;
      }

      return featureKey == null || this.config.features?.[featureKey as keyof FeaturesConfig] !== false;
    });

    return availableTunes.map(tune => ({
      icon: tune.icon,
      label: this.api.i18n.t(tune.title),
      name: tune.name,
      toggle: tune.toggle,
      isActive: this.data[tune.name as keyof ImageToolData] as boolean,
      onActivate: () => {
        /** If it'a user defined tune, execute it's callback stored in action property */
        if (typeof tune.action === 'function') {
          tune.action(tune.name);

          return;
        }
        this.tuneToggled(tune.name as keyof ImageToolData);
      },
    }));
  }

  /**
   * Fires after clicks on the Toolbox Image Icon
   * Initiates click on the Select File button
   */
  public appendCallback(): void {
    this.ui.nodes.fileButton.click();
  }

  /**
   * Specify paste substitutes
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   */
  public static get pasteConfig(): PasteConfig {
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
        mimeTypes: ['image/*'],
      },
    };
  }

  /**
   * Specify paste handlers
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @param event - editor.js custom paste event
   *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
   */
  public async onPaste(event: PasteEvent): Promise<void> {
    switch (event.type) {
      case 'tag': {
        const image = (event.detail as HTMLPasteEventDetailExtended).data;

        /** Images from PDF */
        if (/^blob:/.test(image.src)) {
          const response = await fetch(image.src);

          const file = await response.blob();

          this.uploadFile(file);
          break;
        }

        this.uploadUrl(image.src);
        break;
      }
      case 'pattern': {
        const url = (event.detail as PatternPasteEventDetail).data;

        this.uploadUrl(url);
        break;
      }
      case 'file': {
        const file = (event.detail as FilePasteEventDetail).file;

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
   * @param data - data in Image Tool format
   */
  private set data(data: ImageToolData) {
    this.image = data.file;

    this._data.caption = data.caption || '';
    this.ui.fillCaption(this._data.caption);

    ImageTool.tunes.forEach(({ name: tune }) => {
      const value = typeof data[tune as keyof ImageToolData] !== 'undefined' ? data[tune as keyof ImageToolData] === true || data[tune as keyof ImageToolData] === 'true' : false;

      this.setTune(tune as keyof ImageToolData, value);
    });
  }

  /**
   * Return Tool data
   */
  private get data(): ImageToolData {
    return this._data;
  }

  /**
   * Set new image file
   * @param file - uploaded file data
   */
  private set image(file: ImageSetterParam | undefined) {
    this._data.file = file || { url: '' };
    if (this._data.file.url) {
      this.ui.fillImage(this._data.file);
    }
  }

  /**
   * File uploading callback
   * @param response - uploading server response
   */
  private onUpload(response: UploadResponseFormat): void {
    if (response.success && Boolean(response.file)) {
      this.image = response.file;
    } else {
      this.uploadingFailed('incorrect response: ' + JSON.stringify(response));
    }
  }

  /**
   * Handle uploader errors
   * @param errorText - uploading error info
   */
  private uploadingFailed(errorText: string): void {
    console.log('Image Tool: uploading failed because of', errorText);

    this.api.notifier.show({
      message: this.api.i18n.t('Couldn’t upload image. Please try another.'),
      style: 'error',
    });
    this.ui.hidePreloader();
  }

  /**
   * Callback fired when Block Tune is activated
   * @param tuneName - tune that has been clicked
   */
  private tuneToggled(tuneName: keyof ImageToolData): void {
    // inverse tune state
    this.setTune(tuneName, !(this._data[tuneName] as boolean));

    // reset caption on toggle
    if (tuneName === 'caption' && !this._data[tuneName]) {
      this._data.caption = '';
      this.ui.fillCaption('');
    }
  }

  /**
   * Set one tune
   * @param tuneName - {@link Tunes.tunes}
   * @param value - tune state
   */
  private setTune(tuneName: keyof ImageToolData, value: boolean): void {
    (this._data[tuneName] as boolean) = value;

    this.ui.applyTune(tuneName, value);
    if (tuneName === 'stretched') {
      /**
       * Wait until the API is ready
       */
      Promise.resolve().then(() => {
        this.block.stretched = value;
      })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  /**
   * Show preloader and upload image file
   * @param file - file that is currently uploading (from paste)
   */
  private uploadFile(file: Blob): void {
    this.uploader.uploadByFile(file, {
      onPreview: (src: string) => {
        this.ui.showPreloader(src);
      },
    });
  }

  /**
   * Show preloader and upload image by target url
   * @param url - url pasted
   */
  private uploadUrl(url: string): void {
    this.ui.showPreloader(url);
    this.uploader.uploadByUrl(url);
  }
}
