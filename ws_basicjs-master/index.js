/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year shoudl use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "UP917082";
}

function fn() {
    return "Mohammad";
}

function sn() {
    return "Alatoum";
}

function add(x,y) {
  return x+y;
}

function subtract(x,y) {
  return x-y;
}

let obj = {};
function checkObject(obj) {
  obj.checked = true;
}

let obj2 = {};
function checkObjectInside(obj2) {
  if(obj2.data != null) {
    obj2.data.checked = true;
  }
}

let arr = [];
function arraySet(arr, x, y) {
  for(let i=0;i<arr.length;i++) {
    if(i==x) {
        arr[x] = y;
    }
  }
}

let arr2 = [];
function addAll(arr2) {
  let sum = 0;
  for(let i=0;i<arr2.length;i++) {
    sum += arr2[i];
  }
  return sum;
}

function larger(x,y) {
  if(x>y) {
    return x; }
  else {
    return y; }
}

let arr3 = [];
function largest(arr3) {
  arr3.sort();
  return arr3[arr3.length-1];
}

let arr4 = [];
let arr5 = [];
function compare(arr4,arr5) {
  for(let i=0;i<arr4.length;i++) {
    if(arr4[i] != arr5[i]) {
    return false; }
  }
    return true;
}

let arr6 = [];
function addToAll(arr6,x) {
  for(let i=0;i<arr6.length;i++) {
    arr6[i] += x;
  }
  return arr6;
}

let remembered = "";
function rememberThis(x) {
  remembered = x;
}

function nArray(n) {
  let arr7 = [];
  for(let i=0;i<n;i++) {
    arr[i] = i+1;
  }
  return arr7;
}

let arr8 = [];
function addAllOpt(arr8) {
  let sum = 0;
  if(typeof arr8 !== 'undefined' && arr8.length > 0) {
    for(let i=0; i<arr8.length; i++) {
      sum += arr8[i];
    }
    return sum;
  }
  else {
    return 0;
  }
}

let arr9 = [];
function divisors(arr9, x) {
    if(typeof arr9 !== 'undefined' && arr9.length > 0) {
      for(let i=0; i<arr9.length; i++) {
        if(arr9[i] % x == 0) {
          return arr9[i];
      }
    }
  }
}

function multiples(n,m) {
let arr10 = [];
  for(let i=0; i<n; i++) {
    arr10[i] = i * m;
    return arr10[i];
  }
}
