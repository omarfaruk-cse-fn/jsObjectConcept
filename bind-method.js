const Abdullah = {
    name: 'Abdullah Al Mamun',
    id: 101,
    money: 5000,
    major: 'mathmetics',

    treatDe: function (expense) {
        this.money = this.money - expense
        console.log(this)
        return this.money
    }
}
const Kadir = {
    name: 'Kadir',
    id: 102,
    money: 6000,
    major: 'mathmetics',
}
Abdullah.treatDe(100)
const personsInfo = Abdullah.treatDe.bind(Kadir)
personsInfo(500)