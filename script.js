// "use strict";
// let user = {
//   name: "John",
//   age: 30,
// };

// let clone = {}; // the new empty object

// // let's copy all user properties into it
// for (let key in user) {
//     console.log(key);
//   clone[key] = user[key];
//   console.log(user[key]);
// }

// // now clone is a fully independent object with the same content
// clone.name = "Pete"; // changed the data in it
// clone.age = 25;
// console.log(clone);
// console.log(user.name);

// let userN = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // copies all properties from permissions1 and permissions2 into user
// Object.assign(userN, permissions1, permissions2);

// // now user = { name: "John", canView: true, canEdit: true }
// console.log(userN.name); // John
// console.log(userN.canView); // true
// console.log(userN.canEdit); // tru

// let user = {
//   name: "John",
//   age: 30
// };

// let clone = Object.assign({}, user);

// console.log(clone.name)

// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(`every ${time / gameEvents.size} minutes`);

// for (const [min, events] of gameEvents) {
//   const Half = min <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${Half} half] ${min}:${events}`);
//

// let str = `Hello`;

// // the first character
// console.log(str[0]); // H
// console.log(str.at(0)); // H

// the last character
// console.log(str[str.length - 1]); // o
// console.log(str.at(-1));
// console.log(str.at(-2));
// console.log(str[-1]);
// console.log(str.length);
// console.log(str[5]);
// console.log(str.at(5));

// let tr = "Hi";
// tr = "h" + tr[1];
// console.log(tr);

// function sum(a, b) {
//   let output = `${a + b}`;
//   return output;
// }
// sum(2, 3);
// let result = `the sum of a+b is ${sum(2, 3)}`;
// console.log(result);
// console.log(`My\n`.length);

// let str = "Hello";
// console.log(str.indexOf("E"));

// for (let char of str) {
//   console.log(char);
// }

// let tr = "Hi";
// tr = tr[0] + "I";
// console.log(tr);

// console.log("INTERFACE".toLowerCase());
// console.log("interface".toUpperCase());
// console.log(typeof "interface"[1].toUpperCase());

// const text = "Hello, world!";
// const substring = "world";
// const position = text.indexOf(substring);

// if (position !== -1) {
//   console.log(`Found "${substring}" at position ${position}`);
// } else {
//   console.log(`"${substring}" not found in the text`);
// }

// let str = "As sly as a fox, as strong as an ox";
// let target = "as";
// let position = 0;

// while (true) {
//   let foundPosition = str.indexOf(target, position);
//   if (foundPosition == -1) break;
//   position = foundPosition + 1;
//   console.log(`we found at postion ${foundPosition} `);
// }

// let trs = "stringify";
// console.log(trs.slice(2, 6));
// console.log(trs.slice(-4, -1));
// console.log(trs.substring(2, 6));
// console.log(trs.substring(6, 2));
// console.log(typeof trs.slice(6, 2));

// function ucFirst(str) {
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst("john"));

// function extractCurrencyValue(str) {
//   return str.slice(1);
// }

// console.log(typeof extractCurrencyValue("$120"));

// let arr = ["I", "study", "JavaScript", "right", "now"];

// arr.splice(0, 3, "Let's", "dance");

// console.log(arr);

// let arr = ["I", "study", "JavaScript", "right", "now"];

// let removed = arr.splice(0, 2);

// alert(removed);

// let arr = ["I", "study", "Javascript"];
// arr.splice(2, 0, "Complex", "Language");
// console.log(arr);

// let arr = [1, 2, 5];
// console.log(arr.lastIndexOf(5));

// const capitalizedName = function (name) {
//   const $name = name.split(" ");
//   const $namesUpper = [];
//   for (const n of $name) {
//     $namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log($namesUpper.join(" "));
// };
// capitalizedName("lanre is boy");
// capitalizedName("azeeza is a barca fan to the core");

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] *= 2;
//   console.log(numbers);
// }

// const printPassengerName = function (name) {
//   const passengerCorrect = name[0].toUpperCase() + name.slice(1);
//   console.log(passengerCorrect);
// };
// printPassengerName("jonas");
// printPassengerName("lanre");
// printPassengerName("ayobami");

