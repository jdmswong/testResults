/*
Generate a new array of worker objects that have all the same data they
  have now, but with modified email addresses. The new form of their email
  address should be:

 "first_letter_of_first_name.first_three_letters_of_last_name.the_users_date_of_birth_year@newhixmeusers.com"

There are three main components—with periods between them each—and a "new"
  domain name at the end:

first_letter_of_first_name
first_three_letters_of_last_name
the_users_date_of_birth_year
 */

export default persons => persons.map(person => ({
  ...person,
  HixmeEmailAlias: `${person.FirstName.charAt(0)}.${person.LastName.substring(0, 3)}.${person.DateOfBirth.substring(0, 4)}@newhixmeusers.com`,
}))