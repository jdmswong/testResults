import persons from './persons';
import q1 from './q1';
import q2 from './q2';
import q3 from './q3';
import q4 from './q4';

const answerNumbers = [
  { number: 1, func: q1 },
  { number: 2, func: q2 },
  { number: 3, func: q3 },
  { number: 4, func: q4 },
];
answerNumbers.forEach(qObj => {
  console.log(`Question ${qObj.number}`);
  console.log(qObj.func(persons));
  console.log('');
});
