//llamamos el modulo http
const http = require('http');
//establecemos la url o ip de nuestro servidor  cambiar a mi ip
const hostname = '127.0.0.1';  
//establecemos el puerto de escucha
const port = 3000;
//creamos una instancia de HTTP con un reques y un response
const server = http.createServer((req, res) => {
    //el servidor respondera un codigo 200
    res.statusCode = 200;
    //el servidor respondera un texto plano
    res.setHeader('Content-Type', 'text/plain');
    //el servidor respondera el mensaje hola mundo
    res.end('Hola Mundo\n'); 
});

server.listen(port, hostname,() =>{
    console.log ('el servidor se esta ejecutando en http://${hostname}:${port}/');
});