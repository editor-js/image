import './index.css';

import Ui from './ui';
import Uploader from './uploader';

import { IconPicture } from '@codexteam/icons';

/**
 * @typedef {object} ImageToolData
 * @description Image Tool's input and output data format
 * @property {string} caption — image caption
 * @property {boolean} withBorder - should image be rendered with border
 * @property {boolean} withBackground - should image be rendered with background
 * @property {boolean} stretched - should image be stretched to full width of container
 * @property {object} file — Image file data returned from backend
 * @property {string} file.url — image URL
 * @property {string} height - image height
 */

export default class ImageTool {
  static get isReadOnlySupported() {
    return true;
  }

  static get toolbox() {
    return {
      icon: IconPicture,
      title: 'Image',
    };
  }

  constructor({ data, config, api, readOnly, block }) {
    this.api = api;
    this.readOnly = readOnly;
    this.block = block;

    this.config = {
      endpoints: config.endpoints || '',
      additionalRequestData: config.additionalRequestData || {},
      additionalRequestHeaders: config.additionalRequestHeaders || {},
      field: config.field || 'image',
      types: config.types || 'image/*',
      captionPlaceholder: this.api.i18n.t(config.captionPlaceholder || 'Caption'),
      numberInputPlaceholder: this.api.i18n.t(config.numberInputPlaceholder || 'Image Height (px) - Default 100px'),
      buttonContent: config.buttonContent || '',
      uploader: config.uploader || undefined,
      actions: config.actions || [],
    };

    this.uploader = new Uploader({
      config: this.config,
      onUpload: (response) => this.onUpload(response),
      onError: (error) => this.uploadingFailed(error),
    });

    this.ui = new Ui({
      api,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (src) => {
            this.ui.showPreloader(src);
          },
        });
      },
      readOnly,
    });

    this._data = {};
    this.data = data;
  }

  render() {
    return this.ui.render(this.data);
  }

  validate(savedData) {
    return savedData.file && savedData.file.url;
  }

  save() {
    const caption = this.ui.nodes.caption;
    const height = this.ui.nodes.numberInput;

    this._data.caption = caption.innerHTML;
    this._data.height = height.innerHTML;

    return this.data;
  }

  appendCallback() {
    this.ui.nodes.fileButton.click();
  }

  static get pasteConfig() {
    return {
      tags: [
        {
          img: { src: true },
        },
      ],
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i,
      },
      files: {
        mimeTypes: [ 'image/*' ],
      },
    };
  }

  async onPaste(event) {
    switch (event.type) {
      case 'tag': {
        const image = event.detail.data;

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
        const url = event.detail.data;

        this.uploadUrl(url);
        break;
      }
      case 'file': {
        const file = event.detail.file;

        this.uploadFile(file);
        break;
      }
    }
  }

  set data(data) {
    this.image = data.file;

    this._data.caption = data.caption || '';
    this._data.height = data.height || '';
    this.ui.fillCaption(this._data.caption);
    this.ui.fillHeight(this._data.height);
  }

  get data() {
    return this._data;
  }

  set image(file) {
    this._data.file = file || {};

    if (file && file.url) {
      this.ui.fillImage(file.url);
    }
  }

  onUpload(response) {
    if (response.success && response.file) {
      this.image = response.file;
    } else {
      this.uploadingFailed('incorrect response: ' + JSON.stringify(response));
    }
  }

  uploadingFailed(errorText) {
    console.log('Image Tool: uploading failed because of', errorText);

    this.api.notifier.show({
      message: this.api.i18n.t('Couldn’t upload image. Please try another.'),
      style: 'error',
    });
    this.ui.hidePreloader();
  }

  uploadFile(file) {
    this.uploader.uploadByFile(file, {
      onPreview: (src) => {
        this.ui.showPreloader(src);
      },
    });
  }

  uploadUrl(url) {
    this.ui.showPreloader(url);
    this.uploader.uploadByUrl(url);
  }
}
