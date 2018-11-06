/**
 * Image Tool for the CodeX Editor
 * @author CodeX <team@ifmo.su>
 * @license MIT
 * @see {@link https://github.com/codex-editor/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) ui.js — module for UI manipulations: render, showing preloader and file-select handlers (including AJAX transport)
 *  3) tunes.js — working with Block Tunes: render buttons, handle clicks
 *  4) converter.js — utils for extracting Image Tool Data from pasted content
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node tests/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     url: 'http://localhost:8008'
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

import css from './index.css';
import Ui from './ui';
import Tunes from './tunes';
import ToolboxIcon from './svg/toolbox.svg';
import Converter from './coverter';

/**
 * @typedef {object} ImageConfig
 * @description Config supported by Tool
 * @property {string} url - upload endpoint
 * @property {string} field - field name for uploaded image
 * @property {string} types - available mime-types
 * @property {string} captionPlaceholder - placeholder for Caption field
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
   * This Tool should be displayed at the Editor's Toolbox
   * @return {boolean}
   */
  static get displayInToolbox() {
    return true;
  }

  /**
   * Tool's icon SVG
   * @return {string}
   */
  static get toolboxIcon() {
    return ToolboxIcon;
  }

  /**
   * @param {ImageToolData} data - previously saved data
   * @param {ImageConfig} config - user config for Tool
   * @param {object} api - CodeX Editor API
   */
  constructor({data, config, api}) {
    this.api = api;

    /**
     * Tool's initial config
     */
    this.config = {
      url: config.url || '',
      field: config.field || 'image',
      types: config.types || 'image/*',
      captionPlaceholder: config.captionPlaceholder || 'Caption'
    };

    this.ui = new Ui({
      api,
      config: this.config,
      onUpload: (response) => this.onUpload(response)
    });

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
   * @public
   *
   * @see {@link ../../../docs/tools.md#paste-handling}
   */
  static get onPaste() {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: ['img'],
      handler: Converter.fromHtml,

      /**
       * Drag n drop file from into the Editor
       */
      files: {
        mimeTypes: ['image/*']
      },
      fileHandler: Converter.fromDroppedFile,

      /**
       * Paste URL of image into the Editor
       */
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i
      },
      patternHandler: Converter.fromPastedUrl,
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
  set data(data){
    this.image = data.file;

    this._data.caption = data.caption || '';
    this.ui.fillCaption(this._data.caption);

    Tunes.tunes.forEach( ({name: tune}) => {
      this.setTune(tune, data[tune] !== undefined ? data[tune] : false)
    });
  }

  /**
   * Return Tool data
   * @private
   *
   * @return {ImageToolData} data
   */
  get data(){
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
   * Field uploading callback
   * @private
   *
   * @param {UploadResponseFormat} response
   */
  onUpload(response){
    this.image = response.file;
  }

  /**
   * Callback fired when Block Tune is activated
   * @private
   *
   * @param {string} tuneName - tune that has been clicked
   */
  tuneToggled(tuneName){
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

    if (tuneName === 'stretched'){
      const blockId = this.api.blocks.getCurrentBlockIndex();
      setTimeout(() => {
        this.api.blocks.stretchBlock(blockId, value);
      }, 0) // wait api is ready
    }
  }
}
