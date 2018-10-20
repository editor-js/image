/**
 * Build styles
 */
require('./index.css').toString();

const ajax = require('@codexteam/ajax');

/**
 * Image Tool for the CodeX Editor
 *
 * @typedef {object} ImageData
 * @description Tool's input and output data format
 * @property {string} url — image URL
 * @property {string} caption — image caption
 * @property {boolean} withBorder - should image be rendered with border
 * @property {boolean} withBackground - should image be rendered with background
 * @property {boolean} stretched - should image be stretched to full width of container
 */

class Image {
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
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: ImageData, config: object, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - CodeX Editor API
   */
  constructor({data, config, api}) {
    this.data = data;
    this.api = api;
    this.config = config;

    /**
     * Styles
     */
    this.CSS = {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive,

      /**
       * Tool's classes
       */
      button: 'cdx-image__upload-button',
      wrapper: 'cdx-image',
      imageHolder: 'cdx-image__picture',
      noselection: 'cdx-image--noselect',
      displaynone: 'cdx-image--display-none'
    };

    /**
     * Tool's initial data
     */
    this.data = {
      url: data.url || '',
      caption: data.caption || '',
      withBorder: data.withBorder !== undefined ? data.withBorder : false,
      withBackground: data.withBackground !== undefined ? data.withBackground : false,
      stretched: data.stretched !== undefined ? data.stretched : false,
    };

    this.nodes = {
      wrapper: null,
      button: null,
      loader: null,
      image: null
    };

    this._createWrapper();
  }

  render() {
    if (!this.data.url) {

      this.nodes.button.click();

      this.nodes.button.classList.remove(this.CSS.displaynone);
    } else {

      this.nodes.image.src = this.data.url;

      this.nodes.image.onload = () => {
        this.nodes.image.classList.remove(this.CSS.displaynone);
      }

    }

    return this.nodes.wrapper;
  }



  save() {
    let image = this.nodes.wrapper.querySelector('img');
      // caption = this.nodes.wrapper.querySelector('.' + this.CSS.input);

    if (!image) {
      return this.data;
    }

    return Object.assign(this.data, {
      url: image.src,
      // caption: caption.innerHTML
    });
  }

  _createWrapper() {
    this.nodes = {
      wrapper: document.createElement('DIV'),
      button: this._createButton(),
      loader: this._createLoader(),
      image: this._createImage()
    };

    this.nodes.wrapper.classList.add(this.CSS.wrapper);

    this.nodes.wrapper.appendChild(this.nodes.button);
    this.nodes.wrapper.appendChild(this.nodes.loader);
    this.nodes.wrapper.appendChild(this.nodes.image);
  }

  _createButton() {
    let button = document.createElement('DIV');

    button.classList.add(this.CSS.button, this.CSS.noselection, this.CSS.displaynone);
    button.innerHTML = 'Click to upload image';

    button.addEventListener('click', () => {
      ajax.transport({
        url: 'http://localhost:3000/uploadFile',
        accept: 'image/png, image/jpg, image/jpeg',
        progress: function (percentage) {
          document.title = `${percentage}%`;
        },
      })
        .then((response) => {
          this.nodes.image.src = response.url;

          this.nodes.image.onload = () => {
            this.nodes.button.classList.add(this.CSS.displaynone);
            this.nodes.image.classList.remove(this.CSS.displaynone);
          }
        })
        .catch(console.log);
    });

    return button;
  }

  _createLoader() {
    let loader = document.createElement('DIV');

    loader.style = 'background-color: yellow; height: 100px;';
    loader.classList.add(this.CSS.noselection, this.CSS.displaynone);

    return loader;
  }

  _createImage() {
    let image = document.createElement('IMG');

    image.classList.add(this.CSS.displaynone);

    return image;
  }

}

module.exports = Image;
