
let today = new Date();
console.log(today);

const christmas = new Date('2023-12-25') // assumes UTC timezone if time not included
console.log(christmas) // 2023-12-25T00:00:00.000Z - Z indicates UTC timezone, GMT+0
const nyeLocal = new Date('2023-12-31 23:59:59') // assumes local timezone if time is included
const nyeUTC = new Date('2023-12-31 23:59:59+00:00') // specific timezone specified (UTC)
console.log(nyeLocal) // 2023-12-31T13:59:59.000Z - stored internally as UTC so now hours are different
console.log(nyeUTC) // 2023-12-31T23:59:59.000Z - UTC before midnight, no longer local timezone

const boxingDay = new Date(2023, 11, 26) // assumes local timezone, January is 0, December is 11. 
console.log(boxingDay) // 2023-12-25T14:00:00.000Z - so hours are different in UTC
const remembranceDay = new Date( 2023, 10, 11, 11, 11 ) // assumes local timezone
console.log(remembranceDay) // 2023-11-11T01:11:00.000Z - so hours are different in UT