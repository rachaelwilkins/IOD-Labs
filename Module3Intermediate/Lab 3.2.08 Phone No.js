const phoneBookABC = new Map() 
phoneBookABC.set('Annabelle', '0412312343') 
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

//a) Create a new phoneBookDEF Map to store names beginning with D, E or F//

const phoneBookDEF = new Map() 
phoneBookDEF.set('Donna', '0412345896') 
phoneBookDEF.set('Emma', '0433231412')
phoneBookDEF.set('Francis', '0455275488')

console.log(phoneBookDEF);

//b) Initialise the contents of phoneBookDEF by passing in an array of keys/values//



//c) Update the phone number for Caroline//

phoneBookABC.forEach((value,key) => {
    if (value === '0455221182') {
        phoneBookABC.set(key, '0498765432')
    }
})

console.log(phoneBookABC);

//d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map//


//e) Combine the contents of the two individual Maps into a single phoneBook Map//
//f) Print out the full list of names in the combined phone book.// 

let phoneBookABCDEF = new Map([...phoneBookABC, ...phoneBookDEF]);

console.log(phoneBookABCDEF);

