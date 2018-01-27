/*
Return a new object with the following keys calculated and filled (about
  the persons data set)
totalRecordCount - integer - the total count of all persons records
datesOfBirth - object - another object, with year number (1986) as the key
  and the count of how many such records share the same year number as the
  value
genders - object - another object, similar to the one above, but each 
  of these will have the corresponding sum of genders (male / female)
smokers - object - another object, similar to the one above, but each
  of these will have the corresponding sum of smokers / non-smokers
 */

const reduceOnProperty = (array, property, transformer = x => x) =>
  array.reduce(
    (result, obj) => {
      const propValue = transformer(obj[property]);
      if (result[propValue]) {
        result[propValue] += 1;
      } else {
        result[propValue] = 1;
      }
      return result;
    }, {}
  );

export default persons => ({
  totalRecordCount: persons.length,
  datesOfBirth: reduceOnProperty(
    persons, 'DateOfBirth', birthDate => birthDate.match(/\d{4}/)[0]
  ),
  genders: reduceOnProperty(persons, 'Gender'),
  smokers: reduceOnProperty(persons, 'Smoker'),
});
