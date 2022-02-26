const Abdullah = {
    name: 'Abdullah Al Mamun',
    id: 101,
    money: 5000,
    treatDe: function (expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax
        console.log(this)
        return this.money
    }
}
const Kadir = {
    name: 'Kadir',
    id: 102,
    money: 6000,
}
const Poran = {
    name: 'Poran',
    id: 103,
    money: 8000,
}
// Abdullah.treatDe.call(Kadir, 200, 50, 20)
// Abdullah.treatDe.call(Poran, 150, 30, 10)

Abdullah.treatDe.apply(Kadir, [500, 100, 50])
Abdullah.treatDe.apply(Poran, [600, 100, 60])