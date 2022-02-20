const net = require('net'); //node's net module

const connect = () => {  
//function that allows us to connect to the snek server

  const conn = net.createConnection({
    host: "localhost",  
    port: 3000
  });

  conn.setEncoding('utf8');   //interpret incoming data as text

  return conn;

};

console.log('connecting...');
connect(); 