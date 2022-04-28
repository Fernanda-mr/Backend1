var http=require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response){
    console.log('request', request.url);

    var filePath = '.' + request.url;
    if (filePath == './'){
        filePath = './index.html'; //le indicamos al servidore que busque dicho archivo
    }
})