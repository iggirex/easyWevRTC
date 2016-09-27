"use strict"
// var express = require('express')
// var app = express()
//app goes inside creatServer for express
let server = require('http').createServer();
var path = require('path')

let io = require('socket.io')();

app.use(express.static(path.join(__dirname, 'public')));

//if we're using Express put app into line 1 inside createServer
//DONT PASS APP into io, app is express middleware
io.attach(server);

server.listen(3030)

io.on('connection', function (socket)  {
  console.log('WE are insinde connection')
  socket.on('peer-msg', function (data) {
    console.log('Message from peer: %s', data);
    socket.broadcast.emit('peer-msg', data);
  })

  socket.on('go-private', function (data) {
    socket.broadcast.emit('go-private', data);
  });
});
