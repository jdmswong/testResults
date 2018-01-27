export default (persons) => {
  console.log("Question 1:");
  return persons.map(person => person.DateOfBirth).sort();
};
