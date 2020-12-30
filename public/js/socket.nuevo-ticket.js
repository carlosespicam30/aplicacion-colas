//comando para establecer la comunicacion

var socket = io();

var label = $('#lblNuevoTicket');

//escuchar
socket.on('connect', function() {
    console.log('Conectado con el servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

socket.on('estadoActual', function(resp) {
    console.log(resp);
    label.text(resp.actual);
});

$('button').on('click', function() {
    console.log('Click');
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);

    });
});
//Enviar informacion
/* socket.emit('enviarMensaje', {
    usuario: 'Carlos',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
}); */