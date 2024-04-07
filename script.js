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
/*
var result = [];
var a = function (a) {
  for (var i = 0; i < a.length; i++) {
    var count = 0;
    for (var j = 2; j < a[i]; j++) {
      if (a[i] % j === 0) {
        count = 1;
      }
    }
    if (count === 0) {
      result.push(a[i]);
    }
  }
  return result;
};
console.log(a([11, 12, 13, 14, 15, 16, 17, 18, 19]));
*/

//! using IIFE function
/*
var result = [];
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        count = 1;
      }
    }
    if (count === 0) {
      result.push(arr[i]);
    }
  }
  console.log(result);
})([11, 12, 13, 14, 15, 16, 17, 18, 19]);
*/
//! using Arrow function
/*
var result = [];
var a = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        count = 1;
      }
    }
    if (count === 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(a([11, 12, 13, 14, 15, 16, 17, 18, 19]));
*/

//------------------------------------------------------------------------

//! Task e: Return all the palindromes in an array using Anonymous function, IIFE & Arrow function
//! using Anonymous function
/*
var result = [];
var a = function (ele) {
  for (var i = 0; i < ele.length; i++) {
    var data = ele[i].split("").reverse().join("");
    if (data === ele[i]) {
      result.push(ele[i]);
    }
  }
  return result;
};
console.log(a(["civic", "radar", "happy"]));
*/

//! using IIFE function
/*
var result = [];
(function (ele) {
  for (var i = 0; i < ele.length; i++) {
    var data = ele[i].split("").reverse().join("");
    if (data === ele[i]) {
      result.push(ele[i]);
    }
  }
  console.log(result);
})(["civic", "radar", "happy"]);
*/

//! using Arrow function
/*
var result = [];
var a = (ele) => {
  for (var i = 0; i < ele.length; i++) {
    var data = ele[i].split("").reverse().join("");
    if (data === ele[i]) {
      result.push(ele[i]);
    }
  }
  return result;
};
console.log(a(["civic", "radar", "happy"]));
*/

//! Task f: Return median of two sorted arrays of the same size using Anonymous function, IIFE function
//! using Anonymous function
/*
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8, 9];
var a = function median(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  arr.sort((a, b) => a - b);
  let n = arr.length;
  console.log(n);
  if (n % 2 === 0) {
    return (arr[n / 2] + arr[n - 1] / 2) / 2;
  } else {
    return arr[Math.floor(n / 2)];
  }
};
console.log(a(arr1, arr2));
*/

//! using IIFE function
/*
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8, 9];
(function median(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  arr.sort((a, b) => a - b);
  let n = arr.length;
  console.log(n);
  if (n % 2 === 0) {
    (arr[n / 2] + arr[n - 1] / 2) / 2;
  } else {
    var c = arr[Math.floor(n / 2)];
  }
  console.log(c);
})(arr1, arr2);
*/

//------------------------------------------------------------------------

//! Task g: Remove duplicates from an array using Anonymous function, IIFE & Arrow function
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

//------------------------------------------------------------------------

//! Task h: Rotate an array by k times using Anonymous function, IIFE & Arrow function
//! using Anonymous function
/*
const arr = [11, 12, 13, 14, 15, 16];
const n = 4;
var a = function Rotate(arr, n) {
  for (var i = 0; i < n; i++) {
    arr.push(arr[i]);
  }
  for (var i = 0; i < n; i++) {
    arr.shift();
  }
  return arr;
};
console.log(a(arr, n));
*/

//! using IIFE function
/*
const arr = [11, 12, 13, 14, 15, 16];
const n = 4;
(function Rotate(arr, n) {
  for (var i = 0; i < n; i++) {
    arr.push(arr[i]);
  }
  for (var i = 0; i < n; i++) {
    arr.shift();
  }

  console.log(arr);
})(arr, n);
*/
