const object = {
  name: 'John',
  age: 30,
  city: 'New York',
  gender: 'male',
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

// in keyword: Check if a property or method exists in an object
console.log('name' in object); // true
console.log('color' in object); // false

// Object.keys() method: Returns an array of all the properties and methods in an object
console.log(Object.keys(object)); // ['name', 'age', 'city', 'gender', 'sayHello']

// for...in keyword: Enumerates the properties and methods in an object
for (let key in object) {
  console.log(key, object[key]); // ['name', 'John'], ['age', 30], ['city', 'New York'], ['gender', 'male'], ['sayHello', function() { ... }]
}
