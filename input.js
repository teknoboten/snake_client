const { KEYMAPPINGS } = require('./constants');   //import key mappings from constants module

let connection;

const handleUserInput = (data) => {
//callback for setupInput to call when stdin recieves data

  if (data === '\u0003') {        //terminate on ctrl+c
    console.log('u quit, bye');
    process.exit();
  }

  //if a user inputs an existing key mapping send the value to the server via connection object

  if (KEYMAPPINGS[data]) {
    connection.write(KEYMAPPINGS[data]);
  }
};


  
const setupInput = (conn) => {
// setup interface to handle user input from stdin

  connection = conn;  //connection object created by connect();             
  
  //stdin config 
  const stdin = process.stdin;    
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  //register handleUserInput as callback for data recieved stdin
  stdin.on('data', (data) => {
    handleUserInput(data);
  });
  
  return stdin;
};

  
module.exports = { setupInput };


