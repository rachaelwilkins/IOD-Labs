/* The following code uses the Date object to print the current time and the number of hours that have passed today so far. Extend the code to do the following:

a) Print the total number of minutes that have passed so far today
b) Print the total number of seconds that have passed so far today*/ 

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())

console.log(today.getHours() + ' hours have passed so far today')
console.log(today.getMinutes() + ' minutes have passed so far today')
console.log(today.getSeconds() + ' seconds have passed so far today')

// c) Calculate and print your age as: 'I am x years, y months and z days old'//

// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates //

function daysInBetween(date1, date2) {
    var date1 = new Date('12/25/2024');
    var date2 = new Date('04/06/2024');
    var daysInBetween = (date1-date2) / (1000*60*60*24);
}

console.log( daysInBetween(date1, date2) );


/* const date1 = new Date('12/25/2024');
const date2 = new Date('04/06/2024');
var totalDays = (date1-date2) / (1000*60*60*24);
console.log(totalDays); // 263 days // */

