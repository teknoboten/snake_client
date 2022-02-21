const net = require('net'); //node's net module

const connect = () => {
//when called, creates new connection to the server
//use ctrl+c to terminate

  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541
  });

  conn.setEncoding('utf8');   //interpret incoming data as text

  conn.on('data', (data) => {
    console.log(data);        //log incoming data to console
  });

  conn.on('connect', () => {    //register and execute the following callbacks once connection is established
    console.log('sucessfully connected. all ur snek r belong to us.');  //tell user when connected to server
    conn.write('Name: bwz');
  
    const snekMove = (a, b, c) => {   //callback function to pass to setInterval (janky but works)
      conn.write(a);
      conn.write(b);
      conn.write(c);
    };

    setInterval(snekMove, 500, 'Move: up', 'Move: left', 'Move: left');

  });

  return conn;
};

module.exports = { connect };