const input = require('sync-input');
let name = input("Enter name: ");
let surname = input("Enter surname: ");
let message = input("Enter message: ");
let repeats = input("Enter number of repeats: ");
let output = `This is ${name} ${surname} and ${message}`;

for (let i = 0; i < repeats; i++) {
  console.log(output);
}
