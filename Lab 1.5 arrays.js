// try creating an array that has 5 elements. Replace the value of the element at position 1 and 4. Add a new element to the beginning of the array. Remove the element at the end of the array. Print the array to the console.

const schedule = ["Read", "Eat", "Work", "Train", "Study", "Nap"];

schedule[1] = "Have Coffee"
schedule[4] = "Watch Netflix"

schedule.unshift("Wake Up")

schedule.pop();

console.log(schedule);