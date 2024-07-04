declare module '@codexteam/ajax' {
    export interface AjaxOptions {
      url?: string;
      data?: any;
      accept?: string;
      headers?: Headers;
      beforeSend?: (files: File[]) => void;
      fieldName?: string;
      type?: string;
    }
  
    export interface AjaxResponse<T = any> {
      body: T;
    }
  
    export function selectFiles(options: { accept: string }): Promise<File[]>;
  
    export function transport(options: AjaxOptions): Promise<AjaxResponse>;
  
    export function post(options: AjaxOptions): Promise<AjaxResponse>;
  
    export const contentType: {
      JSON: string;
    };
  }
  