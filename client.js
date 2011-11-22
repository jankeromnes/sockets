var net = require('net'),
    socket = new net.Socket();

socket.connect(0X5AD);

socket.write('hello!\n');

socket.on('data', function(data) {
  var str = data.toString('utf8');
  console.log(str);
  if (str === 'END') {
    socket.destroy();
  }
}
