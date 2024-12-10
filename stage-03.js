const input = require('sync-input');
let name = input("Enter name: ");
let surname = input("Enter surname: ");
let message = input("Enter message: ");
let output = `This is ${name} ${surname} and ${message}`;

for (let i = 0; i < 5; i++) {
  console.log(output);
}
