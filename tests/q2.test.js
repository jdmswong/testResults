import q2 from '../q2';
import perons from '../persons';

test('empty set', () => {
  const sampleData = [];
  expect(q2(sampleData)).toMatchSnapshot();
});

test('returns expected output', () => {
  expect(q2(perons)).toMatchSnapshot();
});

