// creating  two Objects
// First object Profile
const profile = { name: "Charlie",
    age: 29, 
   address: { city: "San Francisco", zipcode: "94101" } 
};
// Second object Updates
const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };
// Merging udates
let updatedProfile={...profile,...updates};
console.log(updatedProfile)