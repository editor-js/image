import ajax from '@codexteam/ajax';
import isPromise from './utils/isPromise';

/**
 * Module for file deleting. Handle 3 scenarios:
 *  1. Select file from device and upload
 *  2. Upload by pasting URL
 *  3. Upload by pasting file from Clipboard or by Drag'n'Drop
 */
export default class Deleter {
  /**
   * @param {ImageConfig} params.config - image tool config
   * @param {Function} params.onDelete - one callback for all deleting
   * @param {Function} params.onError - callback for uploading errors
   */
  constructor({ config, onDelete, onError }) {
    this.config = config;
    this.onDelete = onDelete;
    this.onError = onError;
  }

  /**
   *
   * @param {string} url - file url to be deleted
   */
  deleteFile(url, { onPreview }) {
    let upload;

    if (
      this.config.deleter &&
      typeof this.config.deleter.deleteFile === 'function'
    ) {
      upload = this.config.deleter.deleteFile(url);
      if (!isPromise(upload)) {
        console.warn(
          `Custom deleter method deleteFile should return a Promise.`
        );
      }
    } else {
      upload = ajax
        .transport({
          url: this.config.endpoints.byUrl,
          data: this.config.additionalRequestData,
          accept: this.config.types,
          headers: this.config.additionalRequestHeaders,
          beforeSend: () => {
            onPreview();
          },
          fieldName: this.config.field,
        })
        .then((response) => response.body);
    }
  }

  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   *
   * @param {Function} onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({ onPreview }) {
    const preparePreview = function (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = (e) => {
        onPreview(e.target.result);
      };
    };

    /**
     * Custom uploading
     * or default uploading
     */
    let upload;

    // custom uploading
    if (
      this.config.uploader &&
      typeof this.config.uploader.uploadByFile === 'function'
    ) {
      upload = ajax.selectFiles({ accept: this.config.types }).then((files) => {
        preparePreview(files[0]);

        const customUpload = this.config.uploader.uploadByFile(files[0]);

        if (!isPromise(customUpload)) {
          console.warn(
            'Custom uploader method uploadByFile should return a Promise'
          );
        }

        return customUpload;
      });

      // default uploading
    } else {
      upload = ajax
        .transport({
          url: this.config.endpoints.byFile,
          data: this.config.additionalRequestData,
          accept: this.config.types,
          headers: this.config.additionalRequestHeaders,
          beforeSend: (files) => {
            preparePreview(files[0]);
          },
          fieldName: this.config.field,
        })
        .then((response) => response.body);
    }

    upload
      .then((response) => {
        this.onUpload(response);
      })
      .catch((error) => {
        this.onError(error);
      });
  }
}
