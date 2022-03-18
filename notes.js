const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    //const dublicateNotes = notes.filter((note) => note.title === title)
    //search in all notes even after finds it
    const dublicateNote  = notes.find((note) => note.title === title)
    //stops when it is found

    if(!dublicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added'))
    }
    else
    {
        console.log(chalk.bgRed('Note title taken'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)
    if(noteToRead)
    {
        console.log(chalk.bgGreen(noteToRead.title))
        console.log(noteToRead.body)
    }
    else
        console.log(chalk.bgRed('No note found!'))

}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notes.length > notesToKeep.length)
    {
        saveNotes(notesToKeep)
        console.log(chalk.bgGreen('Note removed!'))
    }
    else
        console.log(chalk.bgRed('No note found!'))

}


const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bold.underline.bgBlueBright('Your notes'))
    notes.forEach((note) => {
        console.log(chalk.bold.bgCyan(note.title))
        console.log(chalk.bold.bgGreen(note.body))
    });
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}


const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}


module.exports = {
    addNote: addNote, 
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}