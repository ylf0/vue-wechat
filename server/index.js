var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)

io.on('connection', function (socket) {
  console.log('a user connected!')
  socket.on('test', function (data) {
    socket.emit('message', data)
  })
  socket.on('disconnect', function () {
    console.log('user disconnected~')
  })
})

server.listen(3000, function () {
  console.log('server listen at port: 3000')
})