const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

const newArray = [...elements]; 
for (let index = 0; index < otherElements.length; index++) {
    const item = otherElements[index];
    newArray.push(elements);
}
console.log('for:', newArray);

const rta = elements.concat(otherElements);
console.log('concat', rta);
const rta2 = [...elements, ...otherElements];
const rta3 = [...elements, ...'randon'];
console.log('...', rta2);
console.log('rta3', rta3);
elements.push(...otherElements);
console.log('elements', elements);

