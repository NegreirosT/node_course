const fs = require('fs');

// const book = {
//   title: 'Harry Potter',
//   author: 'JK Roling'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = 'Thiago'
user.age = 27

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)
