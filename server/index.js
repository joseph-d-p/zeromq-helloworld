require("dotenv").config();
var zmq = require("zeromq"),
  sock = zmq.socket("pub");

SERVER_IP = process.env.IP;
PORT = process.env.PORT;

port = `tcp://${SERVER_IP}:${PORT}`;
sock.bindSync(port);
console.log(`Publisher bound to port ${PORT}`);

setInterval(function() {
  console.log("sending a multipart message envelope");
  sock.send(["hello", "world!"]);
}, 500);
