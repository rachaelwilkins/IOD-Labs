// a) Complete the inigo object by adding a lastName property and including it in the greeting. 
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console.
// c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

const westley = {
    name: 'Westley',
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}
const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',

    greeting(person) { 
         let greeting = `Hello ${person.name}, my name is ${this.firstName this.lastName};
        console.log(greeting + this.getCatchPhrase(person));
    },

    getCatchPhrase(person) {
        if (numFingers = "5" {
            getCatchPhrase = "Nice to meet you";
          } else {
            getCatchPhrase = "Hello. My name is Inigo Montoya. You killed my father. Prepare to die.";
          }
    },

inigo.greeting(westley)
inigo.greeting(rugen)
