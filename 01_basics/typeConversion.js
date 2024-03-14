let score = "33abc";
// console.log(typeof score);

let scoreInNumber = Number(score);
// console.log(typeof scoreInNumber);
// console.log(scoreInNumber);

/*
   "33" => 33;
   "33abc" => Nan (not a number);
   "true or false" => 1 or 0;
   
*/

let isLogged = 1;

let isLoggedIn = Boolean(isLogged);
console.log(isLoggedIn);
/*
 0 => false, 1 => true
 "" => false, "siddharth" => true