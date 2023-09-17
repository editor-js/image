/**
 * Sample HTTP server for accept uploaded images
 * [!] Use it only for debugging purposes
 *
 * How to use [requires Node.js 10.0.0+ and npm install]:
 *
 * 1. $ node dev/server.js
 * 2. set 'endpoints' at the Image Tools 'config' in example.html
 *   endpoints : {
 *      byFile: 'http://localhost:8008/uploadFile',
 *      byUrl: 'http://localhost:8008/fetchUrl'
 *   }
 *
 */
const http = require('http');
const formidable = require('formidable');
const { parse } = require('querystring');
const fs = require('fs');
const request = require('request');
const crypto = require('crypto');

/**
 *
 */
class ServerExample {
  constructor
  /**
   *
   */
  /**
   *
   */
  /**
   *
   */
  /**
   *
   */
  /**
   *
   */({ port, fieldName }) {
    this.uploadDir = __dirname + '/.tmp';
    this.fieldName = fieldName;
    this.server = http
      .createServer((req, res) => {
        this.onRequest(req, res);
      })
      .listen(port);

    this.server.on('listening', () => {
      console.log('Server is listening ' + port + '...');
    });

    this.server.on('error', (error) => {
      console.log('Failed to run server', error);
    });
  }

  /**
   * Request handler
   *
   * @param {http.IncomingMessage} request
   * @param {http.ServerResponse} response
   */
  onRequest(request, response) {
    this.allowCors(response);

    const { method, url } = request;

    if (method.toLowerCase() !== 'post') {
      response.end();

      return;
    }

    console.log('Got request on the ', url);

    switch (url) {
      case '/uploadFile':
        this.uploadFile(request, response);
        break;
      case '/fetchUrl':
        this.fetchUrl(request, response);
        break;
    }
  }

  /**
   * Allows CORS requests for debugging
   *
   * @param response
   */
  allowCors(response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Credentials', 'true');
    response.setHeader(
      'Access-Control-Allow-Methods',
      'GET,HEAD,OPTIONS,POST,PUT'
    );
    response.setHeader(
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    );
  }

  /**
   * Handles uploading by file
   *
   * @param request
   * @param response
   */
  uploadFile(request, response) {
    const responseJson = {
      success: 0,
    };

    this.getForm(request)
      .then(({ files }) => {
        const image = files[this.fieldName] || {};

        responseJson.success = 1;
        responseJson.file = {
          url: image.path,
          name: image.name,
          size: image.size,
        };
      })
      .catch((error) => {
        console.log('Uploading error', error);
      })
      .finally(() => {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(responseJson));
      });
  }

  /**
   * Handles uploading by URL
   *
   * @param request
   * @param response
   */
  fetchUrl(request, response) {
    const responseJson = {
      success: 0,
    };

    this.getForm(request)
      .then(({ files, fields }) => {
        const url = fields.url;

        const results = url.match(
          /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i
        );
        const extension = results ? results[1] : '.png';

        const filename = this.uploadDir + '/' + this.md5(url) + `.${extension}`;

        return this.downloadImage(url, filename).then((path) => {
          responseJson.success = 1;
          responseJson.file = {
            url: path,
          };
        });
      })
      .catch((error) => {
        console.log('Uploading error', error);
      })
      .finally(() => {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(responseJson));
      });
  }

  /**
   * Accepts post form data
   *
   * @param request
   * @returns {Promise<{files: object, fields: object}>}
   */
  getForm(request) {
    return new Promise((resolve, reject) => {
      const form = new formidable.IncomingForm();

      form.uploadDir = this.uploadDir;
      form.keepExtensions = true;

      form.parse(request, (err, fields, files) => {
        if (err) {
          reject(err);
        } else {
          console.log('fields', fields);
          console.log('files', files);
          resolve({
            files,
            fields,
          });
        }
      });
    });
  }

  /**
   * Download image by Url
   *
   * @param {string} uri - endpoint
   * @param {string} filename - path for file saving
   * @returns {Promise<string>} - filename
   */
  downloadImage(uri, filename) {
    return new Promise((resolve, reject) => {
      request.head(uri, function (err, res, body) {
        request(uri)
          .pipe(fs.createWriteStream(filename).on('erorr', reject))
          .on('close', () => {
            resolve(filename);
          });
      });
    });
  }

  /**
   * Generates md5 hash for string
   *
   * @param string
   * @returns {string}
   */
  md5(string) {
    return crypto.createHash('md5').update(string).digest('hex');
  }
}

new ServerExample({
  port: 8008,
  fieldName: 'image',
});
