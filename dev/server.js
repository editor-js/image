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

const SERVER_PORT = 8008;

class ServerExample {
  constructor({port, fieldName}) {
    this.uploadDir = __dirname + '/\.tmp';
    this.fieldName = fieldName;
    this.server = http.createServer((req, res) => {
      this.onRequest(req, res);
    }).listen(port);

    this.server.on('listening', () => {
      console.log('Server is listening ' + port + '...');
    });

    this.server.on('error', (error) => {
      console.log('Failed to run server', error);
    });
  }

  /**
   * Request handler
   * @param {http.IncomingMessage} request
   * @param {http.ServerResponse} response
   */
  onRequest(request, response) {
    this.allowCors(response);

    const {method, url} = request;

    console.log('Got request on the ', url);

    if (method.toLowerCase() === 'get' && url.startsWith('/image/')) {
      this.serveImage(url, response);
      return;
    }

    if (method.toLowerCase() !== 'post') {
      response.end();
      return;
    }

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
   * @param response
   */
  allowCors(response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Credentials', 'true');
    response.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    response.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  }

  /**
   * Serves image from upload directory
   * @param {string} url - request URL
   * @param {http.ServerResponse} response - server response
   */
  serveImage(url, response) {
    const filename = url.split('/image/')[1];
    const filePath = `${this.uploadDir}/${filename}`;

    // Check if the file exists at the specified path. F_OK stands for "File OK", which means "check if the file exists".
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        response.writeHead(404, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ success: 0, message: 'File not found' }));
        return;
      }
  
      const fileStream = fs.createReadStream(filePath);
      response.writeHead(200, { 'Content-Type': 'image/png' });
      // Pipe the file stream to the response, sending the file content directly to the client
      fileStream.pipe(response);
    });
  }

  /**
   * Handles uploading by file
   * @param request
   * @param response
   */
  uploadFile(request, response) {
    let responseJson = {
      success: 0
    };

    this.getForm(request)
      .then(({files}) => {
        let image = files[this.fieldName][0] || {};

        responseJson.success = 1;
        responseJson.file = {
          url: `http://localhost:${SERVER_PORT}/image/` + image.newFilename,
          name: image.newFilename,
          size: image.size
        };
      })
      .catch((error) => {
        console.log('Uploading error', error);
      })
      .finally(() => {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(responseJson));
      });
  }

  /**
   * Handles uploading by URL
   * @param request
   * @param response
   */
  fetchUrl(request, response) {
    let responseJson = {
      success: 0
    };

    this.getForm(request)
      .then(({files, fields}) => {
        let url = fields.url;

        const results = url.match(/https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i);
        const extension = results ? results[1] : '.png';
        
        let filename = this.uploadDir + '/' + this.md5(url) + `.${extension}`;

        return this.downloadImage(url, filename)
          .then((path) => {
            responseJson.success = 1;
            responseJson.file = {
              url: path
            };
          });
      })
      .catch((error) => {
        console.log('Uploading error', error);
      })
      .finally(() => {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(responseJson));
      });
  }

  /**
   * Accepts post form data
   * @param request
   * @return {Promise<{files: object, fields: object}>}
   */
  getForm(request) {
    return new Promise((resolve, reject) => {
      const form = new formidable.IncomingForm({
        uploadDir: this.uploadDir,
        keepExtensions: true
      });

      console.error('the form info:', form);

      form.parse(request, (err, fields, files) => {
        if (err) {
          reject(err);
        } else {
          console.log('fields', fields);
          console.log('files', files);
          resolve({files, fields});
        }
      });
    });
  }

  /**
   * Download image by Url
   * @param {string} uri - endpoint
   * @param {string} filename - path for file saving
   * @return {Promise<string>} - filename
   */
  downloadImage(uri, filename) {
    return new Promise((resolve, reject) => {
      request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream(filename).on('erorr', reject))
          .on('close', () => {
            resolve(filename);
          });
      });
    });
  }

  /**
   * Generates md5 hash for string
   * @param string
   * @return {string}
   */
  md5(string) {
    return crypto.createHash('md5').update(string).digest('hex');
  }
}

new ServerExample({
  port: SERVER_PORT,
  fieldName: 'image'
});