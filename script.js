//! Task a: Print odd numbers in an array using Anonymous function, IIFE & Arrow function
//! using Anonymous function
/*
var result = [];
var a = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(a([21, 22, 23, 24, 25, 26, 27, 28, 29, 30]));
*/

//! using IIFE function
/*
var result = [];
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  console.log(result);
})([11,12,13,14,15,16,17,18,19,20]);
*/

//! using Arrow function
/*
var result =[];
 var odd=(arr)=>{
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0)
    {
         result.push(arr[i])
    }
  }
  return result
}
console.log(odd([31,32,33,34,35,36,37,38,39,40]));
*/

// -----------------------------------------------------------------------

//! Task b: Convert all the strings to title caps in a string array using Anonymous function, IIFE & Arrow function
//! using Anonymous function
/*var result=[];
var a = function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
     result.push(str[i])
   } 
   return str.join(' ');
}
console.log(a("joHn wesLEY iS mY nAmE"));
*/

//! using IIFE function
/*var result = [];
(function (str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    result.push(str[i]);
  }
  const data = result.join(" ");
  console.log(data);
})("joHn wesLEY iS mY nAmE");
*/

//! using Arrow function
/*var result = [];
var font = (str) => {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    result.push(str[i]);
  }
  return str.join(" ");
};
console.log(font("thIs is joHn WeSlEy"));
*/
// ------------------------------------------------------------------------

//! Task c: Sum of all numbers in an array using Anonymous function, IIFE & Arrow function
//! using Anonymous function
/*
let sum = 0;
const b = function (a) {
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
  }
  return sum;
};
console.log(b([5, 6, 7, 8, 9]));
*/

//! using IIFE function
/*
let sum = 0;
(function (a) {
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
  }
  console.log(sum);
})([4, 5, 6, 7, 8, 9, 10, 11]);
*/

//! using Arrow function
/*
let sum = 0;
var add = (a) => {
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
  }
  return sum;
};
console.log(add([21, 22, 23, 24, 25, 26]));
*/

// ------------------------------------------------------------------------

//! Task d: Return all the prime numbers in an array using Anonymous function, IIFE & Arrow function
//! using Anonymous function

//------------------------------------------------------------------------

//! task g: Remove duplicates from an array using Anonymous function, IIFE & Arrow function
//! using Anonymous function
/*
var a = function (array) {
  let dup = [...new Set(array)];
  return dup;
};
console.log(a([1, 1, 2, 2, 3, 3, 4, 5]));
*/

//! using IIFE function
/*
(function (array) {
  let dup = [...new Set(array)];
  console.log(dup);
})([1, 1, 2, 2, 3, 3, 4, 5]);
*/

//! using Arrow function
/*var fresh = (array) => {
  let dup = [...new Set(array)];
  return dup;
};
console.log(fresh([1, 1, 2, 2, 3, 3, 4, 5]));
*/


