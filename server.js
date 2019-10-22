const express = require('express');
const app = express();
const http = require('http').createServer(app);
const port = process.env.PORT || 8080;
const rootFile = 'index.html';
const io = require('socket.io')(http);
let users = {};

app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/${rootFile}`);
});

io.on('connection', (socket) => {
    const ids =  Object.keys(io.sockets.sockets);
    socket.on('sendUsername', (username) => {
        users[ids[ids.length - 1]] = {
            username,
            writing: false,
        };
        io.to(socket.id).emit('sendIdUserName', { [username] : ids[ids.length - 1] });
        io.emit('sendActiveUsers', users);
    });
    socket.on('sendMessage', (message) => {
        io.emit('reciveMessageGroupal', message);
    });
    socket.on('disconnect', () => {
        delete users[socket.id];
    });
    socket.on('direcMessage', (options) => {
        io.to(options).emit('reciveMessage', { text: { user: socket.id, message: 'mensaje' } });
    })

    socket.on('userWriting', (writingOptions) => {
        const user = users[socket.id];
        if (user) {
            users[socket.id].writing = writingOptions.writing;
            io.emit('sendActiveUsers', users);
        }
    })
});

http.listen(port, () => console.log(`server on port ${port}`))