const fs = require('fs')
// const book = {
//     title:'Ego is the Enemy',
//     author:'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON) //javascript object
// fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Savulescu Andrei'
data.age = 23


const newdataJSON = JSON.stringify(data)
console.log(newdataJSON)
fs.writeFileSync('1-json.json',newdataJSON) 