var net = require('net');

var socket = net.Socket();

socket.on('connect', function() {
  console.log('server connected!');
  socket.on('data', function(data) {
    console.log('server received', data);
  });
});

