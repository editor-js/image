import type { UploadResponseFormat } from '../types/types';

/**
 * Check if passed object is a Promise
 * @param  object - object to check
 * @returns
 */
export default function isPromise<AdditionalUploadResponse>(object: Promise<UploadResponseFormat<AdditionalUploadResponse>>): object is Promise<UploadResponseFormat<AdditionalUploadResponse>> {
  return object !== undefined && typeof object.then === 'function';
}
