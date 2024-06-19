/**
 * Represents options for uploading, including a function to handle previewing.
 */
export interface UploadOptions  { 
  onPreview: (src: string) => void 
};

/** 
 * User configuration of Image block tunes. Allows to add custom tunes through the config
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
