let connection;

const handleUserInput = (data) => {
  //callback to call when stdin recieves data

    if (data === '\u0003') {
      console.log('u quit, bye');
      process.exit();
    };

//use the connection variable to send movement commands to the server
    if (data === '\u0061') {
      connection.write('Move: left');
    };

    if (data === '\u0073') {
      connection.write('Move: down');
    };

    if (data === '\u0064') {
      connection.write('Move: right');
    };

    if (data === '\u0077') {
    //   console.log("you hit w, move up!");
      connection.write('Move: up');
    };
  }

  
  const setupInput = (conn) => {
  // setup interface to handle user input from stdin

    connection = conn;    //connection object created by connect();
  
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