// const isEmail = function () {
//   const email = "hello@gmail.io";
//   const loginEmail = " Hello@gmail.io  \n";
//   const correctEmail = loginEmail.toLowerCase().trim();
//   if (email === correctEmail)
//     alert("check your email box for confirmation link");
//   else (correctEmail === email)("email not in a correct format");
// };
// isEmail();

// const loginEmail = function (userEmail) {
//   const correctEmail = userEmail.toLowerCase().trim();
//   const $correctEmail = correctEmail[0].toUpperCase() + correctEmail.slice(1);
//   console.log($correctEmail);
// };
// loginEmail(" hello@Gmail.io");
// loginEmail("oLANREWAJULANZY@gmail.com");
// loginEmail(" salAudeenWareeS18@gmail.com");

// const priceGB = " 288,97£";
// const priceUS = priceGB.replace("£", "$").replace(",", ".");
// console.log(priceUS);

// const announcement =
//   "All passengers come to boarding door 23.Boarding door 23!";
// console.log(announcement.replace("door", "gate"));
// console.log(announcement.replace(/door/g, "gate"));

// const message = " go to gate 33";
// console.log(message.padStart(25, "+").padEnd(30, "="));
// console.log(message.length);

// const maskCreditCard = function (number) {
//   const str = number + " ";
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };
// console.log(maskCreditCard(6746907552456625));
// console.log(maskCreditCard("353774890976254235678994"));
// console.log(maskCreditCard(6278919753819819));

// let a = 1, b=2, c=3;
// let comma = (1+3,2+3,3+3);
// console.log(comma);

// let start = 1;
// let end = 12;
// let stopper = 20;
// for (let k = start; k <= stopper; k++) {
//   console.log(`${k} times table`);
//   for (let j = start; j <= end; j++) {
//     console.log(`${k}*${j} = ${k * j}`);
//   }
// }

// let start = 1;
// let end = 12;
// let stopper = 20;
// for (let k = start; k <= stopper; k++) {
//   console.log(`${k} Times Table`);
//   for (let j = start; j <= end; j++) {
//     console.log(`${k}*${j} = ${k * j}`);
//   }
// }

// let number = 5;
// let result = 1;

// for (let j = 1; j <= number; j++) {
//   result *= `${j}`;
// }
// console.log(result);

// let base = 2;
// let exponential = 3;
// let $result = 1;
// for (let k = 1; k <= exponential; k++) {
//   $result *= base;
// }
// console.log($result);

// let base = 2;
// let exponential = 5;
// let result = 1;
// for (let j = 0; j < exponential; j++) {
//   result *= base;
// }
// console.log(result);

// let user = {
//   name: "John",
//   age: 30,
// };
// console.log(Object.entries(user));

// for (let item of Object.keys(user)) {
//   console.log(`The key property key is ${item}`);
// };

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function sumSalaries(salaries) {
//   let sum = 0;
//   for (let each_salary of Object.values(salaries)) {
//     sum += each_salary;
//   }
//   return sum;
// }

// console.log(sumSalaries(salaries));

// let user = {
//   name: "John",
//   age: 30,
//   sex: "male",
//   state: "oyo state",
// };
// function count(obj) {
//   return Object.keys(obj).length;
// }
// console.log(count(user));

// let user = {
//   name: "John",
//   years: 30,
// };

// let { name: firstName, years: age, isAdmin = false } = user;
// console.log(firstName);
// console.log(age);
// console.log(isAdmin);

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// for(let [key, value] of Object.entries(salaries)){

// };

// let now = new Date();
// console.log(now);

// console.log(window.innerHeight);
// console.log(window.outerHeight);

// document.body.style.background = "red";
// setTimeout(() => (document.body.style.background = " "), 1000);

// let $elem = document.getElementById("elem");
// $elem.style.background = "green";
// console.log($elem);
// const x = 10;
// const y = 0;
// const $result = x / y;
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof $result);

// alert(" You are using a language : " + navigator.language);

// navigator.geolocation.getCurrentPosition((position) => {
//   alert(
//     "you are at : " + position.coords.latitude + " , " + position.coords.longitude
//   );
// });

// let user = {
//   name: "John",
//   age: 30,
// };

// let key = prompt("What do you want to know about the user?", "age");

// // access by variable
// alert(user[key]);

// let user = {
//   name: "John",
//   age: 30,
// };

