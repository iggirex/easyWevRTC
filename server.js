var express = require('express')
var app = express()
let server = require('http').createServer(app);
var path = require('path')

let io = require('socket.io')();

//if we're using Express put app into line 1 inside createServer
//DONT PASS APP into io, app is express middleware
io.attach(server);

app.use(express.static(path.join(__dirname, 'public')));

server.listen(3030)

io.on('connection', (socket) => {
  console.log('WE are insinde connection')
  socket.on('peer-msg', (data) => {
    console.log('Message from peer: %s', data);
    socket.broadcast.emit('peer-msg', data);
  })

  socket.on('go-private', (data) => {
    socket.broadcast.emit('go-private', data);
  });
});
