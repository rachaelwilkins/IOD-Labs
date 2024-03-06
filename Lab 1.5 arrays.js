const schedule = ["Read", "Eat", "Work", "Train", "Study", "Nap"];

schedule[1] = "Have Coffee"
schedule[4] = "Read a Book"

schedule.unshift("Wake Up")

schedule.pop();

console.log(schedule);