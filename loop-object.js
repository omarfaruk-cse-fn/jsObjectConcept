const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 250,
    isClean: true
}
for (const property in bottle) {
    //console.log(property, bottle[property])
}

const keys = Object.keys(bottle)
for (const prop of keys) {
    // console.log(prop, bottle[prop])
}

//advance
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value)
}