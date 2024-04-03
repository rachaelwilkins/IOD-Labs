
const fruits = ['Apple', 'Orange', 'Pear']
const lastFruit = fruits.pop() // removes and returns the last item
console.log(lastFruit); // Pear
console.log(fruits); // [ 'Apple', 'Orange' ]

fruits.push('Banana');

console.log(fruits);


const friends = ['Frida', 'Angela', 'Nikki', 'Rachel', 'Melanie'];

console.log(friends);

const spliceArray = ["I", "study", "JavaScript", "right", "now"] 
const removed = spliceArray.splice(0, 3, "Let's", "dance") // 0 equals the position of the item, and 3 is the amount of items removed
console.log(removed) // [ 'I', 'study', 'JavaScript' ]
console.log(spliceArray) // [ "Let's", 'dance', 'right', 'now' ]

const sliceArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
const sliced = sliceArray.slice(0, 3) // start at the beginning, get items up to index 3
const endSliced = sliceArray.slice(-3) // start at the end, get last 3 items
console.log(sliced) // [ 'red', 'orange', 'yellow' ]
console.log(endSliced) // [ 'blue', 'indigo', 'violet' ]
console.log(sliceArray) // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const hobbits = ['Bilbo', 'Frodo', 'Samwise', 'Merry', 'Pippin']
hobbits.forEach((hobbit, index) => { // usually we use an arrow function here
 console.log(`#${index}: ${hobbit}`) // runs once for every item in array
})

// FIND/FILTER FUNCTION 
const products = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' }
   ]
   // we usually use an arrow function - runs once for each array element until condition is true
   let jeans = products.find(product => product.title == 'Denim Jeans') // returns matching item
   let shirt = products.find(product => product.category == 'Shirts') // returns matching item
   console.log(jeans) // { id: 3, title: 'Denim Jeans', price: 49.95, category: 'Pants' }
   console.log(shirt) // { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }

//JOIN FUNCTION

const elements = ['Wind', 'Water', 'Fire', 'Air']
console.log( elements.join() ) // Wind,Water,Fire,Air
console.log( elements.join(' ') ) // Wind Water Fire Air
console.log( elements.join('; ') ) // Wind; Water; Fire; Air

//REVERSE FUNCTION

const reversed1 = elements.reverse() // modifies the original
const reversed2 = [...elements].reverse() // clone first to preserve the original

console.log(reversed2) // [ 'Wind', 'Water', 'Fire', 'Air' ] (reversed twice)


//REDUCE FUNCTION

const things = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts', quantity: 2 },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter', quantity: 3 },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants', quantity: 5 }
   ] // initial (below) should be 0 for reliability in calculating totals
   const totalPrice = things.reduce((currentTotal, currentThing) => currentTotal + currentThing.price, 0)
   const totalQty = things.reduce((currentQty, currentThing) => currentQty + currentThing.quantity, 0)
   console.log(totalPrice) // 128.85000000000002
   console.log(totalQty) // 10
   
   // FOR OF

   const animalsArr = ['tiger', 'lion', 'elephant', 'giraffe']
    for (let animal of animalsArr) { console.log(animal); } // prints each animal in turn
    const animalObj = { name: 'tiger', genus: 'panthera', class: 'mammal'}
    // for (let property of animalObj) { console.log(property); } // TypeError: animalObj is not iterable

   for(let property in animalObj) { console.log(property);} // fixes the above


   // JSON
   const student = {
    name: 'Sita',
    age: 28,
    courses: ['HTML', 'CSS', 'JS'],
    occupation: null
   }
   console.log( JSON.stringify(student) )

   