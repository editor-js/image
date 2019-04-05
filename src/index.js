/**
 * Image Tool for the Editor.js
 * @author CodeX <team@ifmo.su>
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

/**
 * @typedef {object} ImageToolData
 * @description Image Tool's input and output data format
 * @property {string} caption — image caption
 * @property {boolean} withBorder - should image be rendered with border
 * @property {boolean} withBackground - should image be rendered with background
 * @property {boolean} stretched - should image be stretched to full width of container
 * @property {object} file — Image file data returned from backend
 * @property {string} file.url — image URL
 */

import './index.css';
import Ui from './ui';
import Tunes from './tunes';
import ToolboxIcon from './svg/toolbox.svg';

/**
 * Interface for classes that represent a uploader
 * @interface Uploader
 */
export class Uploader {
  /**
   * Handle clicks on the upload file button
   * @param {string} url - image source url
   * @param {Object} context - context object with helpers and other properties
   * @param {function(string)} context.setPreview - callback for set preview image
   * @returns {Promise<UploadResponseFormat>}
   */
  uploadByUrl(url, { setPreview }) {
  }

  /**
   * Handle clicks on the upload file button
   * @param {File} file - file pasted by drag-n-drop
   * @param {Object} context - context object with helpers and other properties
   * @param {function(string)} context.setPreview - callback for set preview image
   * @returns {Promise<UploadResponseFormat>}
   */
  uploadByFile(file, { setPreview }) {
  }
}

/**
 * @typedef {object} ImageConfig
 * @description Config supported by Tool
 * @property {string} captionPlaceholder - placeholder for Caption field
 * @property {string} buttonContent - overrides for Select File button
 * @property {Uploader} uploader - api transport for upload images
 */

/**
 * @typedef {object} UploadResponseFormat
 * @description This format expected from backend on file uploading
 * @property {number} success - 1 for successful uploading, 0 for failure
 * @property {object} file - Object with file data.
 *                           'url' is required,
 *                           also can contain any additional data that will be saved and passed back
 * @property {string} file.url - [Required] image source URL
 */
