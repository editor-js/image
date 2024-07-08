/**
 * Helper for making Elements with attributes
 *
 * @param  {string} tagName           - new Element tag name
 * @param  {Array|string} classNames  - list or name of CSS class
 * @param  {object} attributes        - any attributes
 * @returns {Element}
 */
export function make(tagName: string, classNames: string[] | string | null = null, attributes: { [key: string]: any } = {}): HTMLElement {
  const el = document.createElement(tagName);

  if (Array.isArray(classNames)) {
    el.classList.add(...classNames);
  } else if (classNames) {
    el.classList.add(classNames);
  }

  for (const attrName in attributes) {
    if (attributes.hasOwnProperty(attrName)) {
      (el as any)[attrName] = attributes[attrName];
    }
  }

  return el;
}
