import ajax from '@codexteam/ajax';

const mergeConfig = ({
  endpoints = {},
  additionalRequestData = {},
  additionalRequestHeaders = {},
  field = 'image'
}) => ({
  endpoints,
  additionalRequestData,
  additionalRequestHeaders,
  field
});

/**
 * @typedef {object} UploaderConfig
 * @description Config supported by Uploader
 * @property {object} endpoints - upload endpoints
 * @property {string} endpoints.byFile - upload by file
 * @property {string} endpoints.byUrl - upload by URL
 * @property {string} field - field name for uploaded image
 * @property {object} additionalRequestData - any data to send with requests
 * @property {object} additionalRequestHeaders - allows to pass custom headers with Request
 */

/**
 * Module for file uploading. Handle 3 scenarios:
 *  1. Select file from device and upload
 *  2. Upload by pasting URL
 *  3. Upload by pasting file from Clipboard or by Drag'n'Drop
 */
export default class Uploader {
  /**
   * @param {UploaderConfig} config
   */
  constructor(config) {
    this.config = mergeConfig(config);
  }

  /**
   * Handle clicks on the upload file button
   * @fires ajax.post()
   * @param {string} url - image source url
   * @param {function(string)} setPreview - callback for set preview image
   * @returns {Promise<UploadResponseFormat>}
   */
  uploadByUrl(url, { setPreview }) {
    setPreview(url);
    return ajax.post({
      url: this.config.endpoints.byUrl,
      data: Object.assign({
        url: url
      }, this.config.additionalRequestData),
      type: ajax.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    });
  }

  /**
   * Handle clicks on the upload file button or by paste and drag and drop
   * @fires ajax.post()
   * @param {File} file - file pasted by drag-n-drop
   * @param {function(string)} setPreview - callback for set preview image
   * @returns {Promise<UploadResponseFormat>}
   */
  uploadByFile(file, { setPreview }) {
    /**
     * Load file for preview
     * @type {FileReader}
     */
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setPreview(e.target.result);
    };

    /**
     * Compose Form Data for sending
     */
    let formData = new FormData();

    formData.append(this.config.field, file);

    if (Object.keys(this.config.additionalRequestData).length) {
      Object.entries(this.config.additionalRequestData).forEach(([name, value]) => {
        formData.append(name, value);
      });
    }

    return ajax.post({
      url: this.config.endpoints.byFile,
      data: formData,
      type: ajax.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    });
  }
}
