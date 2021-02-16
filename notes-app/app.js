const notes = require('./notes.js');
const yargs = require('yargs');

//* Customize yargs Version
yargs.version('1.1.0')

//* Create Add Command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true, //? Faz o argumento ser obrigatório
      type: 'string'
    },
    body: {
      describe: 'Note description',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    notes.addNotes(argv.title, argv.body)
  }
})

//* Create remove Command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder:{
    title:{
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    }
  },    
  handler: function(argv){
    notes.removeNotes(argv.title);
  }
})

//* Create read Command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function(){
    console.log('Reading the note')
  }
})

//* Create list Command
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler: function(){
    console.log('Listing the notes')
  }
})

yargs.parse();