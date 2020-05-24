const { io } = require('../server');
const { TicketControl} = require('../classes/ticket-control');

const ticketControl = new TicketControl();

io.on('connection',(clien)=>{

    clien.on('siguienteTicket',(data,callback)=>{

        let siguiente = ticketControl.siguienteTicket();
        console.log('El siguiente ticket es:',siguiente);
        callback(siguiente);

    });

    //MANDA AL SERVIDOR EL ESTADO ACTUAL DEL ULTIMO TICKET GENERADO
    clien.emit('estadoActual',{
        actual:ticketControl.getUltimoTicket(),
        ultimos4:ticketControl.getUltimos4()
    })

    //ATIENDE UN TICKET
    clien.on('atenderTicket',(data,callback)=>{
        if( ! data.escritorio){
            return callback({
                err:true,
                mensaje:'El escritorio es necesario'
            })
        }

        let atenderTicket = ticketControl.atenderTicket(data.escritorio);

        callback(atenderTicket);

        //actualizar o notificar cambios en los ultmimos 4

        clien.broadcast.emit('ultimos4',{
            ultimos4:ticketControl.getUltimos4()
        })

    })

})