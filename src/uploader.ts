import ajax from '@codexteam/ajax';
import isPromise from './utils/isPromise';
import { UploadOptions } from './types/types';
import { UploadResponseFormat, ImageConfig } from './types/types';

/**
 * Params interface for Uploader constructor
 */
interface UploaderParams<AdditionalUploadResponse = {}> {
  /**
   * Configuration for the uploader
   */
  config: ImageConfig;
  /**
   * 
   * @param response: Callback function for successful upload
   * @returns void
   */
  onUpload: (response: UploadResponseFormat<AdditionalUploadResponse>) => void;
  /**
   * 
   * @param error : error type
   * @returns void
   */
  onError: (error: any) => void;
}

/**
 * Module for file uploading. Handle 3 scenarios:
 *  1. Select file from device and upload
 *  2. Upload by pasting URL
 *  3. Upload by pasting file from Clipboard or by Drag'n'Drop
 */
export default class Uploader<AdditionalUploadResponse = {}> {
  private config: ImageConfig;
  private onUpload: (response: UploadResponseFormat<AdditionalUploadResponse>) => void;
  private onError: (error: any) => void;
  /**
   * @param {object} params - uploader module params
   * @param {ImageConfig} params.config - image tool config
   * @param {Function} params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param {Function} params.onError - callback for uploading errors
   */
  constructor({ config, onUpload, onError }: UploaderParams<AdditionalUploadResponse>) {
    this.config = config;
    this.onUpload = onUpload;
    this.onError = onError;
  }

  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   *
   * @param {Function} onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({ onPreview }: UploadOptions) {
    const preparePreview = function (file: File) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = (e) => {
        onPreview((e.target as FileReader).result as string);
      };
    };

    /**
     * Custom uploading
     * or default uploading
     */
    let upload: Promise<UploadResponseFormat<AdditionalUploadResponse>>;

    // custom uploading
    if (this.config.uploader && typeof this.config.uploader.uploadByFile === 'function') {
      const uploadByFile = this.config.uploader.uploadByFile;
      upload = ajax.selectFiles({ accept: this.config.types || 'image/*'}).then((files: File[]) => {
        preparePreview(files[0]);

        const customUpload = uploadByFile(files[0]);

        if (!isPromise(customUpload)) {
          console.warn('Custom uploader method uploadByFile should return a Promise');
        }

        return customUpload as Promise<UploadResponseFormat<AdditionalUploadResponse>>;
      });

    // default uploading
    } else {
      upload = ajax.transport({
        url: this.config.endpoints.byFile,
        data: this.config.additionalRequestData,
        accept: this.config.types,
        headers: new Headers(this.config.additionalRequestHeaders as Record<string, string>),
        beforeSend: (files: File[]) => {
          preparePreview(files[0]);
        },
        fieldName: this.config.field,
      }).then((response: any) => response.body);
    }

    upload.then((response) => {
      this.onUpload(response as UploadResponseFormat<AdditionalUploadResponse>);
    }).catch((error) => {
      this.onError(error);
    });
  }

  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {string} url - image source url
   */
  uploadByUrl(url: string) {
    let upload;

    /**
     * Custom uploading
     */
    if (this.config.uploader && typeof this.config.uploader.uploadByUrl === 'function') {
      upload = this.config.uploader.uploadByUrl(url);

      if (!isPromise(upload)) {
        console.warn('Custom uploader method uploadByUrl should return a Promise');
      }
    } else {
      /**
       * Default uploading
       */
      upload = ajax.post({
        url: this.config.endpoints.byUrl,
        data: Object.assign({
          url: url,
        }, this.config.additionalRequestData),
        type: ajax.contentType.JSON,
        headers: new Headers(this.config.additionalRequestHeaders as Record<string, string>),
      }).then((response: any) => response.body);
    }

    upload.then((response: UploadResponseFormat<AdditionalUploadResponse>) => {
      this.onUpload(response);
    }).catch((error: any) => {
      this.onError(error);
    });
  }

  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {File} file - file pasted by drag-n-drop
   * @param {Function} onPreview - file pasted by drag-n-drop
   */
  uploadByFile(file: Blob, { onPreview }: UploadOptions) {
    /**
     * Load file for preview
     *
     * @type {FileReader}
     */
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (e) => {
      onPreview((e.target as FileReader).result as string);
    };

    let upload: Promise<UploadResponseFormat>;

    /**
     * Custom uploading
     */
    if (this.config.uploader && typeof this.config.uploader.uploadByFile === 'function') {
      upload = this.config.uploader.uploadByFile(file);

      if (!isPromise(upload)) {
        console.warn('Custom uploader method uploadByFile should return a Promise');
      }
    } else {
      /**
       * Default uploading
       */
      const formData = new FormData();

      formData.append(this.config.field || 'image', file);

      if (this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length) {
        Object.entries(this.config.additionalRequestData).forEach(([name, value]: [string, any]) => {
          formData.append(name, value);
        });
      }

      upload = ajax.post({
        url: this.config.endpoints.byFile,
        data: formData,
        type: ajax.contentType.JSON,
        headers: new Headers(this.config.additionalRequestHeaders as Record<string, string>),
      }).then((response: any) => response.body);
    }

    upload.then((response) => {
      this.onUpload(response as UploadResponseFormat<AdditionalUploadResponse>);
    }).catch((error) => {
      this.onError(error);
    });
  }
}

