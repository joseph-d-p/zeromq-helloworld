require("dotenv").config();
var zmq = require("zeromq"),
  sock = zmq.socket("sub");

SERVER_IP = process.env.IP;
PORT = process.env.PORT;

port = `tcp://${SERVER_IP}:${PORT}`;
sock.connect(port);
sock.subscribe("hello");
console.log(`Subscriber connected to port ${PORT}`);

sock.on("message", function(topic, message) {
  console.log(`topic: ${topic}`, `, message: ${message.toString()}`);
});
