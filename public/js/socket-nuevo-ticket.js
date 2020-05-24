//Comando para establecer la comunicacion

var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect',function(){
    console.log("conectado al servidor");
});

// socket.on('disconnect',function(){
//     console.log("Desconectado del servidor");
// })

//OBTENEMOS EL TICKET ACTUAL
socket.on('estadoActual',function(response){
    console.log(response);
    label.text(response.actual);
})

//EVENTO DEL BOTTON
$('button').on('click',function(){
    socket.emit('siguienteTicket',null,function(siguienteticket){
        label.text(siguienteticket);
    })
})