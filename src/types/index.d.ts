/**
 * Type declarations for the Editor.js Image Tool
 * This file defines the public TypeScript interface for the Image Tool plugin,
 * providing type definitions and ensuring type safety for TypeScript users.
 */
import type { BlockTool, BlockToolConstructorOptions } from '@editorjs/editorjs';
import type { ImageToolData, ImageConfig } from './types';

declare class ImageTool implements BlockTool {
  constructor(options: BlockToolConstructorOptions<ImageToolData, ImageConfig>);
  
  static get isReadOnlySupported(): boolean;
  static get toolbox(): { icon: string; title: string; };
  static get tunes(): Array<{
    name: string;
    icon: string;
    title: string;
    toggle?: boolean;
  }>;
  
  render(): HTMLElement;
  save(): ImageToolData;
  validate(savedData: ImageToolData): boolean;
  
  onPaste(event: CustomEvent): Promise<void>;
}

export default ImageTool; 