/*
Return an array of sentences, in the following form,

 "[John] [Smith] was born on [July, 23 1977] and [he] lives in [City and County here]."
For each person who satisfies the following criteria:

User must be IsActive
User must be IsValid
User must not be IsTestUser
User cannot have UserRole set to 'PlatformAdmin'
User must have a DateOfBirth some time after 1974
(note, the DateOfBirth has been re-formatted to use words for months, etc.)
 */

const months = [
  'filler-for-index-0',
  'January',
  'February',
  'March',
  'April',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const dateFormatter = date => {
  const [, year, month, day] = date.match(/(\d+)-(\d+)-(\d+)/).map(ele => parseInt(ele));
  return `${months[month]}, ${day} ${year}`;
};

export default persons =>
  persons
    .filter(
      person =>
        person.IsActive &&
        person.IsValid &&
        !person.IsTestUser &&
        person.UserRole !== 'PlatformAdmin' &&
        parseInt(person.DateOfBirth.match(/\d{4}/)[0]) > 1974
    )
    .map(
      person => `${person.FirstName} ${person.LastName} was born on ${dateFormatter(person.DateOfBirth)} and ${person.Gender === 'Male' ? 'he' : 'she'} lives in ${person.City}, ${person.County}`
    );