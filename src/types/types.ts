import type { HTMLPasteEventDetail } from "@editorjs/editorjs";

/**
 * Configuration options for file upload preview handling
 * @typedef {Object} UploadOptions
 * @property {function(string): void} onPreview - Preview ready callback
 */
export interface UploadOptions {
  /**
   * Callback when preview is available
   * @param {string} src - Preview image source URL
   * @returns {void}
   */
  onPreview: (src: string) => void;
}

/**
 * Configuration for custom block tune actions
 * @typedef {Object} ActionConfig
 * @property {string} name - Unique action identifier
 * @property {string} icon - SVG icon string
 * @property {string} title - Display text for UI
 * @property {boolean} [toggle] - Whether the action is a toggle
 * @property {function(string): void} [action] - Action handler function
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
  action?: (name: string) => void;
}

/**
 * Standard upload response format
 * @template [AdditionalFileData={}] - Type for additional file metadata
 * @typedef {Object} UploadResponseFormat
 * @property {number} success - Upload status (1=success, 0=failure)
 * @property {Object} file - Uploaded file data
 * @property {string} file.url - File access URL
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
 * Core image tool data structure
 * @template [Actions={}] - Type for custom actions
 * @template [AdditionalFileData={}] - Type for additional file metadata
 * @typedef {Object} ImageToolData
 * @property {string} caption - Image description text
 * @property {boolean} withBorder - Border display state
 * @property {boolean} withBackground - Background display state
 * @property {boolean} stretched - Stretch display state
 * @property {Object} file - File reference data
 * @property {string} file.url - Image source URL
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
 * Feature toggle configuration
 * @typedef {Object} FeaturesConfig
 * @property {boolean} [background] - Background toggle state
 * @property {boolean} [border] - Border toggle state
 * @property {boolean|'optional'} [caption] - Caption display mode
 * @property {boolean} [stretch] - Stretch toggle state
 */
export type FeaturesConfig = {
  /**
   * Flag to enable/disable tune - background.
   */
  background?: boolean;
  /**
   * Flag to enable/disable tune - border.
   */
  border?: boolean;
  /**
   * Flag to enable/disable caption.
   * Can be set to 'optional' to allow users to toggle via block tunes.
   */
  caption?: boolean | "optional";
  /**
   * Flag to enable/disable tune - stretched
   */
  stretch?: boolean;
};

/**
 * Main image tool configuration
 * @typedef {Object} ImageConfig
 * @property {Object} endpoints - Upload endpoint URLs
 * @property {string} endpoints.byFile - File upload endpoint
 * @property {string} endpoints.byUrl - URL upload endpoint
 * @property {string} [field] - Form field name for uploads
 * @property {string} [types] - Allowed MIME types
 * @property {string} [captionPlaceholder] - Caption input placeholder
 * @property {Object} [additionalRequestData] - Additional POST data
 * @property {Object} [additionalRequestHeaders] - Additional headers
 * @property {string} [buttonContent] - Custom button content
 * @property {Object} [uploader] - Custom uploader implementation
 * @property {function(File): Promise<UploadResponseFormat>} [uploader.uploadByFile] - Custom file upload handler
 * @property {function(string): Promise<UploadResponseFormat>} [uploader.uploadByUrl] - Custom URL upload handler
 * @property {ActionConfig[]} [actions] - Custom actions
 * @property {FeaturesConfig} [features] - Feature toggle states
 */
export interface ImageConfig {
  /**
   * Endpoints for upload, whether using file or URL.
   */
  endpoints: {
    /**
     * Endpoint for file upload.
     */
    byFile: string;

    /**
     * Endpoints for URL upload.
     */
    byUrl: string;
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
  additionalRequestData?: Record<string, string>;

  /**
   * Additional headers to send with requests.
   */
  additionalRequestHeaders?: Record<string, string>;

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
    uploadByFile?: (file: File) => Promise<UploadResponseFormat>;

    /**
     * Method to upload an image by URL.
     */
    uploadByUrl?: (url: string) => Promise<UploadResponseFormat>;
  };

  /**
   * Additional actions for the tool.
   */
  actions?: ActionConfig[];

  /**
   * Tunes to be enabled.
   */
  features?: FeaturesConfig;
}

/**
 * Extended paste event details
 * @typedef {Object} HTMLPasteEventDetailExtended
 * @extends {HTMLPasteEventDetail}
 * @property {Object} data - Paste event payload
 * @property {string} data.src - Pasted image source URL
 */
export interface HTMLPasteEventDetailExtended extends HTMLPasteEventDetail {
  /**
   * The data property containing the source of the image and HTML element details.
   */
  data: {
    /**
     * The source URL of the pasted image.
     */
    src: string;
  } & HTMLElement;
}

/**
 * Image setter parameter type
 * @typedef {Object} ImageSetterParam
 * @property {string} url - Image source URL
 */
export type ImageSetterParam = {
  /**
   * url path of the image
   */
  url: string;
};