// let key = "age";
// alert(user[key]);

// let user = {
//   name: "lanre",
//   age: 30,
// };

// // alert("name" in user);
// alert("lafrgusiu" in user);

// let user = {
//   name: "lanre",
// };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: false };
// Object.assign(user, permissions1, permissions2);
// console.log(user);
// let clone = {};
// for (let key in user) {
//   clone[key] = user[key];
// }

// clone.name = "fadesewa";
// (clone.age = 19), (clone.course = "MlS");
// console.log(user);
// console.log(clone);

// user.name = "azeezat";
// console.log(user);
// let admins = user;
// admins.name = "ayo";

// console.log(admins);
// console.log(user);

// // console.log("name" in admins);
// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// // let clone = Object.assign({}, user);
// let clone = structuredClone(user);

// alert( user.sizes === clone.sizes );

// // user and clone share sizes
// user.sizes.width = 60;    // change a property from one place
// alert(clone.sizes.width);

// alert(location.href);
// if (confirm("go to nairaland")) {
//   location.href = "https://www.nairaland.com";
// };

// localStorage.setItem("visited-" + window.location.pathname, true);
// var links = document.getElementsByTagName("a");
// for (i = 0; i < links.length; i++) {
//   let link = links[i];
//   if (
//     link.host == window.location.host &&
//     localStorage.getItem("visited-" + link.pathname)
//   ) {
//     link.dataset.visited = true;
//   }
// }

//  localStorage.setItem("visited-" + window.location.pathname, true);
//   window.addEventListener("DOMContentLoaded", () => {
//     const links = document.getElementsByTagName("a");
//     for (let i = 0; i < links.length; i++) {
//       let link = links[i];
//       if (
//         link.host == window.location.host &&
//         localStorage.getItem("visited-" + link.pathname)
//       ) {
//         link.dataset.visited = true;
//       }
//     }
//   });

// function calcSum(a, b) {
//   return a + b;
// }

// const result = calcSum(20, 30);
// console.log(result);

// let userName = "lanre";

// function showMessage() {
//   let userName = "Bob";

//   let message = "Hello, " + userName;
//   b;
//   alert(message);
// }
// alert(userName);
// showMessage();

// let calcSum = function (a, b) {
//   return a + b;
// };

// calcSum(30, 40);
// console.log(calcSum(30, 40));

// // function sayHi(){
// //   alert("hello");
// // }

// // alert(sayHi());

// function sayHi() {
//   alert("Hello");
// }

// let func = sayHi;
// // func();
// sayHi();

// let age = 18; // take 16 as an example

// if (age <= 18) {

//     welcome()

//   function welcome() {
//     //  |
//     alert("Hello!"); //  |  Function Declaration is available
//   } //  |  everywhere in the block where it's declared
//   //  |
//    // /   (runs)
// } else {
//     welcome()
//   function welcome() {
//     alert("Greetings!");
//   }
// }

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

// welcome();

// let arr = [1, 2, 3, 4, 5];

// arr.length = 2; // truncate to 2 elements
// // alert(arr); // [1, 2]

// arr.length = 0; // return length back
// alert(arr[3]);

// let arr = new Array(3)
// console.log(arr[0]);
// console.log(arr.length);

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];

// let user = users.filter(item => item.id < 3);

// alert(user);

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];

// // returns array of the first two users
// let someUsers = users.filter((item) => item.id < 3);

// console.log(someUsers);

// let showLength = ["lanre", "Ayo", "Azeezat"].map(item => item.length);
// console.log(showLength);

// function compareNumeric (a,b){
//   if(a > b) return 1;
//   if(a == b) return 0;
//   if(a < b) return -1;

// }

// let arr =  [15,2]

