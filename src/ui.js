import buttonIcon from './svg/button-icon.svg';
import Cropper from 'cropperjs';
import ajax from '@codexteam/ajax';

/**
 * Class for working with UI:
 *  - rendering base structure
 *  - show/hide preview
 *  - apply tune view
 */
export default class Ui {
  /**
   * @param {object} ui - image tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {ImageConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   */
  constructor({ api, config, onSelectFile, readOnly }) {
    this.api = api;
    this.config = config;
    this.onSelectFile = onSelectFile;
    this.readOnly = readOnly;
    this.cropper = null;
    this.nodes = {
      wrapper: make('div', [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: make('div', [ this.CSS.imageContainer ]),
      fileButton: this.createFileButton(),
      imageEl: undefined,
      imagePreloader: make('div', this.CSS.imagePreloader),
      caption: make('div', [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly,
      }),
      cropper: make('div', [ this.CSS.cropper ]),
      cropperContainer: make('div', [ this.CSS.cropperContainer ]),
      cropperCanvas: make('canvas', [ this.CSS.cropperCanvas ]),
      cropperCanvasButton: this.createCroppedButton(),
    };

    /**
     * Create base structure
     *  <wrapper>
     *    <image-container>
     *      <image-preloader />
     *    </image-container>
     *    <caption />
     *    <select-file-button />
     *    <cropper-container>
     *      <cropper-canvas />
     *      <cropper-confirmation-button />
     *    </cropper-container>*
     *  </wrapper>
     */
    this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder;
    this.nodes.imageContainer.appendChild(this.nodes.imagePreloader);
    this.nodes.wrapper.appendChild(this.nodes.imageContainer);
    this.nodes.wrapper.appendChild(this.nodes.caption);
    this.nodes.wrapper.appendChild(this.nodes.fileButton);

    this.nodes.cropperContainer.appendChild(this.nodes.cropperCanvas);
    this.nodes.cropper.appendChild(this.nodes.cropperContainer);
    this.nodes.cropper.appendChild(this.nodes.cropperCanvasButton);
    this.nodes.wrapper.appendChild(this.nodes.cropper);
  }

  /**
   * CSS classes
   *
   * @returns {object}
   */
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
      cropper: 'image-tool__cropper',
      cropperContainer: 'image-tool__cropper-container',
      cropperCanvas: 'image-tool__cropper-canvas',
      cropperConfirmButton: 'image-tool__cropper-canvas-btn',
    };
  };

  /**
   * Ui statuses:
   * - empty
   * - cropping
   * - uploading
   * - filled
   *
   * @returns {{EMPTY: string, CROPPING: string, UPLOADING: string, FILLED: string}}
   */
  static get status() {
    return {
      EMPTY: 'empty',
      CROPPING: 'cropping',
      UPLOADING: 'loading',
      FILLED: 'filled',
    };
  }

  /**
   * Renders tool UI
   *
   * @param {ImageToolData} toolData - saved tool data
   * @returns {Element}
   */
  render(toolData) {
    if (!toolData.file || Object.keys(toolData.file).length === 0) {
      this.toggleStatus(Ui.status.EMPTY);
    } else {
      this.toggleStatus(Ui.status.UPLOADING);
    }

    return this.nodes.wrapper;
  }

  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const button = make('div', [ this.CSS.button ]);

    button.innerHTML = this.config.buttonContent || `${buttonIcon} ${this.api.i18n.t('Select an Image')}`;

    button.addEventListener('click', () => {
      if (this.config.withCropper) {
        ajax.selectFiles({ accept: this.config.types })
          .then((files) => {
            this.showCropper(files[0]);
          });
      } else {
        this.onSelectFile();
      }
    });

