const express = require('express');
const socketIO = require('socket.io');

const http  = require('http');
const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//iniciar el socket
module.exports.io = socketIO(server);
require('./sockets/socketServer');
//iniciar el socket para comunicacion con el backend
let io = socketIO(server);

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});