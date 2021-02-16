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
      demandOption: true, //? Faz o argumento ser obrigatorio
      type: 'string'
    },
    description: {
      describe: 'Note description',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    console.log('📔Title: ', argv.title, '\n🗒 Description: ',argv.description)
  }
})

//* Create remove Command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function(){
    console.log('Removing the note')
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

// console.log(yargs.argv)