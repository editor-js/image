import isPromise from './utils/isPromise';

/**
 * Module for file image resolving. Handle case, when you have to use custom image resolving method
 */
export default class ImageResolver {
  /**
   * @param {object} params - image resolver module params
   * @param {ImageConfig} params.config - image tool config
   * @param {Function} params.onResolve - callback which is called, when file is resolved
   * @param {Function} params.onError - callback for resolving errors
   */
  constructor({ config, onResolve, onError }) {
    this.config = config;
    this.onResolve = onResolve;
    this.onError = onError;
  }

  /**
   * Try to resolve image url by file data and fill it using stored data
   *
   * @param {string} fileData - file data from custom image resolving
   */
  resolveUrlByFileData(fileData) {
    /**
     * Check that custom downloader passed
     */
    if (this.config.imageResolver && typeof this.config.imageResolver.resolveUrlByFileData === 'function') {
      const resolveFileData = this.config.imageResolver.resolveUrlByFileData(fileData);

      if (!isPromise(resolveFileData)) {
        console.warn('Custom downloader method download should return a Promise');
      }

      resolveFileData.then((response) => {
        /**
         * Call callback for successful resolving with url
         */
        this.onResolve(response);
      }).catch((error) => {
        this.onError(error);
      });
    } else {
      /**
       * If there is no custom resolve method, fileData is correct url
       * We only need to call callback
       */
      this.onResolve(fileData);
    }
  }
}
