var DateTime = luxon.DateTime;
//how to declare date

let dob = new Date(); //new keyword - initialize a new object in memory
console.log(dob.toString());

//init date object with predefined dates
let dob1 = new Date(1983, 2, 06);
console.log(dob1.toDateString());

DateTime.fromISO("2017-05-15"); //=> May 15, 2017 at midnight
