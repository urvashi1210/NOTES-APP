//cd- change directory (cd nameOfDirectoryToOpen)
//cls or clear- clear the terminal
//require function loads other things into this file e.g. core node module, another file we create or npm module
//node currently does not support import keyword hence we use require

//node -v : to get node version
//npm -v : to get npm package version 

//npm init-> enter enter ... -> yes -> npm install packageName@version / npm i packageName@version-> load(require) into app.js

// const validator=require('validator')//load he installed npm package into out app.js
const notes=require(`./notes.js`)//using other files (using dot slash)


// console.log(validator.isEmail('andrew@example.com'))

//you may delete node_modules for storage issues while uploading on git. Type npm install in terminal and it reads package-lock.json and package-json to install required npm packages

const chalk=require('chalk')
// console.log(chalk.bold.inverse.blue('Success!'));
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
//nodemon- constant running

//fs-store data
//command line argument-input data

const yargs=require('yargs');
const { demandOption } = require('yargs');

console.log(process.argv);//argument vector-gives array of nodejs location, app.js location and arguments provided

// const command=process.argv[2];

// if(command==='add'){
//     console.log('Adding note!');
// }
// else if(command==='remove'){
//     console.log('Removing note');
// }


//Customize yargs version

yargs.version('1.1.0')

//create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,//makes title a required field
            type:'string',
        },//builder: builder's value is an object that has options(that may be marked required or not)
        body:{
            describe:'body option for add command',
            demandOption:true,
            type:'string',
        }
    },
    handler(argv){
      notes.addNote(argv.title,argv.body)
    }//handler is what actually happens
})

//create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
        describe:'Note title',
        demandOption:true,
        type:'string',
        },
    },
    handler(argv){
      notes.removeNote(argv.title)  
    }//handler is what actually happens
})

yargs.command({
    command:'list',
    describe:'list all notes',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string',
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})

//add, remove, read and list command

// console.log(yargs.argv);//an object with two properties first is underscore that stores list of arguments and second is $0 that stores file name that we run
//run this with node app add --title"adds a new property title with this value"

yargs.parse();//M2 to parse arguments(M1 is yargs.argv)

