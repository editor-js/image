/**
 * Check if passed object is a Promise
 * @param  object - object to check
 * @returns
 */
export default function isPromise(object: Promise<{}>): object is Promise<{}> {
  return object !== undefined && typeof object.then === 'function';
}
