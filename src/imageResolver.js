import isPromise from './utils/isPromise';

/**
 * Module for file image resolving. Handle case, when you have to use custom image resolving method
 */
export default class ImageResolver {
  /**
   * @param {object} params - image resolver module params
   * @param {ImageConfig} params.config - image tool config
   * @param {Function} params.onError - callback for resolving errors
   */
  constructor({ config, onResolve, onError }) {
    this.config = config;
    this.onError = onError;
  }

  /**
   * Try to resolve image url by file data and fill it using stored data
   *
   * @param {any} fileData - file data, from which file url need to be resolved
   */
  async resolveUrlByFileData(fileData) {
    /**
     * Check that custom url resolver passed
     */
    if (this.config.imageResolver && typeof this.config.imageResolver.resolveUrlByFileData === 'function') {
      const resolveFileData = this.config.imageResolver.resolveUrlByFileData(fileData);

      if (!isPromise(resolveFileData)) {
        console.warn('Custom downloader method download should return a Promise');
      }

      try {
        /**
         * Return resolver url
         */
        return await resolveFileData;
      } catch (error) {
        this.onError(error);
      }
    } else {
      /**
       * If there is no custom resolve method, fileData must have correct url property, which have no need in resolving
       */
      if (!fileData.url) {
        this.onError('Incorrect data: file data should contain url');
      }

      return fileData.url;
    }
  }
}
