import isPromise from './utils/isPromise';

/**
 * Module for file downloading. Handle case, when you have to use custom downloading method
 */
export default class Downloader {
  /**
   * @param {object} params - downloader module params
   * @param {ImageConfig} params.config - image tool config
   * @param {Function} params.onDownload - callback which is called, when file is downloaded
   * @param {Function} params.onError - callback for downloading errors
   */
  constructor({ config, onDownload, onError }) {
    this.config = config;
    this.onDownload = onDownload;
    this.onError = onError;
  }

  /**
   * Try to download file data and fill it using stored data
   *
   * @param {string} fileData - may be some key for custom downloading or url
   */
  download(fileData) {
    /**
     * Check that custom downloader passed
     */
    if (this.config.downloader && typeof this.config.downloader.download === 'function') {
      const downloadData = this.config.downloader.download(fileData);

      if (!isPromise(downloadData)) {
        console.warn('Custom downloader method download should return a Promise');
      }

      downloadData.then((response) => {
        /**
         * Call callback for successful downloading with url
         */
        this.onDownload(response);
      }).catch((error) => {
        this.onError(error);
      });
    } else {
      /**
       * If there is no custom download method, fileData is correct url
       * We only need to call callback
       */
      this.onDownload(fileData);
    }
  }
}
