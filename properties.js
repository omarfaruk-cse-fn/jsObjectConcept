const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 250,
    isClean: true
}
//geting the properties names
const kyes = Object.keys(bottle)
console.log(kyes)
const values = Object.values(bottle)
console.log(values)
const entries = Object.entries(bottle)
console.log(entries)
Object.seal(bottle)
bottle.price = 200
delete bottle.isClean
console.log(bottle)