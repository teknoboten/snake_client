const { connect }  = require('./client');

const handleUserInput = (data) => {
//callback to call when stdin recieves data

  if (data === '\u0003') {
    process.exit();
  };
  process.stdout.write('u quit');   //how i make this work?
}


const setupInput = function () {
// setup interface to handle user input from stdin

  const stdin = process.stdin;    //stdin is an object
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', (data) => {
    handleUserInput(data);
  });

  return stdin; 
};

console.log('connecting...');
connect();

