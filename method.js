const student = {
    name: 'Abdullah',
    id: 101,
    money: 5000,
    major: 'mathmetics',
    isReach: false,
    subject: ['english', 'math', 'calculas'],
    bestFriend: {
        name: 'Kadir',
        major: 'mathmetics'
    },
    takeExam: function () {
        console.log(this.name, 'Taking Exam')
    },
    treatDe: function (expense, boksis) {
        this.money = this.money - expense - boksis
        return this.money
    }
}
student.takeExam()
const remaning1 = student.treatDe(900, 100)
console.log(remaning1)
const remaning2 = student.treatDe(500, 100)
console.log(remaning2)