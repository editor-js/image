/**
 * Handle paste event and extract data with the Image Tool format
 */
export default class Converter {
  /**
   * Read pasted (by drag-n-drop) image and convert it to base64
   *
   * @param {File} file
   * @returns {Promise<ImageToolData>}
   */
  static fromDroppedFile(file) {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    return new Promise(resolve => {
      reader.onload = (event) => {
        resolve({
          file: {
            url: event.target.result,
          },
          caption: file.name
        });
      };
    });
  }

  /**
   * Extract Image Tool data from <img> tag
   * @param {HTMLImageElement} img
   * @return {ImageToolData}
   */
  static fromHtml(img) {
    return {
      file: {
        url: img.getAttribute('src')
      },
      caption: img.hasAttribute('title') ? img.getAttribute('title') : ''
    };
  }

  /**
   * Extract Tool data from pasted image URL
   * @param {string} pastedUrl
   * @return {ImageToolData}
   */
  static fromPastedUrl(pastedUrl){
    return {
      file: {
        url: pastedUrl
      }
    };
  }
}

