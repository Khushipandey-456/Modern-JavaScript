// Multilevel destructuring of object
const people= [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ]

const result = [];
for (let i = 0; i < people.length; i++) {
  const { name, address: { city, street: { name: streetName } } } = people[i];
  result.push(`${name} lives in ${city} on ${streetName}`); //pushing elements in empty array
}
console.log (result);
