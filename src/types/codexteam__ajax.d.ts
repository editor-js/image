/**
 * Module declaration for '@codexteam/ajax'.
 */
declare module "@codexteam/ajax" {
  /**
   * Options for configuring an AJAX request
   * @typedef {Object} AjaxOptions
   * @property {string} [url] - The target URL for the request
   * @property {Object} [data] - Payload to send with the request
   * @property {string} [accept] - MIME type to accept in response
   * @property {Object} [headers] - Custom headers to include
   * @property {function(File[]): void} [beforeSend] - Callback before sending files
   * @property {string} [fieldName] - Form data field name for file uploads
   * @property {string} [type] - HTTP method type (GET/POST/etc)
   */
  export interface AjaxOptions {
    /**
     * The URL to which the request is sent.
     */
    url?: string;
    /**
     * The data to send with the request.
     */
    data?: object;
    /**
     * The MIME type of the request.
     */
    accept?: string;
    /**
     * The headers to send with the request.
     */
    headers?: object;
    /**
     * A function to call before the request is sent, with the files to be sent.
     */
    beforeSend?: (files: File[]) => void;
    /**
     * The name of the field in the form data to which the file should be assigned.
     */
    fieldName?: string;
    /**
     * The type of the request (e.g., 'POST', 'GET').
     */
    type?: string;
  }

  /**
   * File selection options structure
   * @typedef {Object} AjaxFileOptionsParam
   * @property {string} accept - Allowed file types (e.g. 'image/*')
   */
  export type AjaxFileOptionsParam = {
    /**
     * the accepted file types.
     */
    accept: string;
  };

  /**
   * AJAX response wrapper with typed body
   * @template T - Type of the response body content
   * @typedef {Object} AjaxResponse
   * @property {number} status - HTTP status code
   * @property {T} body - Parsed response content
   */
  export interface AjaxResponse<T = unknown> {
    status: number;
    body: T;
  }

  /**
   * File selection handler
   * @function selectFiles
   * @param {AjaxFileOptionsParam} options - File type restrictions
   * @returns {Promise<File[]>} Array of selected files
   */
  export function selectFiles(options: AjaxFileOptionsParam): Promise<File[]>;

  /**
   * Core transport method for AJAX requests
   * @function transport
   * @template T - Expected response body type
   * @param {Object} options - Transport configuration
   * @param {string} options.url - Endpoint URL
   * @param {FormData|Record<string, unknown>} [options.data] - Request payload
   * @param {string} [options.accept] - Response MIME type
   * @param {Record<string, string>} [options.headers] - Request headers
   * @param {function(File[]): void} [options.beforeSend] - File preprocessor
   * @param {string} [options.fieldName] - Form field name
   * @returns {Promise<AjaxResponse<T>>} Response wrapper
   */
  export function transport<T = unknown>(options: {
    url: string;
    data?: FormData | Record<string, unknown>;
    accept?: string;
    headers?: Record<string, string>;
    beforeSend?: (files: File[]) => void;
    fieldName?: string;
  }): Promise<AjaxResponse<T>>;

  /**
   * POST request shortcut
   * @function post
   * @template T - Expected response body type
   * @param {Object} options - Request configuration
   * @param {string} options.url - Target endpoint
   * @param {FormData|Record<string, unknown>} options.data - POST payload
   * @param {string} [options.type] - Content type header
   * @param {Record<string, string>} [options.headers] - Custom headers
   * @returns {Promise<AjaxResponse<T>>} Response wrapper
   */
  export function post<T = unknown>(options: {
    url: string;
    data: FormData | Record<string, unknown>;
    type?: string;
    headers?: Record<string, string>;
  }): Promise<AjaxResponse<T>>;

  /**
   * Represents common content types.
   */
  export const contentType: {
    /**
     * The MIME type for JSON content.
     */
    JSON: string;
  };
}
