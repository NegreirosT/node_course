const fs    = require('fs');
const chalk = require('chalk');

const getNotes = (notes) => {
  return 'Your notes is: '+ notes;
}

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNote  = notes.find((note) => note.title === title)

  if(!duplicateNote){
    notes.push({
      title: title,
      body: body
    })
    
    saveNotes(notes)
    console.log('New note added!');
  }else{
    console.log('Note title taken!');
  }

}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
  try{
    const readFile = fs.readFileSync('notes.json');
    const dataJSON = readFile.toString();
    return JSON.parse(dataJSON);
  }catch(e){
    return [];
  }
}

const removeNotes = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title) 

  if(notes.length > notesToKeep.length){
    console.log(chalk.green.inverse('Note removed!'));
    saveNotes(notesToKeep);
  }else{
    console.log(chalk.red.inverse('No note found!'));
  }
}

const readNotes = (title) => {
  const notes = loadNotes();
  const findNote = notes.find((note) => note.title === title)

  if(findNote){
    console.log('Title: '+ chalk.yellow.underline(findNote.title));
    console.log('Body: '+ chalk.yellow.underline(findNote.body));
  }else{
    console.log(chalk.inverse.red('Note not found!'))
  }

}

const listNotes = () => {
  const listNotes = loadNotes();

  listNotes.forEach(note => {
    console.log(
      chalk.yellow('Your notes: '),
      chalk.red.underline(note.title)
    );
  });
}

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes
};