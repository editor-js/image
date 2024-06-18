/**
 * Documentation for types added:
 * - PreviewType: Represents a function to handle previewing with a source string.
 * - CSSType: Represents a key-value pair of CSS properties.
 * - StatusType: Represents different statuses like EMPTY, UPLOADING, FILLED.
 * - AttributesType: Represents a key-value pair of attributes.
 * - ToolsboxType: Represents an icon and title for a toolbox item.
 * - TonesType: Represents a tone with name, icon, title, toggle, and optional action.
 * - PasteConfigType: Represents configuration for pasting with tags, patterns, and file types.
 * - RenderSettingsType: Represents settings for rendering with icon, label, name, toggle, isActive, and onActivate function.
 */
export type PreviewType = { onPreview: (src: string) => void };
export type CSSType = { [key: string]: string };
export type StatusType = {EMPTY: string, UPLOADING: string, FILLED: string};
export type AttributesType = { [key: string]: any};
export type ToolsboxType = {icon: string, title: string};
export type TonesType = { name: string; icon: string; title: string; toggle: boolean, action?: Function };
export type PasteConfigType = { tags: Array<{ img: { src: boolean } }>; patterns: { image: RegExp }; files: { mimeTypes: string[] } };
export type RenderSettingsType = { icon: string; label: string; name: string; toggle: boolean; isActive: boolean; onActivate: () => void };

/**
 * UploadResponseFormat interface representing the response format expected from the backend on file uploading.
 */
export interface UploadResponseFormat {
  success: number;
  file: {
    url: string;
  };
}