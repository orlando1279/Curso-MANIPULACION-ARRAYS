const letters = ['a', 'b', 'c', 'd', 'e']

const newArray =  letters.map(item => item + '++')
console.log('original', letters);
 console.log('New array from map', newArray);

 const num = [2, 4, 5, 6];
const num2 = num.map(item => item*2 );
console.log(num2);