/**
 * Helper for making Elements with attributes
 * @param tagName           - new Element tag name
 * @param classNames  - list or name of CSS class
 * @param attributes        - any attributes
 * @returns
 */
export function make<T extends HTMLElement>(
  tagName: string,
  classNames?: string[] | string | null,
  attributes?: Record<string, string | boolean>
): T {
  const el = document.createElement(tagName) as T;

  if (Array.isArray(classNames)) {
    el.classList.add(...classNames);
  } else if (typeof classNames === "string") {
    el.classList.add(classNames);
  }

  for (const attrName in attributes) {
    if (attributes.hasOwnProperty(attrName)) {
      (el as unknown as { [key: string]: string | boolean })[attrName] =
        attributes[attrName];
    }
  }

  return el;
}
