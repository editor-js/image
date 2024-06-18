/**
 * Documentation for types added:
 * - Preview: Represents a function to handle previewing with a source string.
 * - CSS: Represents a key-value pair of CSS properties.
 * - Status: Represents different statuses like EMPTY, UPLOADING, FILLED.
 * - Attributes: Represents a key-value pair of attributes.
 * - Toolsbox: Represents an icon and title for a toolbox item.
 * - Tones: Represents a tone with name, icon, title, toggle, and optional action.
 * - PasteConfig: Represents configuration for pasting with tags, patterns, and file types.
 * - RenderSettings: Represents settings for rendering with icon, label, name, toggle, isActive, and onActivate function.
 */
export type Preview = { onPreview: (src: string) => void };
export type CSS = { [key: string]: string };
export type Status = {EMPTY: string, UPLOADING: string, FILLED: string};
export enum StatusEnum {EMPTY = 'empty', UPLOADING = 'loading',FILLED = 'filled'}
export type Attributes = { [key: string]: any};
export type Toolsbox = {icon: string, title: string};
export type Tones = { name: string; icon: string; title: string; toggle: boolean, action?: Function };
export type PasteConfig = { tags: Array<{ img: { src: boolean } }>; patterns: { image: RegExp }; files: { mimeTypes: string[] } };
export type RenderSettings = { icon: string; label: string; name: string; toggle: boolean; isActive: boolean; onActivate: () => void };

/**
 * UploadResponseFormat interface representing the response format expected from the backend on file uploading.
 */
export interface UploadResponseFormat {
  success: number;
  file: {
    url: string;
  };
}