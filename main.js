import persons from './persons';
import q1 from './q1';
import q2 from './q2';

const anserNumbers = [
  { number: 1, func: q1 },
  { number: 2, func: q2 },
];
anserNumbers.forEach(qObj => {
  console.log(`Question ${qObj.number}`);
  console.log(qObj.func(persons));
  console.log('');
});
