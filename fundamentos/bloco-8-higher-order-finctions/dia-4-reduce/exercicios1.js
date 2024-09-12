// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = arrays.reduce((acc, array) => {
  if(array.length === 3){
    array.forEach((item) => acc.push(item))
  }else {
    acc.push(array[0])
  }
return acc
},[]) 

console.log(flatten);
  