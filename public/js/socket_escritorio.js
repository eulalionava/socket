
var socket = io();

//OBTENER PARAMETROS ENVIADIOS POR URL
var searchParams = new URLSearchParams(window.location.search);

if(! searchParams.has('escritorio')){
    window.location = "index.html";
    throw new Error("El escritorio es necesario");
}
//parametro
var escritorio = searchParams.get('escritorio');
var label = $('small');

//pintamos el numero de escritorio
$("h1").text("Escritorio:" + escritorio);

$("button").on('click',function(){
    socket.emit('atenderTicket',{escritorio:escritorio},function(response){
        
        if(response === 'No hay tickets'){
            label.text(response);
            alert(response);
            return;
        }

        label.text('Ticket '+ response.numero);
    })
})