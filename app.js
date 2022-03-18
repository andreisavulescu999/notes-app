
//const fs = require('fs')
//fs.writeFileSync('notes.txt','My name is Andrew! This file was created by Node.js!') //write to file 
//fs.appendFileSync('notes.txt',' And I already have a great experience doing it') //append to file 
//const add = require('./utils.js')
//const sum = add(4, -2)
//const validator = require('validator')
//console.log(sum)

//console.log(validator.isEmail('example.com'))
//console.log(validator.isURL('https/www.npmjs.com/'))

// const msg = getNotes()
// console.log(msg)

// const greenMsg = chalk.green.underline.inverse.bold('Success!')
// console.log(greenMsg)

// console.log(process.argv[2])


const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

const command = process.argv[2]

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,     //required variable
            type: 'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,     //required variable
            type: 'string'
        }
    },
    handler:function(argv){
        notes.addNote(argv.title, argv.body)
        //console.log('Title: ',argv.title)
        //console.log('Body: ',argv.body) 
    }
})

//Create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,     //required variable
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title) 
    }
})

//Create List command 
yargs.command({
    command:'list',
    describe:'List the notes',
    handler(){
        notes.listNotes() 
    }
})

//Read command 
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,     //required variable
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

//add, remove, read, list

yargs.parse()


if(command === 'add'){
    console.log('Adding note!')
}else if (command === 'remove'){
    console.log('Removing note!')
}



