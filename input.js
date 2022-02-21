const { KEYMAPPINGS } = require('./constants');

let connection;

const handleUserInput = (data) => {
//callback to call when stdin recieves data

    if (data === '\u0003') {
      console.log('u quit, bye');
      process.exit();
    };

//use connection object to send commands to the server
//if a mapping exists, send the value

    if (KEYMAPPINGS[data]){
      connection.write(KEYMAPPINGS[data]);
    };
  }
  
  const setupInput = (conn) => {
  // setup interface to handle user input from stdin

    connection = conn;               //connection object created by connect();
  
    const stdin = process.stdin;    //stdin is an object
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
  
    stdin.on('data', (data) => {
      handleUserInput(data);
    });
  
    return stdin; 
  };

  
  module.exports = { setupInput }; 


