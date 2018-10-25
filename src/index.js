/**
 * Image Tool for the CodeX Editor
 *
 * @typedef {object} ImageToolData
 * @description Tool's input and output data format
 * @property {string} url — image URL
 * @property {string} caption — image caption
 * @property {boolean} withBorder - should image be rendered with border
 * @property {boolean} withBackground - should image be rendered with background
 * @property {boolean} stretched - should image be stretched to full width of container
 */

import css from './index.css';
import Ui from './ui';
import Tunes from './tunes';


/**
 * @typedef {object} ImageConfig
 * @description
 * @property {string} url - upload endpoint
 * @property {string} field - field name for uploaded image
 * @property {string} types - available mime-types
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
    return '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150.242V79c0-18.778-15.222-34-34-34H79c-18.778 0-34 15.222-34 34v42.264l67.179-44.192 80.398 71.614 56.686-29.14L291 150.242zm-.345 51.622l-42.3-30.246-56.3 29.884-80.773-66.925L45 174.187V197c0 18.778 15.222 34 34 34h178c17.126 0 31.295-12.663 33.655-29.136zM79 0h178c43.63 0 79 35.37 79 79v118c0 43.63-35.37 79-79 79H79c-43.63 0-79-35.37-79-79V79C0 35.37 35.37 0 79 0z"/></svg>';
  }

  /**
   * @param {ImageToolData} data - previously saved data
   * @param {ImageConfig} config - user config for Tool
   * @param {object} api - CodeX Editor API
   */
  constructor({data, config, api}) {

    /**
     * Initial data
     */
    this._data = {};
    this.data = data;

    /**
     * Tool's initial config
     */
    this.config = {
      url: config.url || '',
      field: config.field || 'image',
      types: config.types || 'image/*'
    };

    this.nodes = {
      wrapper: null,
      button: null,
      loader: null,
      imageHolder: null
    };

    this.ui = new Ui({api, config: this.config});
    this.tunes = new Tunes({api});
  }

  /**
   * @param {ImageToolData} data
   */
  set data(data){
      this._data.url = data.url || '';
      this._data.caption = data.caption || '';
      this._data.withBorder = data.withBorder !== undefined ? data.withBorder : false;
      this._data.withBackground =  data.withBackground !== undefined ? data.withBackground : false;
      this._data.stretched = data.stretched !== undefined ? data.stretched : false;
  }

  /**
   * @return {ImageToolData} data
   */
  get data(){
    return this._data;
  }

  /**
   * @return {HTMLDivElement}
   */
  render() {
    return this.ui.render(this.data);
  }

  save() {
    // let image = this.nodes.wrapper.querySelector('img'),
    //   caption = this.nodes.wrapper.querySelector('.' + this.CSS.input);
    //
    // if (!image) {
    //   return this.data;
    // }

    return Object.assign(this.data, {
      // url: image.src,
      // caption: caption.innerHTML
    });
  }

  /**
   * Makes buttons with tunes: add background, add border, stretch image
   * @return {Element}
   */
  renderSettings() {
    return this.tunes.render();
  }


  /**
   * Read pasted image and convert it to base64
   *
   * @static
   * @param {File} file
   * @returns {Promise<SimpleImageData>}
   */
  static onDropHandler(file) {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    return new Promise(resolve => {
      reader.onload = (event) => {
        resolve({
          url: event.target.result,
          caption: file.name
        });
      };
    });
  }

  /**
   * Specify paste substitutes
   * @see {@link ../../../docs/tools.md#paste-handling}
   * @public
   */
  static get onPaste() {
    return {
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i
      },
      tags: ['img'],
      files: {
        mimeTypes: ['image/*']
      },
      fileHandler: Image.onDropHandler,
      handler: (img) => {
        return {
          url: img.src
        };
      },
      patternHandler: (text) => {
        return {
          url: text
        };
      },
    };
  }

  _createLoader() {
    let loader = this._make('div', this.CSS.loading);

    this.nodes.wrapper.appendChild(loader);

    this.nodes.loader = loader;
  }

  _createImage(url) {
    // let loader = this._make('div', this.CSS.loading),
    let imageHolder = this._make('div', this.CSS.imageHolder),
      image = this._make('img'),
      caption = this._make('div', this.CSS.input, {
        contentEditable: 'true',
        innerHTML: this.data.caption || ''
      });

    caption.dataset.placeholder = 'Enter a caption';

    image.src = url;
    // this.nodes.wrapper.appendChild(loader);

    image.onload = () => {
      this.nodes.wrapper.classList.remove(this.CSS.loading);

      imageHolder.appendChild(image);

      this.nodes.wrapper.appendChild(imageHolder);
      this.nodes.wrapper.appendChild(caption);

      this.nodes.loader.remove();

      this._acceptTuneView();
    };

    this.nodes.imageHolder = imageHolder;

    image.onerror = () => {
      // @todo use api.Notifies.show() to show error notification
      console.error('Failed to load an image');

      this.nodes.loader.remove();
      this.nodes.imageHolder.remove();
      this._createButton();
    };
  }

  _progressCallback(percentage) {}

  /**
   * Click on the Settings Button
   * @private
   */
  _toggleTune(tune) {
    this.data[tune] = !this.data[tune];
    this._acceptTuneView();
  }

  /**
   * Add specified class corresponds with activated tunes
   * @private
   */
  _acceptTuneView() {
    this.settings.forEach( tune => {
      this.nodes.imageHolder.classList.toggle(this.CSS.imageHolder + '--' + tune.name.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`), !!this.data[tune.name]);

      if (tune.name === 'stretched') {
        this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), !!this.data.stretched);
      }
    });
  }
}