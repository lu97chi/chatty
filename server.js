const express = require('express');
const app = express();
const http = require('http').createServer(app);
const port = process.env.PORT || 3001;
const rootFile = 'index.html';
const io = require('socket.io')(http);


app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/${rootFile}`);
});

io.on('connection', (socket) => {
    socket.on('sendUsername', (username) => {
        socket.emit('activeUsers', Object.keys(io.sockets.sockets));
    });
    socket.on('sendMessage', (message) => {
        io.emit('reciveMessage', message);
    });
    socket.on('message', (input) => {
        io.emit('message', input);
    });
    socket.on('disconnect', () => console.log('user disconected'));
});

http.listen(port, () => console.log(`server on port ${port}`))