// let result = arr.reduce((sum,current) => sum + current);
// console.log(result);

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function sumSalaries(salaries){
//   return Object.values(salaries).reduce((sum,current) => sum + current)
// }

// console.log(sumSalaries(salaries));

// let user = {
//   name: "John",
//   age: 30,
// };

// function getCount(user){
//   return Object.keys(user).length;
// }
// console.log(getCount(user));

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function topSalaries(salaries) {
//   return Object.entries(salaries).reduce((prev, cur) => {
//     if (prev[1] > cur[1]) {
//       return prev[1];
//     } else {
//       return cur;
//     }
//   });
// }

// console.log(topSalaries(salaries));

// const calcAge = [5, 2, 4, 1, 15, 8, 3];
// const humanAge = calcAge.reduce((acc, cur) => {
//   if (cur <= 2) {
//     return 2 * cur;
//   } else {
//     return acc;
//   }
// });
// console.log(humanAge);

// const calcAge1 = [16, 6, 10, 5, 6, 1, 4];
// const humanAge1 = calcAge1.reduce((acc, cur) => {
//   if (cur > 2) {
//     return 16 + cur * 4;
//   } else {
//     return acc;
//   }
// }, calcAge1[0]);

// console.log(humanAge1);

// function hello(){
//   console.log(name1);
//   var name1 = "warees";
//   const age = 21;
//   console.log(age);
// };

// hello();

// const balance = movements.reduce(function (acc, cur, index, arr) {
//   return acc + cur;
// }, 0);
// const balance2 = movements.reduce((acc, cur, index, arr) => acc + cur, 0);
// const request = new XMLHttpRequest();
// request.open("GET", "https://countries-api-836d.onrender.com/countries/");
// request.send();
// console.log(request.responseText);

// request.addEventListener("load", function () {
//   console.log(this.responseText);
// });
// const variable = "salaudeen";
// console.log(variable);

// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 0);
// console.log(3);
// function sayHiBye(firstName, lastName) {
//   function getFullName() {
//     return firstName + "   " + lastName;
//   }
//   alert("Hello," + getFullName());
//   alert("Bye," + getFullName());
// }
// sayHiBye("Salaudeen", "Olanrewaju");
// sayHiBye("Salaudeen", "folasade");

// console.log("A" - "B" + "2");

// let result = "b" + "a" + +"a" + "a";
// let text = result.toLowerCase();
// console.log(text);

// console.log(typeof typeof 1);

// const name1 = "lanre";
// console.log(name1());

// console.log(NaN === NaN);

// let c = { greeting: "Hey!" };
// let d;
// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);

// (function () {
//   console.log("this will never run again");
// //   const isPrivate = 23;
// })();
// console.log(isPrivate);

// (() => console.log("never run again!!"))();

// {
//   //   const isPrivate = 23;
//   var notPrivate = 48;
// }
// console.log(isPrivate);
// console.log(notPrivate);

// function sayHi() {
//   return (() => 0)();
// }

// console.log(typeof sayHi());

// const pets = [
//   { type: "dog", name: "Bolt" },
//   { type: "cat", name: "mittens" },
//   { type: "dog", name: "Rex" },
// ];

// const groupedByType = pets.reduce((acc, pet) => {
//   (acc[pet.type] = acc[pet.type] || []).push(pet);
//   return acc;
// }, {});

// console.log(groupedByType);

// const groupedByType1 = Object.groupBy(pets, (pet) => pet.type);
// console.log(groupedByType1);

// Array destructuring
// Here’s an example of how an array is destructured into variables

// let array = ["cristiano", "ronaldo"];

// let [firstName, lastName] = array;

//destructing assignment
//sets firstName = array[0]
//sets lastName = array[1]

// console.log(firstName); //Output: cristiano
// console.log(lastName); //Output: ronaldo

// // Swap Variables trick

// let user1 = "bayonle";
// let user2 = "hamzah";

//applying destructuring assignment for the swap variable trick

// [user1, user2] = [user2, user1];

// console.log("user 1:", user1); //Output: User 1: hamzah
// console.log("user 2:", user2); // Output: User 2: bayonle
// console.log(user1, user2); //Output  hamzah bayonle (successfully swapped!)

// The syntax is:
//"Key" in object;

let currentUser = {
  name: "Smith",
  age: 35,
  country: "England",
};

console.log("name" in currentUser); // returns true, currentUser.name exists

console.log("age" in currentUser); // returns true, currentUser.age exists

console.log("country" in currentUser); // returns true, currentUser.country exists

console.log("city" in currentUser); // returns false currentUser.city doesn't exist

// When an object property is present but holds the value "undefined."

let object = {
  test: undefined,
};

console.log("test" in object); // true,indeed, the property does exist!
console.log(object.test); // it's undefined, does it mean there's no such property????
