import ajax from "@codexteam/ajax";

/**
 * Module for file uploading. Handle 3 scenarios:
 *  1. Select file from device and upload
 *  2. Upload by pasting URL
 *  3. Upload by pasting file from Clipboard or by Drag'n'Drop
 */
export default class Uploader {
  /**
   * @param {ImageConfig} config
   * @param {function} onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param {function} onError - callback for uploading errors
   */
  constructor({config, onUpload, onError}){
    this.config = config;
    this.onUpload = onUpload;
    this.onError = onError;
  }

  /**
   * Handle clicks on the upload file button
   * @fires ajax.transport()
   * @param {function} onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({onPreview}){
    ajax.transport({
      url: this.config.endpoints.byFile,
      data: this.config.additionalRequestData,
      accept: this.config.types,
      headers: this.config.additionalRequestHeaders,
      beforeSend: (files) => {
        const reader = new FileReader();

        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
          onPreview(e.target.result);
        };
      },
      fieldName: this.config.field
    })
      .then((response) => {
        this.onUpload(response);
      })
      .catch((error) => {
        this.onError(error);
      });
  }

  /**
   * Handle clicks on the upload file button
   * @fires ajax.post()
   * @param {string} url - image source url
   */
  uploadByUrl(url){
    ajax.post({
      url: this.config.endpoints.byUrl,
      data: Object.assign({
        url: url
      }, this.config.additionalRequestData),
      type: ajax.contentType.JSON,
      headers: this.config.additionalRequestHeaders,
    })
      .then((response) => {
        this.onUpload(response);
      })
      .catch((error) => {
        this.onError(error);
      });
  }

  /**
   * Handle clicks on the upload file button
   * @fires ajax.post()
   * @param {File} file - file pasted by drag-n-drop
   * @param {function} onPreview - file pasted by drag-n-drop
   */
  uploadByFile(file, {onPreview}){
    /**
     * Load file for preview
     * @type {FileReader}
     */
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (e) => {
      onPreview(e.target.result);
    };

    /**
     * Compose Form Data for sending
     */
    let formData = new FormData();
    formData.append(this.config.field, file);

    if (this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length){
      Object.entries(this.config.additionalRequestData).forEach(([name, value]) => {
        formData.append(name, value);
      })
    }

    ajax.post({
      url: this.config.endpoints.byFile,
      data: formData,
      type: ajax.contentType.JSON,
      headers: this.config.additionalRequestHeaders,
    })
      .then((response) => {
        this.onUpload(response);
      })
      .catch((error) => {
        this.onError(error);
      });
  }
}