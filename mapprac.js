const exampleMap = new Map() // create new empty map object
exampleMap.set(1, 'number one') // 'set' adds a new key-value pair to the map
exampleMap.set('1', 'string one') // maps support keys of different types
exampleMap.set(true, 'true') // can have boolean keys
exampleMap.set({name: 'John'}, {phone: '0412345678'}) // object keys also valid
exampleMap.set('1', 'second string one') // overwrites previous value if key exists
console.log(exampleMap.size) // 4 - number of items in the map
console.log(exampleMap)

console.log( exampleMap.get('1') ) // second string one - gets value for matching key
console.log( exampleMap.get(2) ) // undefined - key doesn't exist so no value
console.log( exampleMap.has(1) ) // true - key does exist
console.log( exampleMap.delete(true) ) // true - removes item and returns true if successful
exampleMap.clear() // removes all items from map
console.log( exampleMap ) // Map(0) {}

const recipeMap = new Map([
    ['flour', '1 cup'],
    ['milk', '1/2 cup'],
    ['eggs', 2],
    ['butter', '50g']
   ])
   for (let ingredient of recipeMap.keys()) {
    console.log(ingredient) // flour, milk, eggs, butter
   }
   for (let quantity of recipeMap.values()) {
    console.log(quantity) // 1 cup, 1/2 cup, 2, 50g
   }
   for (let item of recipeMap) { // same as recipeMap.entries()
    console.log(item) // ['flour', '1 cup'], (and so on)
   }

   const priceMap = new Map([
    ['banana', 1],
    ['pineapple', 2],
    ['watermelon', 5]
   ])
   const priceObject = Object.fromEntries(recipeMap)
   console.log(priceObject) // { banana: 1, pineapple: 2, watermelon: 5 }
   
   const names = new Set(['Pedro', 'Oliver', 'Jack', 'Mateo'])
   names.add('Mateo')
   names.add('Oliver')
   names.add('Bruno')
   console.log(names.size) // 5 - only the unique names
   console.log(names) // Set(5) { 'Pedro', 'Oliver', 'Jack', 'Mateo', 'Bruno' 

   const names2 = new Set(['Pedro', 'Oliver', 'Jack', 'Mateo'])
// traditional style of for loop - works because Sets are iterable
for (let name of names2) {
 console.log(name)
}
// more concise for simple operations, newer syntax using arrow function
names2.forEach(name => console.log(name))

const weakMap = new WeakMap()
const princess = { name: 'Belle' }
weakMap.set(princess, 'Beauty and the Beast')
princess = null // no longer a reference to princess1 in memory, so weakMap is now empty
// BUT there’s no way to check because we can’t do .size, .values() or .keys() on a WeakMap
weakMap.set('Cinderella', 'Cinderella') // TypeError: Invalid value used as weak map key


