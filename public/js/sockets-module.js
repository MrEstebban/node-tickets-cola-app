var socket = io();

//fucniones on -> escuchan
socket.on('connect', function() {
    console.log('Conectado al server');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el server');
});

//Funciones emit -> emiten

socket.emit('mensaje_usuario', {
    usuario: 'Esteban',
    mensaje: 'Oh Yeah!'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

socket.on('mensaje_server', function(mensaje) {
    console.log(mensaje);
});