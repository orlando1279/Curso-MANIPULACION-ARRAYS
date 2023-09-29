const totals = [1,2,3,4]

const suma = totals.reduce((acumulador, item, indice) => {
    console.log(acumulador, item, indice)
    return acumulador + item
}, 0)
console.log('suma total:',suma)

const rta = totals.reduce((suma, element) => suma + element, 0)
console.log('rta', rta);