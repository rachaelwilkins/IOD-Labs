// 3.3 Which of the following console.log messages will print? Why?

if (0) console.log('#1 zero is true')
if ("0") console.log('#2 zero is true') //prints. "0" is a string, since it's not empty, it is true. 
if (null) console.log('null is true')
if (-1) console.log('negative is true') //prints. Any Non-zero numbers evaluate to true.
if (1) console.log('positive is true') //prints. Same as above. 

