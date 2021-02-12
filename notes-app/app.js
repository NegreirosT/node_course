const { fstat } = require('fs')

const fs = require('fs');


//* Writing in .TXT file
fs.writeFileSync('notes.txt', 'My name is Thiago');
console.log("File contents before append: ", fs.readFileSync('notes.txt', 'utf8'));

fs.appendFileSync('notes.txt', ' Negreiros');
console.log('File contents after append: ',fs.readFileSync('notes.txt','utf8'));
