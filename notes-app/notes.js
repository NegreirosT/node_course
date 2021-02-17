const fs    = require('fs');
const chalk = require('chalk');

const getNotes = (notes) => {
  return 'Your notes is: '+ notes;
}

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title)

  if(duplicateNotes.length === 0){
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

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes
};