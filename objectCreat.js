//1. Using object literal
const student = { name: 'Sakib Al Hasan', job: 'Cricketer' }

//2. object constructor
const person = new Object()

//3. 
const human = Object.create(student)
// console.log(student.job)


//4. class object
class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
const peop = new People('Manus', 12)
// console.log(peop)

//5. function
function Manus(name) {
    this.name = name
}
const man = new Manus('Kadir')
console.log(man)
