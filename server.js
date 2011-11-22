var net = require('net');

var server = net.Server ( function(socket) {
  console.log('incoming socket!');
  socket.on('data', function(data) {
    console.log('socket says '+data);
  });
  socket.write('hi, socket!');
}).listen(0x5Ad);

console.log('server ready!');

