import ajax from '@codexteam/ajax';
import type { AjaxResponse } from '@codexteam/ajax';
import isPromise from './utils/isPromise';
import type { UploadOptions } from './types/types';
import type { UploadResponseFormat, ImageConfig } from './types/types';

/**
 * Params interface for Uploader constructor
 */
interface UploaderParams<AdditionalUploadResponse = {}> {
  /**
   * Configuration for the uploader
   */
  config: ImageConfig<AdditionalUploadResponse>;
  /**
   * Handles the upload response.
   * @param {UploadResponseFormat<AdditionalUploadResponse>} response - Response format expected from the backend on file uploading.
   * @returns {void}
   */
  onUpload: (response: UploadResponseFormat<AdditionalUploadResponse>) => void;
  /**
   *
   * @param error : error type
   * @returns void
   */
  onError: (error: string) => void;
}

/**
 * Module for file uploading. Handle 3 scenarios:
 *  1. Select file from device and upload
 *  2. Upload by pasting URL
 *  3. Upload by pasting file from Clipboard or by Drag'n'Drop
 */
export default class Uploader<AdditionalUploadResponse = {}> {
  private config: ImageConfig<AdditionalUploadResponse>;
  private onUpload: (response: UploadResponseFormat<AdditionalUploadResponse>) => void;
  private onError: (error: string) => void;
  /**
   * @param params - uploader module params
   * @param params.config - image tool config
   * @param params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param params.onError - callback for uploading errors
   */
  constructor({ config, onUpload, onError }: UploaderParams<AdditionalUploadResponse>) {
    this.config = config;
    this.onUpload = onUpload;
    this.onError = onError;
  }

  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   * @param onPreview - callback fired when preview is ready
   */
  public uploadSelectedFile({ onPreview }: UploadOptions): void {
    const preparePreview = function (file: File): void {
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

      upload = ajax.selectFiles({ accept: this.config.types ?? 'image/*' }).then((files: File[]) => {
        preparePreview(files[0]);

        const customUpload: Promise<UploadResponseFormat<AdditionalUploadResponse>> = uploadByFile(files[0]);

        if (!isPromise<AdditionalUploadResponse>(customUpload)) {
          console.warn('Custom uploader method uploadByFile should return a Promise');
        }

        return customUpload;
      });

    // default uploading
    } else {
      upload = ajax.transport({
        url: this.config.endpoints.byFile,
        data: this.config.additionalRequestData,
        accept: this.config.types,
        headers: this.config.additionalRequestHeaders as Record<string, string>,
        beforeSend: (files: File[]) => {
          preparePreview(files[0]);
        },
        fieldName: this.config.field ?? 'image',
      }).then((response: AjaxResponse) => response.body as UploadResponseFormat<AdditionalUploadResponse>);
    }

    upload.then((response) => {
      this.onUpload(response);
    }).catch((error: string) => {
      this.onError(error);
    });
  }

  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   * @param url - image source url
   */
  public uploadByUrl(url: string): void {
    let upload: Promise<UploadResponseFormat<AdditionalUploadResponse>>;

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
        headers: this.config.additionalRequestHeaders as Record<string, string>,
      }).then((response: AjaxResponse) => response.body as UploadResponseFormat<AdditionalUploadResponse>);
    }

    upload.then((response: UploadResponseFormat<AdditionalUploadResponse>) => {
      this.onUpload(response);
    }).catch((error: string) => {
      this.onError(error);
    });
  }

  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   * @param file - file pasted by drag-n-drop
   * @param onPreview - file pasted by drag-n-drop
   */
  public uploadByFile(file: Blob, { onPreview }: UploadOptions): void {
    /**
     * Load file for preview
     */
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (e) => {
      onPreview((e.target as FileReader).result as string);
    };

    let upload: Promise<UploadResponseFormat<AdditionalUploadResponse>>;

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

      formData.append(this.config.field ?? 'image', file);

      if (this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length) {
        Object.entries(this.config.additionalRequestData).forEach(([name, value]: [string, string | Blob]) => {
          formData.append(name, value);
        });
      }

      upload = ajax.post({
        url: this.config.endpoints.byFile,
        data: formData,
        type: ajax.contentType.JSON,
        headers: this.config.additionalRequestHeaders as Record<string, string>,
      }).then((response: AjaxResponse) => response.body as UploadResponseFormat<AdditionalUploadResponse>);
    }

    upload.then((response) => {
      this.onUpload(response);
    }).catch((error: string) => {
      this.onError(error);
    });
  }
}
