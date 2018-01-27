import q1 from '../q1';

test('accepts empty array', () => {
  const test1 = [];
  expect(q1(test1)).toEqual([]);
});

test('works with sample data', () => {
  const sampleData = [
    { DateOfBirth: '1975-01-01' },
    { DateOfBirth: '1976-01-01' },
    { DateOfBirth: '1976-01-01' },
    { DateOfBirth: '1976-02-01' },
    { DateOfBirth: '1976-01-02' },
  ];
  expect(q1(sampleData)).toMatchSnapshot();
});
