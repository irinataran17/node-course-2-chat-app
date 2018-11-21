var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

//sends data from the client to the server 
    socket.emit('createMessage', {
        to: 'jen',
        text: 'Hey, this is bla bla bla.'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('New message', message);
});