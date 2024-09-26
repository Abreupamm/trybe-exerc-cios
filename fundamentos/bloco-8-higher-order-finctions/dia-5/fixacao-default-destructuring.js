// Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined .
//  Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian .
const getNationality = ({ firstName, nationality }, nat) => (nationality === undefined) ?`${firstName} is ${nat}` : `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

const {nationality = 'Brazilian'} = person 

console.log(nationality);
console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person, nationality));