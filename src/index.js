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

/**
 * @typedef {object} ImageConfig
 * @description
 * @property {string} url - upload endpoint
 * @property {string} types - available mime-types
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
   * @param {{data: ImageData, config: ImageConfig, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - CodeX Editor API
   */
  constructor({data, config, api}) {
    this.data = data;
    this.api = api;
    this.config = config;

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

    /**
     * Tool's initial config
     */
    this.config = {
      url: config.url || '',
      types: config.types || 'image/*'
    };

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
      wrapper: 'cdx-image',
      button: 'cdx-image__upload-button',
      image: 'cdx-image__picture',
      noselection: 'cdx-image--noselect',
      displaynone: 'cdx-image--display-none'
    };

    this.nodes = {
      wrapper: null,
      button: null,
      // loader: null,
      image: null
    };

    /**
     * Available Image settings
     */
    this.settings = [
      {
        name: 'withBorder',
        icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>`
      },
      {
        name: 'stretched',
        icon: `<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"/></svg>`
      },
      {
        name: 'withBackground',
        icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"/></svg>`
      },
    ];

    this._createWrapper();
  }

  render() {
    if (!this.data.url) {
      this.nodes.button.click();

      this.nodes.button.classList.remove(this.CSS.displaynone);
    } else {
      this._updateImageSrc(this.data.url);
    }

    return this.nodes.wrapper;
  }

  /**
   * Makes buttons with tunes: add background, add border, stretch image
   * @return {HTMLDivElement}
   */
  renderSettings() {
    let wrapper = document.createElement('div');

    this.settings.forEach( tune => {
      let el = document.createElement('div');

      el.classList.add(this.CSS.settingsButton);
      el.innerHTML = tune.icon;

      el.addEventListener('click', () => {
        this._toggleTune(tune.name);
        el.classList.toggle(this.CSS.settingsButtonActive);
      });

      el.classList.toggle(this.CSS.settingsButtonActive, this.data[tune.name]);

      wrapper.appendChild(el);
    });
    return wrapper;
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
      // loader: this._createLoader(),
      image: this._createImage()
    };

    this.nodes.wrapper.classList.add(this.CSS.wrapper, this.CSS.baseClass);

    this.nodes.wrapper.appendChild(this.nodes.button);
    // this.nodes.wrapper.appendChild(this.nodes.loader);
    this.nodes.wrapper.appendChild(this.nodes.image);
  }

  _createButton() {
    let button = document.createElement('DIV');

    button.classList.add(this.CSS.button, this.CSS.noselection, this.CSS.displaynone, this.CSS.loading);
    button.innerHTML = 'Click to upload image';

    button.addEventListener('click', () => {
      ajax.transport({
        url: this.config.url,
        accept: this.config.types,
        progress: this._progressCallback,
      })
        .then((response) => {
          this._updateImageSrc(response.url);
        })
        .catch(console.error);
    });

    return button;
  }

  _createImage() {
    let image = document.createElement('IMG');

    image.classList.add(this.CSS.displaynone);

    return image;
  }

  _progressCallback(percentage) {
    document.title = `${percentage}%`;
  }

  _updateImageSrc(path) {
    this.nodes.image.src = path;

    this.nodes.image.onload = () => {
      this.nodes.button.classList.add(this.CSS.displaynone);
      this.nodes.image.classList.remove(this.CSS.displaynone);

      this._acceptTuneView();
    };
  }

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
      this.nodes.wrapper.classList.toggle(this.CSS.image + '--' + tune.name.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`), !!this.data[tune.name]);

      if (tune.name === 'stretched') {
        this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), !!this.data.stretched);
      }
    });
  }
}

module.exports = Image;
