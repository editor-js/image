import buttonIcon from './svg/button-icon.svg';
import ajax from '@codexteam/ajax';

export default class Ui {
  constructor({api, config, onUpload}){
    this.api = api;
    this.config = config;
    this.onUpload = onUpload;
    this.nodes = {
      wrapper: make('div', [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: make('div', [this.CSS.imageContainer]),
      fileButton: this.createFileButton(),
      imageEl: undefined,
      imagePreloader: make('div', this.CSS.imagePreloader),
      caption: make('div', [this.CSS.input, this.CSS.caption], {
        contentEditable: true
      }),
    };

    /**
     * Create base structure
     *  <wrapper>
     *    <image-container>
     *      <image-preloader />
     *    </image-container>
     *    <caption />
     *    <select-file-button />
     *  </wrapper>
     */
    this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder;
    this.nodes.imageContainer.appendChild(this.nodes.imagePreloader);
    this.nodes.wrapper.appendChild(this.nodes.imageContainer);
    this.nodes.wrapper.appendChild(this.nodes.caption);
    this.nodes.wrapper.appendChild(this.nodes.fileButton);
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
      imagePreloader: 'image-tool__image-preloader',
      imageEl: 'image-tool__image-picture',
      caption: 'image-tool__caption',
    }
  };

  /**
   * Ui statuses:
   * - empty
   * - uploading
   * - filled
   * @return {{EMPTY: string, UPLOADING: string, FILLED: string}}
   */
  static get status(){
    return {
      EMPTY: 'empty',
      UPLOADING: 'loading',
      FILLED: 'filled',
    }
  }

  /**
   * @param {ImageToolData} toolData
   * @return {HTMLDivElement}
   */
  render(toolData) {
    if (!toolData.file || Object.keys(toolData.file).length === 0){
      this.toggleStatus(Ui.status.EMPTY);
    } else {
      this.toggleStatus(Ui.status.UPLOADING);
    }

    return this.nodes.wrapper;
  }

  /**
   * Creates upload-file button
   * @return {Element}
   */
  createFileButton(){
    let button = make('div', [this.CSS.button]);

    button.innerHTML = `${buttonIcon} Select an Image`;

    button.addEventListener('click', () => {
      this.selectFile();
    });

    return button;
  }

  /**
   * Handle clicks on the upload file button
   * @fires ajax.transport()
   * @fires this.onUpload() - callback passed to the constructor
   */
  selectFile(){
    ajax.transport({
      url: this.config.url,
      accept: this.config.types,
      beforeSend: (files) => {
        this.beforeSend(files[0]);
      },
      fieldName: this.config.field
    })
    .then((response) => {
      if (response.success && response.file){
        this.onUpload(response);
      } else {
        this.uploadingError('incorrect response: ' + JSON.stringify(response));
      }
    })
    .catch((error) => {
      this.uploadingError(error);
    });
  }

  /**
   * Failed uploading handler
   * @param {string} message
   */
  uploadingError(message){
    console.log('Image Tool: uploading failed because of', message);
    /**
     * @todo show notify through the Notify API
     */
    this.nodes.imagePreloader.style.backgroundImage = '';
    this.toggleStatus(Ui.status.EMPTY);
  }

  /**
   * Called before sending, accepts uploaded file
   * Uses to sho preview and loader
   * @param {File} fileUploaded
   */
  beforeSend(fileUploaded){
    const reader = new FileReader();
    reader.readAsDataURL(fileUploaded);

    reader.onload = ( e ) => {
      this.showPreloader(e.target.result);
    };
  }

  /**
   * Shows uploading preloader
   * @param {string} src - preview source
   */
  showPreloader(src){
    this.nodes.imagePreloader.style.backgroundImage = `url(${src})`;

    this.toggleStatus(Ui.status.UPLOADING);
  }

  /**
   * Shows an image
   * @param {string} url
   */
  fillImage(url){
    this.nodes.imageEl = make('img', this.CSS.imageEl, {
      src: url
    });

    this.nodes.imageContainer.appendChild(this.nodes.imageEl);
    this.nodes.imageEl.addEventListener('load', () => {
      this.toggleStatus(Ui.status.FILLED);

      // preloader does not exists on first rendering with presaved data
      if (this.nodes.imagePreloader) {
        this.nodes.imagePreloader.style.backgroundImage = '';
      }
    })
  }

  /**
   * Shows caption input
   * @param {string} text - caption text
   */
  fillCaption(text){
    if (this.nodes.caption){
      this.nodes.caption.innerHTML = text;
    }
  }

  /**
   * Changes UI status
   * @param {string} status - see {@link Ui.status} constants
   */
  toggleStatus(status){
    for (const statusType in Ui.status){
      if (Ui.status.hasOwnProperty(statusType)){
        this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${Ui.status[statusType]}`, status === Ui.status[statusType]);
      }
    }
  }

  /**
   * Apply visual representation of activated tune
   * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
   * @param {boolean} status - true for enable, false for disable
   */
  applyTune(tuneName, status){
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${tuneName}`, status);
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