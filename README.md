![](https://badgen.net/badge/CodeX%20Editor/v2.0/blue)

# Image Tool

Provides Image Blocks for the [CodeX Editor](https://ifmo.su/editor).

Use for uploading images from user's device.

## Installation

### Install via NPM

Get the package

```shell
npm i --save-dev codex.editor.image
```

Include module at your application

```javascript
const ImageTool = require('codex.editor.image');
```

### Download to your project's source dir

1. Upload folder `dist` from repository
2. Add `dist/bundle.js` file to your page.

### Load from CDN

You can load specific version of package from [jsDelivr CDN](https://www.jsdelivr.com/package/npm/codex.editor.image).

`https://cdn.jsdelivr.net/npm/codex.editor.image@1.0.0`

Then require this script on page with CodeX Editor.

```html
<script src="..."></script>
```

## Usage

Add a new Tool to the `tools` property of the CodeX Editor initial config.

```javascript
var editor = CodexEditor({
  ...
  
  tools: {
    ...
    image: {
      class: ImageTool,
      config: {
        url: 'http://localhost:3000/uploadImage',
      }
    }
  }
  
  ...
});
```

## Config Params 

| Field | Type     | Description        |
| ----- | -------- | ------------------ |
| url   | `string` | uploading endpoint |
| field | `string` | (default: `image`) name of image field in POST request |
| types | `string` | (default: `image/*`) list of available mime-types. [see docs](https://github.com/codex-team/ajax#accept-string) |

## Tool's settings

![](https://capella.pics/c74cdeec-3405-48ac-a960-f784188cf9b4.jpg)

1. Add border

2. Stretch to full-width

3. Add background

## Output data

| Field          | Type      | Description                     |
| -------------- | --------- | ------------------------------- |
| url            | `string`  | image's url                     |
| caption        | `string`  | image's caption                 |
| withBorder     | `boolean` | add border to image             |
| withBackground | `boolean` | need to add background          |
| stretched      | `boolean` | stretch image to screen's width |


```json
{
    "type" : "image",
    "data" : {
        "url" : "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg",
        "caption" : "Roadster // tesla.com",
        "withBorder" : false,
        "withBackground" : false,
        "stretched" : true
    }
}
```
