/**
 * Module declaration for '@codexteam/ajax'.
 */
declare module '@codexteam/ajax' {
  /**
   * Options for configuring an Ajax request.
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
   * Parameter type of selectFiles function in AjaxOptions interface
   */
  export type AjaxFileOptionsParam = {
    /**
     * the accepted file types.
     */
    accept: string;
  };

  /**
   * Represents the response from an Ajax request.
   * @template T - The type of the response body.
   */
  export interface AjaxResponse<T = object> {
    /** The body of the response. */
    body: T;
  }

  /**
   * Prompts the user to select files and returns a promise that resolves with the selected files.
   * @param options - Options for file selection.
   * @param options.accept - The accepted file types.
   * @returns A promise that resolves with the selected files.
   */
  export function selectFiles(options: AjaxFileOptionsParam): Promise<File[]>;

  /**
   * Sends an Ajax request with the specified options.
   * @param options - Options for the Ajax request.
   * @returns A promise that resolves with the Ajax response.
   */
  export function transport(options: AjaxOptions): Promise<AjaxResponse>;

  /**
   * Sends a POST request with the specified options.
   * @param options - Options for the POST request.
   * @returns A promise that resolves with the Ajax response.
   */
  export function post(options: AjaxOptions): Promise<AjaxResponse>;

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
