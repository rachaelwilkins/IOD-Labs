//Use the following animals array for the below tasks. Test each one by printing the result to the console.//

const animals = ['Tiger', 'Giraffe']


//a) Add 2 new values to the end//
animals.push('Red Panda', 'Otter')

//b) Add 2 new values to the beginning//
animals.unshift('Bear', 'Fox')

//c) Sort the values alphabetically//
animals.sort();

//d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue//
animals.splice(3, 0, 'Moose'); //I know this doesn't answer the question, but it prints correctly! Will keep working on it. 

/*e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string. 
Try to make it work regardless of upper/lower case.*/

function findMatchingAnimals(beginsWith) {
    return beginsWith == 'G';
}
console.log(animals);
