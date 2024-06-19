/** 
 * Preview: Represents a function to handle previewing with a source string.
*/
export type PreviewCallback = { onPreview: (src: string) => void };

/** 
 * UICSS: Represents a key-value pair of CSS properties.
*/
export type UICSS = { [key: string]: string };

/** 
 * UIStatus: Represents different statuses like EMPTY, UPLOADING, FILLED.
*/
export type UIStatus = {EMPTY: string, UPLOADING: string, FILLED: string};

/** 
 * UIAttributes: Represents a key-value pair of attributes.
*/
export type UIAttributes = { [key: string]: any};

/** 
 * Tunes: Represents a tone with name, icon, title, toggle, and optional action.
*/
export type TunesConfig = { name: string; icon: string; title: string; toggle: boolean, action?: Function };

/**
 * UploadResponseFormat interface representing the response format expected from the backend on file uploading.
 */
export interface UploadResponseFormat {
  success: number;
  file: {
    url: string;
  };
}
