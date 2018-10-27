import buttonIcon from './svg/button-icon.svg';
import ajax from '@codexteam/ajax';

export default class Ui {
  constructor({api, config, onUpload}){
    this.api = api;
    this.config = config;
    this.onUpload = onUpload;
    this.nodes = {
      wrapper: undefined,
      fileButton: undefined,
      imageContainer: undefined,
      imageEl: undefined,
    }
  }
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,

      /**
       * Tool's classes
       */
      wrapper: 'image-tool',
      imageContainer: 'image-tool__image',
      imageEl: 'image-tool__image-picture',
    }
  };

  /**
   * @param {ImageToolData} toolData
   * @return {HTMLDivElement}
   */
  render(toolData) {
    this.nodes.wrapper = make('div', [this.CSS.baseClass, this.CSS.wrapper]);
    this.nodes.imageContainer = make('div', [this.CSS.imageContainer]);
    this.nodes.fileButton = this.createFileButton();

    this.nodes.wrapper.appendChild(this.nodes.imageContainer);
    this.nodes.wrapper.appendChild(this.nodes.fileButton);

    return this.nodes.wrapper;
  }

  createFileButton(){
    let button = make('div', [this.CSS.button]);

    button.innerHTML = `${buttonIcon} Select an Image`;

    button.addEventListener('click', () => {
      this.selectFile();
    });

    return button;
  }

  selectFile(){
    ajax.transport({
      url: this.config.url,
      accept: this.config.types,
      progress: (percentage) => this.uploadingProgress(percentage),
      fieldName: this.config.field
    })
    .then((response) => {
      this.onUpload(response);
    })
    .catch((error) => {
      console.log('uploading error', error);
    });
  }

  uploadingProgress(percentage){
    console.log('percentage', percentage);
  }

  /**
   * Shows an image
   * @param {string} url
   */
  showImage(url){
    console.log('url>>', url);
    this.nodes.imageEl = make('img', this.CSS.imageEl, {
      src: url
    });

    this.nodes.imageContainer.appendChild(this.nodes.imageEl);
    // this.nodes.button.remove();

    /**
     * TEMP loader
     */
    // this._createLoader();

    // this._createImage(response.data.url);
  }
}

/**
 * Helper for making Elements with attributes
 *
 * @param  {string} tagName           - new Element tag name
 * @param  {array|string} classNames  - list or name of CSS class
 * @param  {Object} attributes        - any attributes
 * @return {Element}
 */
export const make = function make (tagName, classNames = null, attributes = {}) {
  let el = document.createElement(tagName);

  if ( Array.isArray(classNames) ) {
    el.classList.add(...classNames);
  } else if( classNames ) {
    el.classList.add(classNames);
  }

  for (let attrName in attributes) {
    el[attrName] = attributes[attrName];
  }

  return el;
};