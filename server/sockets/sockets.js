const { io } = require('../server.js')

io.on('connection', (client) => {
    console.log('User connected');

    client.emit('mensaje_server', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a la app'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar del cliente
    client.on('mensaje_usuario', (data, callback) => {
        console.log(data);

        client.broadcast.emit('mensaje_server', data);

        // if (data.usuario) {

        //     callback({
        //         answ: 'Todo ok'
        //     });
        // } else {
        //     callback({
        //         answ: 'Todo MAL!!!!'
        //     });
        // }

    });
});