// const square = function(x){
//     return x * x
// }

// const square = (x) => {
//     return x * x 
// }

//const square = (x) => x * x

//console.log(square(5))

const event = {
    name: 'Birthday Party',
    questList: ['Andrew', 'Jen','Mike'],
    printGuestList(){
        console.log('Guest list 4 ' + this.name)
        this.questList.forEach((quest) => {
            console.log(quest +'is attenting ' + this.name)
        })
    }
}

event.printGuestList()