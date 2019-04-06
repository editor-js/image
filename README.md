![](https://badgen.net/badge/Editor.js/v2.0/blue)

# Image Tool

Image Block for the [Editor.js](https://editorjs.io).

![](https://capella.pics/63a03d04-3816-45b2-87b2-d85e556f0066.jpg)

## Features

- Uploading file from the device
- Pasting copied content from the web
- Pasting images by drag-n-drop
- Pasting files and screenshots from Clipboard
- Allows to add border, background
- Allows to stretch image to the container's full-width

**Note** This Tool requires server-side implementation for file uploading. See [backend response format](#server-format) for more details.

## Installation

### Install via NPM

Get the package

```shell
npm i --save-dev @editorjs/image
```

Include module at your application

```javascript
import ImageTool from '@editorjs/image'
```

### Download to your project's source dir

1. Upload folder `dist` from repository
2. Add `dist/ImageTool.js` file to your page.
3. Add `dist/ImageToolUploader.js` file to your page (optional).

### Load from CDN

You can load specific version of package from [jsDelivr CDN](https://www.jsdelivr.com/package/npm/@editorjs/image).

`https://cdn.jsdelivr.net/npm/@editorjs/image@latest`
`https://cdn.jsdelivr.net/npm/@editorjs/image/dist/ImageToolUploader.js` (optional)

Then require this script on page with Editor.js through the `<script src=""></script>` tag.

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
import ImageTool from '@editorjs/image'
import Uploader from '@editorjs/image/dist/ImageToolUploader'

// or if you inject ImageTool via script
const ImageTool = window.ImageTool
const Uploader = window.ImageToolUploader

var editor = EditorJS({
  ...

  tools: {
    ...
    image: {
      class: ImageTool,
      config: {
        uploader: new Uploader({
          endpoints: {
            byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
            byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
          }
        })
      }
    }
  }

  ...
});
```

## Config Params

Image Tool supports these configuration parameters:

| Field | Type     | Description        |
| ----- | -------- | ------------------ |
| uploader | `interface Uploader` | Any javascript class that implements the Uploader interface. Together with the Image Tool we provide the default Uploader.
| captionPlaceholder | `string` | (default: `Caption`) Placeholder for Caption input |
| types | `string` | (default: `image/*`) Mime-types of files that can be [accepted with file selection](https://github.com/codex-team/ajax#accept-string).|
| buttonContent | `string` | Allows to override HTML content of «Select file» button |

Default Uploader class supports these configuration parameters:

| Field | Type     | Description        |
| ----- | -------- | ------------------ |
| endpoints | `{byFile: string, byUrl: string}` | **Required** Endpoints for file uploading. <br> Contains 2 fields: <br> __byFile__ - for file uploading <br> __byUrl__ - for uploading by URL |
| field | `string` | (default: `image`) Name of uploaded image field in POST request |
| additionalRequestData | `object` | Object with any data you want to send with uploading requests |
| additionalRequestHeaders | `object` | Object with any custom headers which will be added to request. [See example](https://github.com/codex-team/ajax/blob/e5bc2a2391a18574c88b7ecd6508c29974c3e27f/README.md#headers-object) |

## Tool's settings

![](https://capella.pics/c74cdeec-3405-48ac-a960-f784188cf9b4.jpg)

1. Add border

2. Stretch to full-width

3. Add background

## Output data

This Tool returns `data` with following format

| Field          | Type      | Description                     |
| -------------- | --------- | ------------------------------- |
| file           | `object`  | Uploaded file data. Any data got from backend uploader. Always contain the `url` property |
| caption        | `string`  | image's caption                 |
| withBorder     | `boolean` | add border to image             |
| withBackground | `boolean` | need to add background          |
| stretched      | `boolean` | stretch image to screen's width |


```json
{
    "type" : "image",
    "data" : {
        "file": {
            "url" : "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg"
        },
        "caption" : "Roadster // tesla.com",
        "withBorder" : false,
        "withBackground" : false,
        "stretched" : true
    }
}
```

## Default Uploader

### Backend response format <a name="server-format"></a>

This Tool works by one of the following schemes:

1. Uploading files from the device
2. Uploading by URL (handle image-like URL's pasting)
3. Uploading by drag-n-drop file
4. Uploading by pasting from Clipboard

### Uploading files from device <a name="from-device"></a>

Scenario:

1. User select file from the device
2. Tool sends it to **your** backend (on `config.endpoint.byFile` route)
3. Your backend should save file and return file data with JSON at specified format.
4. Image tool shows saved image and stores server answer

So, you can implement backend for file saving by your own way. It is a specific and trivial task depending on your
environment and stack.

Response of your uploader **should** cover following format:

```json5
{
    "success" : 1,
    "file": {
        "url" : "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg",
        // ... and any additional fields you want
    }
}
```

**success** - uploading status. 1 for successful, 0 for failed

**file** - uploaded file data. **Must** contain an `url` field with full public path to the uploaded image.
Also, can contain any additional fields you want to store. For example, width, height, id etc.
All additional fields will be saved at the `file` object of output data.

### Uploading by pasted URL

Scenario:

1. User pastes an URL of the image file to the Editor
2. Editor pass pasted string to the Image Tool
3. Tool sends it to **your** backend (on `config.endpoint.byUrl` route) via 'url' POST-parameter
3. Your backend should accept URL, **download and save the original file by passed URL** and return file data with JSON at specified format.
4. Image tool shows saved image and stores server answer

Response of your uploader should be at the same format as described at «[Uploading files from device](#from-device)» section


### Uploading by drag-n-drop or from Clipboard

Your backend will accept file as FormData object in field name, specified by `config.field` (by default, «`image`»).
You should save it and return the same response format as described above.


## Writing your own implementation of the Uploader class
```js

/**
 * @typedef {object} UploadResponseFormat
 * @description This format expected from backend on file uploading
 * @property {number} success - 1 for successful uploading, 0 for failure
 * @property {object} file - Object with file data.
 *                           'url' is required,
 *                           also can contain any additional data that will be saved and passed back
 * @property {string} file.url - [Required] image source URL
 */

class CustomUploader {
  /**
   * Handle url string from paste
   * @param {string} url - image source url
   * @param {Object} context - context object with helpers and other properties
   * @param {function(string)} context.setPreview - callback for set preview image
   * @returns {Promise<UploadResponseFormat>}
   */
  uploadByUrl(url, { setPreview }) {
    setPreview(url);
    return api.uploadFileByURL(url); // Promise return object in format { success: 1, file: { url: '' }}
  }

  /**
   * Handle clicks on the upload file button, drag-n-drop or paste image
   * @param {File} file - file
   * @param {Object} context - context object with helpers and other properties
   * @param {function(string)} context.setPreview - callback for set preview image
   * @returns {Promise<UploadResponseFormat>}
   */
  uploadByFile(file, { setPreview }) {
    /**
     * Load file for preview
     * @type {FileReader}
    */
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setPreview(e.target.result);
    };

    return api.uploadFile(file); // Promise return object in format { success: 1, file: { url: '' }}
  }
}
```