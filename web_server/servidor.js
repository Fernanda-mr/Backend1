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
    //template de error 404
    //si existe un error manda el 404, si todo esta bien manda el 200 y un error 500 si es error del servidor 
    
    fs.readFileSync(filePath, function(error, content){
        if(error){
            if(error.code == 'ENOENT'){
                fs.readFile('./404.html', function(error, content){
                    response.writeHead(200, {'Content-Type': ContentType});
                    response.end(content, 'utf-8');
                });
            }
            else{
                response.writeHead(500);
                response.end('Sorry, check with the site admi for error: '+ error.code + '..\n');
                response.end();
            }
        }
        else{
            response.writeHead(200, {'Content-Type': contentType});
            response.end(content, 'utf-8');
        }
    });

}) .listen(3000);
console.log('Server running at http://127.0.0.1:3000/');