    return button;
  }

  /**
   * Create send cropped file button
   *
   * @returns {Element}
   */
  createCroppedButton() {
    const button = make('button', [ this.CSS.cropperConfirmButton ]);

    button.innerHTML = this.config.buttonCropped || `${buttonIcon} ${this.api.i18n.t('Upload photo')}`;

    button.addEventListener('click', () => {
      const canvas = this.getCroppedCanvas();

      if (canvas) {
        canvas.toBlob((blob) => {
          this.onSelectFile(new File([ blob ], 'fileName.jpg', { type: 'image/jpeg' }));
        });
      }
    });

    return button;
  }

  /**
   * Returns cropped canvas
   *
   * @returns {null|HTMLCanvasElement}
   */
  getCroppedCanvas() {
    return this.cropper ? this.cropper.getCroppedCanvas() : null;
  }

  /**
   * Render cropper
   *
   * @param {File} file
   * @returns {Element}
   */
  showCropper(file) {
    const canvas = this.nodes.cropperCanvas;

    const ctx = canvas.getContext('2d');
    const reader = new FileReader();
    const img = new Image();

    img.onload = () => {
      ctx.canvas.width = img.width;
      ctx.canvas.height = img.height;
      // draw image
      ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
      this.cropper = new Cropper(canvas, this.config.cropperConfigs);
    };

    reader.onloadend = function () {
      img.src = reader.result;
    };
    // this is to read the file
    reader.readAsDataURL(file);

    this.toggleStatus(Ui.status.CROPPING);

    return canvas;
  }

  /**
   * Shows uploading preloader
   *
   * @param {string} src - preview source
   * @returns {void}
   */
  showPreloader(src) {
    this.nodes.imagePreloader.style.backgroundImage = `url(${src})`;

    this.toggleStatus(Ui.status.UPLOADING);
  }

  /**
   * Hide uploading preloader
   *
   * @returns {void}
   */
  hidePreloader() {
    this.nodes.imagePreloader.style.backgroundImage = '';
    this.toggleStatus(Ui.status.EMPTY);
  }

  /**
   * Shows an image
   *
   * @param {string} url - image source
   * @returns {void}
   */
  fillImage(url) {
    /**
     * Check for a source extension to compose element correctly: video tag for mp4, img — for others
     */
    const tag = /\.mp4$/.test(url) ? 'VIDEO' : 'IMG';

    const attributes = {
      src: url,
    };

    /**
     * We use eventName variable because IMG and VIDEO tags have different event to be called on source load
     * - IMG: load
     * - VIDEO: loadeddata
     *
     * @type {string}
     */
    let eventName = 'load';

    /**
     * Update attributes and eventName if source is a mp4 video
     */
    if (tag === 'VIDEO') {
      /**
       * Add attributes for playing muted mp4 as a gif
       *
       * @type {boolean}
       */
      attributes.autoplay = true;
      attributes.loop = true;
      attributes.muted = true;
      attributes.playsinline = true;

      /**
       * Change event to be listened
       *
       * @type {string}
       */
      eventName = 'loadeddata';
    }

    /**
     * Compose tag with defined attributes
     *
     * @type {Element}
     */
    this.nodes.imageEl = make(tag, this.CSS.imageEl, attributes);

    /**
     * Add load event listener
     */
    this.nodes.imageEl.addEventListener(eventName, () => {
      this.toggleStatus(Ui.status.FILLED);

      /**
       * Preloader does not exists on first rendering with presaved data
       */
      if (this.nodes.imagePreloader) {
        this.nodes.imagePreloader.style.backgroundImage = '';
      }
    });

    this.nodes.imageContainer.appendChild(this.nodes.imageEl);
  }

  /**
   * Shows caption input
   *
   * @param {string} text - caption text
   * @returns {void}
   */
  fillCaption(text) {
    if (this.nodes.caption) {
      this.nodes.caption.innerHTML = text;
    }
  }

  /**
   * Changes UI status
   *
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(status) {
    for (const statusType in Ui.status) {
      if (Object.prototype.hasOwnProperty.call(Ui.status, statusType)) {
        this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${Ui.status[statusType]}`, status === Ui.status[statusType]);
      }
    }
  }

  /**
   * Apply visual representation of activated tune
   *
   * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
   * @param {boolean} status - true for enable, false for disable
   * @returns {void}
   */
  applyTune(tuneName, status) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${tuneName}`, status);
  }
}

/**
 * Helper for making Elements with attributes
 *
 * @param  {string} tagName           - new Element tag name
 * @param  {Array|string} classNames  - list or name of CSS class
 * @param  {object} attributes        - any attributes
 * @returns {Element}
 */
export const make = function make(tagName, classNames = null, attributes = {}) {
  const el = document.createElement(tagName);

  if (Array.isArray(classNames)) {
    el.classList.add(...classNames);
  } else if (classNames) {
    el.classList.add(classNames);
  }

  for (const attrName in attributes) {
    el[attrName] = attributes[attrName];
  }

  return el;
};