export default class ImageTool {
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @return {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: ToolboxIcon,
      title: 'Image'
    };
  }

  /**
   * @param {ImageToolData} data - previously saved data
   * @param {ImageConfig} config - user config for Tool
   * @param {object} api - Editor.js API
   */
  constructor({ data, config, api }) {
    /**
     * @param {string} src - url on preview image while uploading file
     */
    this.setPreview = (src) => {
      this.ui.showPreloader(src);
    };

    this.api = api;

    /**
     * Tool's initial config
     */
    this.config = {
      types: config.types || 'image/*',
      captionPlaceholder: config.captionPlaceholder || 'Caption',
      buttonContent: config.buttonContent || ''
    };

    /**
     * Module for file uploading
     * @type {Uploader}
     */
    this.uploader = config.uploader;

    /**
     * Module for working with UI
     */
    this.ui = new Ui({
      api,
      config: this.config,
      onSelectFile: (file) => {
        this.handleUpload(
          this.uploader.uploadByFile(file, {
            setPreview: this.setPreview
          })
        );
      }
    });

    /**
     * Module for working with tunes
     */
    this.tunes = new Tunes({
      api,
      onChange: (tuneName) => this.tuneToggled(tuneName)
    });

    /**
     * Set saved state
     */
    this._data = {};
    this.data = data;
  }

  /**
   * Renders Block content
   * @public
   *
   * @return {HTMLDivElement}
   */
  render() {
    return this.ui.render(this.data);
  }

  /**
   * Return Block data
   * @public
   *
   * @return {ImageToolData}
   */
  save() {
    const caption = this.ui.nodes.caption;

    this._data.caption = caption.innerHTML;

    return this.data;
  }

  /**
   * cleanup after ui
   */
  destroy() {
    this.ui.destroy();
  }

  /**
   * Makes buttons with tunes: add background, add border, stretch image
   * @public
   *
   * @return {Element}
   */
  renderSettings() {
    return this.tunes.render(this.data);
  }

  /**
   * Fires after clicks on the Toolbox Image Icon
   * Initiates click on the Select File button
   * @public
   */
  appendCallback() {
    this.ui.nodes.fileButton.click();
  }

  /**
   * Specify paste substitutes
   *
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   */
  static get pasteConfig() {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: [ 'img' ],

      /**
       * Paste URL of image into the Editor
       */
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i
      },

      /**
       * Drag n drop file from into the Editor
       */
      files: {
        mimeTypes: [ 'image/*' ]
      }
    };
  }

  /**
   * Specify paste handlers
   * @public
   *
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   */
  async onPaste(event) {
    switch (event.type) {
      case 'tag':
        const image = event.detail.data;

        /** Images from PDF */
        if (/^blob:/.test(image.src)) {
          const response = await fetch(image.src);
          const file = await response.blob();

          this.uploadFile(file);
          break;
        }

        this.uploadUrl(image.src);
        break;

      case 'pattern':
        const url = event.detail.data;

        this.uploadUrl(url);
        break;

      case 'file':
        const file = event.detail.file;

        this.uploadFile(file);
        break;
    }
  }

  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */

  /**
   * Stores all Tool's data
   * @private
   *
   * @param {ImageToolData} data
   */
  set data(data) {
    this.image = data.file;

    this._data.caption = data.caption || '';
    this.ui.fillCaption(this._data.caption);

    Tunes.tunes.forEach(({ name: tune }) => {
      const value = data[tune] !== undefined ? data[tune] : false;

      this.setTune(tune, value);
    });
  }

  /**
   * Return Tool data
   * @private
   *
   * @return {ImageToolData} data
   */
  get data() {
    return this._data;
  }

  /**
   * Set new image file
   * @private
   *
   * @param {object} file - uploaded file data
   */
  set image(file) {
    this._data.file = file || {};

    if (file && file.url) {
      this.ui.fillImage(file.url);
    }
  }

  /**
   * File uploading callback
   * @private
   *
   * @param {UploadResponseFormat} response
   */
  onUpload(response) {
    const body = response.body;

    if (body.success && body.file) {
      this.image = body.file;
    } else {
      this.uploadingFailed('incorrect response: ' + JSON.stringify(body));
    }
  }

  /**
   * Handle uploader errors
   * @private
   *
   * @param {string} errorText
   */
  uploadingFailed(errorText) {
    console.log('Image Tool: uploading failed because of', errorText);

    this.api.notifier.show({
      message: 'Can not upload an image, try another',
      style: 'error'
    });
    this.ui.hidePreloader();
  }

  /**
   * Callback fired when Block Tune is activated
   * @private
   *
   * @param {string} tuneName - tune that has been clicked
   */
  tuneToggled(tuneName) {
    // inverse tune state
    this.setTune(tuneName, !this._data[tuneName]);
  }

  /**
   * Set one tune
   * @param {string} tuneName - {@link Tunes.tunes}
   * @param {boolean} value - tune state
   */
  setTune(tuneName, value) {
    this._data[tuneName] = value;

    this.ui.applyTune(tuneName, value);

    if (tuneName === 'stretched') {
      const blockId = this.api.blocks.getCurrentBlockIndex();

      setTimeout(() => {
        /** Wait until api is ready */
        this.api.blocks.stretchBlock(blockId, value);
      }, 0);
    }
  }

  /**
   * Show preloader and upload image file
   *
   * @param {File} file
   */
  uploadFile(file) {
    this.handleUpload(
      this.uploader.uploadByFile(file, {
        setPreview: this.setPreview
      })
    );
  }

  /**
   * Show preloader and upload image by target url
   *
   * @param {string} url
   */
  uploadUrl(url) {
    this.handleUpload(
      this.uploader.uploadByUrl(url, {
        setPreview: this.setPreview
      })
    );
  }

  /**
   * Helper for handle promise
   * @param {Promise} promise
   */
  handleUpload(promise) {
    promise
      .then((response) => {
        this.onUpload(response);
      })
      .catch((error) => {
        this.uploadingFailed(error);
      });
  }
}
