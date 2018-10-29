/**
 * Image Tool for the CodeX Editor
 */

/** @typedef {object} ImageToolData
 * @description Tool's input and output data format
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
 * @description
 * @property {string} url - upload endpoint
 * @property {string} field - field name for uploaded image
 * @property {string} types - available mime-types
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
   * Should this tools be displayed at the Editor's Toolbox
   * @return {boolean}
   */
  static get displayInToolbox() {
    return true;
  }

  /**
   * Get Tool icon's SVG
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
    /**
     * Tool's initial config
     */
    this.config = {
      url: config.url || '',
      field: config.field || 'image',
      types: config.types || 'image/*'
    };

    this.ui = new Ui({
      api,
      config: this.config,
      onUpload: (response) => this.onUpload(response)
    });

    this.tunes = new Tunes({api});

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
    return this.tunes.render();
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

    this._data.withBorder = data.withBorder !== undefined ? data.withBorder : false;
    this._data.withBackground =  data.withBackground !== undefined ? data.withBackground : false;
    this._data.stretched = data.stretched !== undefined ? data.stretched : false;
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
}
