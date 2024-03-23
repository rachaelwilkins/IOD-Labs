// 3.1.08 - City

// a) Write a function that takes an object as an argument and uses a for…in loop to access and print to the console each of those object properties and their values. Test it using the sydney object below.
// b) Create a new object for a different city with different properties and call your function again with the new object.

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
    }

const auckland = {
    name: 'Auckland',
    capital: 'No',
    nickname: 'City of Sails',
    mayor: 'Wayne Brown',
    tallestbuilding: 'Sky Tower',
    }    
 
for (const prop in sydney) {
    console.log(`sydney.${prop} = ${sydney[prop]}`);
}

for (const prop in auckland) {
    console.log(`auckland.${prop} = ${auckland[prop]}`);
}