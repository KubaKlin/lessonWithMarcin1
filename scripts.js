// 1
function checkIfPropertyIsDefined(object, propertyName) {
  return object[propertyName] !== undefined;
}

const user = {
  firstName: 'John',
  lastName: 'Smith',
  age: undefined,
};

console.log(checkIfPropertyIsDefined(user, 'firstName')); // true
console.log(checkIfPropertyIsDefined(user, 'height')); // false
console.log(checkIfPropertyIsDefined(user, 'age')); // false


// 2
const salaries = {
  john: 50,
  adam: 100,
  katie: 75
}
const salarySum = salaries.john + salaries.adam + salaries.katie;


// 3
function isObject(value) {
  return typeof value === 'object' && value !== null;
}

console.log(isObject({})); // true
console.log(isObject(10)); // false
console.log(isObject(null)); // false

// 4
function checkIfPropertyIsDefined(object, propertyName) {
  return object[propertyName] !== undefined;
}

function removeProperty(object, propertyName) {

  if (checkIfPropertyIsDefined(object, propertyName)) {
    delete object[propertyName];
    return true;
  }
  return false;
}

const userObject = {
  name: 'John'
}

removeProperty(userObject, 'name'); // true
removeProperty(userObject, 'name'); // false
removeProperty(userObject, 'weight'); // false

console.log(userObject); // {}


// 5
function checkIfUsersHaveTheSameName(firstObject, secondObject) {
  return firstObject['firstName'] === secondObject['firstName'];
}

const firstJohn = {
  firstName: 'John',
  lastName: 'Smith'
}

const secondJohn = {
  firstName: 'John',
  lastName: 'Smith'
}

const adam = {
  firstName: 'Adam',
  lastName: 'Johnson'
}

console.log(checkIfUsersHaveTheSameName(firstJohn, secondJohn)); // true
console.log(checkIfUsersHaveTheSameName(firstJohn, adam)); // false

// 6
function getVoteCount(votes) {
  return votes.upvotes - votes.downvotes;
}

console.log(getVoteCount({ upvotes: 10, downvotes: 5 })); // 5
console.log(getVoteCount({ upvotes: 75, downvotes: 90 })); // -15
console.log(getVoteCount({ upvotes: 50, downvotes: 50 })); // 0

// 7
function getCubeVolume(cubeDimensions) {
  return cubeDimensions.width * cubeDimensions.height * cubeDimensions.length;
}

console.log(getCubeVolume({ width: 10, length: 5, height: 2 })); // 100
console.log(getCubeVolume({ width: 100, length: 500, height: 0 })); // 0
console.log(getCubeVolume({ width: 15, length: 2, height: 5 })); // 150

// 8
function getCityInformation(cityObject) {
  return `${cityObject.name} is in ${cityObject.country} and has an area of ${cityObject.areaInKilometers} square kilometers`;
}

console.log(getCityInformation({
  name: 'Warsaw',
  country: 'Poland',
  areaInKilometers: 517
})); // Warsaw is in Poland and has an area of 517 square kilometers

// 9
function getUserCopy(user) {
  return userData = {
    firstName: user['firstName'],
    lastName: user['lastName'],
  };
}

const john = {
  firstName: 'John',
  lastName: 'Smith'
}

const newUser = getUserCopy(john);

console.log(newUser.firstName); // John
console.log(newUser.lastName); // Smith
console.log(newUser === john); // false <-- this is crucial

//10
function getAnimalObject(animalObject) {
  return `This ${animalObject.color} ${animalObject.name} has ${animalObject.legs} legs`;
}

const animal = {
  name: "dog",
  legs: 4,
  color: "white",
}

console.log(getAnimalObject(animal));

//11
const rooms = {
  first: {
    description: 'This is the first room',
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient',
    }
  },
  second: {
    description: 'This is the second room',
    items: {
      couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water',
    }
  },
}

//12
console.log('-- 12 --');

function addContact(objectName, contactName, contactPhone) {
  return {
    John: {
      name: contactName,
      phoneNumber: contactPhone,
    }
  }
}

const contacts = {};
const contactsWithJohn = addContact(contacts, 'John', '123 456 789');

console.log(contactsWithJohn.John.name); // "John"
console.log(contactsWithJohn.John.phoneNumber); // '123 456 789'

console.log(contacts === contactsWithJohn); // false
console.log(contacts.John); // undefined

//13
console.log();
function findContact(objectName, searchedName) {
  if (contactsWithJohn.John.name === searchedName) {
    return contactsWithJohn[searchedName];
  }
  return undefined;
}

const johnContactInfo = findContact(contactsWithJohn, 'John');
console.log(johnContactInfo); // "Name: John, Phone: 123 456 789"

//14
function validateUserGreet(object) {
  const objectFirstName = object['firstName'];
  const objectLastName = object['lastName'];
  const objectGreetString = object['greet'].toString();

  return objectGreetString.includes(objectFirstName) && objectGreetString.includes(objectLastName);
}

function validateIfObjectIsAUser(object) {
  const isFirstNameString = typeof object['firstName'] === 'string';
  const isLastNameString = typeof object['lastName'] === 'string';
  const isAgeNumber = typeof object['age'] === 'number';
  const isGreetProperty = typeof object['greet'] === 'function';

  if (isFirstNameString && isLastNameString && isAgeNumber && isGreetProperty && validateUserGreet(object))  {
    return true;
  }
}

const personData = {
  firstName: 'Bob',
  lastName: 'Ross',
  age: 40,
  greet() {
    return "Hi, I'm Bob Ross!";
  }
}
const objectExample = {
  firstName: 'Kate',
  lastName: 'Williams',
  age: 40,
  greet() {
    return "Hi, I'm Kate!";
  }
}
const car = {
  make: 'Ferrari',
  model: 'F40',
  greet() {
    return "<engine noise>";
  }
}

console.log(validateIfObjectIsAUser(personData)); // true
console.log(validateIfObjectIsAUser(objectExample)); // false
console.log(validateIfObjectIsAUser(car)); // false