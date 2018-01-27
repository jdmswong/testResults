import q4 from '../q4';
import persons from '../persons';

test('empty set', () => {
  const sampleData = [];
  expect(q4(sampleData)).toMatchSnapshot();
});

test('returns expected value', () => {
  expect(q4(persons).map(e => e.HixmeEmailAlias)).toMatchSnapshot();
});
