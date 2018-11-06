/**
 * Sample HTTP server for accept uploaded images
 * Uses for debug purposes
 *
 * How to use:
 * 1. $ node tests/server.js
 * 2. set URL in Image Tools config as 'http://localhost:8008' in example.html
 */
const http = require( 'http' );
const formidable = require( 'formidable' );
const port = 8008;

const server = http.createServer(
  /**
   * Request handler
   * @param {http.IncomingMessage} request
   * @param {http.ServerResponse} response
   */
  function ( request, response ) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Request-Method', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST');
    response.setHeader('Access-Control-Allow-Headers', 'x-requested-with');

    if (request.method.toLowerCase() !== 'post'){
      response.end();
      return;
    }

    let responseJson = {
      success: 0
    };

    const form = new formidable.IncomingForm();

    form.uploadDir = __dirname + '/\.tmp';
    form.keepExtensions = true;

    response.on('error', console.error);

    form.parse(request, function(err, fields, files) {
      if (err){
        console.log('err', err);
      } else {
        let image = files.image;

        responseJson.success = 1;
        responseJson.file = {
          url: image.path,
          name: image.name,
          size: image.size
        };
      }

      response.writeHead(200, {'Content-Type': 'application/json'});
      response.end(JSON.stringify(responseJson))
    });
} ).listen( port );

server.on('listening', function () {
  console.log('Server is listening ' + port + '...');
});

server.on('error', function (error) {
  console.log('Failed to run server', error);
});