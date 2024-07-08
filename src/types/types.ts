/**
 * Represents options for uploading, including a function to handle previewing.
 */
export interface UploadOptions  { 
  onPreview: (src: string) => void 
};

/**
 * Represents the format of a file object data with the additional data.
 */
export type FileObjectData<AdditionalData = {}> = {
  /**
   * The URL of the file.
   */
  url: string;
} & AdditionalData;

/** 
 * User configuration of Image block tunes. Allows to add custom tunes through the config
*/
export interface ActionConfig { 
  /**
   * The name of the tune.
   */
  name: string;
  
  /**
   * The icon for the tune. Should be an SVG string.
   */
  icon: string;
  
  /**
   * The title of the tune. This will be displayed in the UI.
   */
  title: string;
  
  /**
   * An optional flag indicating whether the tune is a toggle (true) or not (false).
   */
  toggle?: boolean;
  
  /**
   * An optional action function to be executed when the tune is activated.
   */
  action?: Function;
};

/**
 * UploadResponseFormat interface representing the response format expected from the backend on file uploading.
 */
export interface UploadResponseFormat<AdditionalFileData = {}> {
  /**
   * success - 1 for successful uploading, 0 for failure 
   */
  success: number;

  /**
   * Object with file data.
   *             'url' is required,
   *             also can contain any additional data that will be saved and passed back
   */
  file: {
    /**
     * The URL of the uploaded image.
     */
    url: string;
  } & AdditionalFileData;
}

/**
 * ImageToolData type representing the input and output data format for the image tool, including optional custome actions.
 */
export type ImageToolData<Actions = {}, AdditionalFileData = {}> = {
  /**
   * Caption for the image.
   */
  caption: string;

  /**
   * Flag indicating whether the image has a border.
   */
  withBorder: boolean;

  /**
   * Flag indicating whether the image has a background.
   */
  withBackground: boolean;

  /**
   * Flag indicating whether the image is stretched.
   */
  stretched: boolean;

  /**
   * Object containing the URL of the image file.
   * Also can contain any additional data.
   */
  file: {
    /**
     * The URL of the image.
     */
    url: string;
  } & AdditionalFileData;
} & (Actions extends Record<string, boolean> ? Actions : {});

/**
 *
 * @description Config supported by Tool
 */
export interface ImageConfig {
  /**
   * Endpoints for upload, whether using file or URL.
   */
  endpoints: {

    /**
     * Endpoint for file upload.
     */
    byFile?: string;

    /**
     * Endpoints for URL upload.
     */
    byUrl?: string;
  };

  /**
   * Field name for the uploaded image.
   */
  field?: string;

  /**
   * Allowed mime-types for the uploaded image.
   */
  types?: string;

  /**
   * Placeholder text for the caption field.
   */
  captionPlaceholder?: string;

  /**
   * Additional data to send with requests.
   */
  additionalRequestData?: object;

  /**
   * Additional headers to send with requests.
   */
  additionalRequestHeaders?: object;

  /**
   * Custom content for the select file button.
   */
  buttonContent?: string;

  /**
   * Optional custom uploader.
   */
  uploader?: {

    /**
     * Method to upload an image by file.
     */
    uploadByFile?: (file: Blob) => Promise<UploadResponseFormat>;

    /**
     * Method to upload an image by URL.
     */
    uploadByUrl?: (url: string) => Promise<UploadResponseFormat>;
  };

  /**
   * Additional actions for the tool.
   */
  actions?: ActionConfig[];
}