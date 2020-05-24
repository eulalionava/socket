const express = require('express');
const socketIO = require('socket.io');
<<<<<<< HEAD
const http  = require('http');

=======
const http = require('http');
>>>>>>> 8782647b3c01edb8ba6a0ca1b4342f1fc638c4f7
const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

<<<<<<< HEAD
//iniciar el socket
module.exports.io = socketIO(server);
require('./sockets/socketServer');




=======
//iniciar el socket para comunicacion con el backend
let io = socketIO(server);


>>>>>>> 8782647b3c01edb8ba6a0ca1b4342f1fc638c4f7
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});