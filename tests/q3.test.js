import q3 from '../q3';
import persons from '../persons';

test('empty set', () => {
  const sampleData = [];
  expect(q3(sampleData)).toMatchSnapshot();
});

test('returns expected value', () => {
  expect(q3(persons)).toMatchSnapshot();
});
