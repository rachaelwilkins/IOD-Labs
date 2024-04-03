const mj = ['Michael', 'Jordan']
const [mjFirst, mjLast] = mj //destructure (unpack) array on right into separate variables on left
console.log(mjFirst, mjLast) // Michael Jordan

const [a, b, c] = "abc" //strings are iterable, so can break into characters
const [ one, two, three ] = new Set([1, 2, 3]) //Sets are iterable, so can be destructured
const [ [type, quantity] ] = new Map([ ['apple', 4] ]) // Maps are iterable too
//now we have 6 individual variables: a, b, c, one, two, three, type, quantity
console.log(a, b, c, one, two, three, type, quantity) // a b c 1 2 3 apple 4

const monarch = {}; // empty object
[ monarch.title, monarch.name ] = "King Charles".split(' '); //store array pieces in object properties
console.log(monarch); // { title: 'King', name: 'Charles' }

// SWAP VARIABLES TRICK
let student = 'James', teacher = 'Andrew';
[student, teacher] = [teacher, student]
console.log(student) // Andrew
console.log(teacher) // James

// THE ARRAY REST ...
const [jcFirst, jcLast, ...jcTitles] = ['Julius', 'Caesar', 'Consul', 'of the', 'Roman', 'Republic']
console.log( jcTitles ) // [ 'Consul', 'of the', 'Roman', 'Republic' ]
console.log( jcTitles.length ) // 4

// THE REST PATTERN ...
let options = { width: 200, height: 100, title: 'My Component'}
let { title, ...rest} = options
console.log(title) // My Component
console.log(rest) // { width: 200, height: 100 }
