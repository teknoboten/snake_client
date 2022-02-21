const net = require('net'); //node's net module
const { IP, PORT } = require('./constants');

const connect = () => {
//when called, creates new connection to the server
//use ctrl+c to terminate

  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');   //interpret incoming data as text

  conn.on('data', (data) => {
    console.log(data);        //log incoming data to console
  });

  conn.on('connect', () => {    //register and execute the following callbacks once connection is established
    console.log('sucessfully connected. all ur snek r belong to us.');  //tell user when connected to server
    conn.write('Name: sbl');
  
  });

  return conn;
};

module.exports = { connect };