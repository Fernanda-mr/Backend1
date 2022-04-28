var http=require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response){
    console.log('request', request.url);

    var filePath = '.' + request.url;
    if (filePath == './'){
        filePath = './index.html'; //le indicamos al servidore que busque dicho archivo
    }
    var extname = String(path.extname(filePath)).toLowerCase();
    var ContentType = 'text/html';
    var mimeTypes = {
        //son los mini tipos, porque es importante que se tomen en cuenta en un servidor
        '.html':'text/html',
        '.js':'text/javascript',
        '.css':'text/css',
        '.png':'image/png',
        '.jpg':'image/jpg',
        '.gif':'image/gif',
    }
})