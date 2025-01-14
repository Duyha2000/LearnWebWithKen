// var a;
// Declare: let const (ES6) var
/*
const PI = 3.14;
a = 3.4;

let x = 4;
// let x = 5;  Khởi tạo 1 biến, chỉ sử dụng let 1 lần duy nhất

var m = 5;
var m = 7;
console.log(x);
console.log(a);
console.log(m); // 7
*/
// Hoisting:

console.log(a); // Cannot access 'a' before initialization
//http://localhost:5500/B1/index.html
// let a; // const

var a = 5; // undefined
// var: hoisting
// let,const: ko hoisiting

// scope:
// global, [functional scope, block scope]
if (a > 10) {
  //  let i = 0; // let - const: block scope
  var i = 0;
}

console.log(i); // ReferenceError

// Kiểu dữ liệu trong JS:
// Primitives type: number, String, boolean, null, undefined
// Reference type: object (array, function, Date,...)
const m = 4;
console.log(typeof m); // number
// Truthy - falsy value:
// 1 value -> khi ép kiểu boolean trả về true -> truthy
//C: 0 : false
//   1 : true
console.log(Boolean(0)); // false
// falsy: 0 null undefined NaN "" false
console.log(Boolean(2));
// && ||
// const result = 0 || "3" || 4 || null

//
const h1 = 1.7;
const h2 = 1.3;

const result = 3 || 0 || 4; // trả về giá trị truthy đầu tiên
const result2 = 0 || null || undefined || undefined;
// &&
const result3 = 9 && 0 && null && undefined && 4;
const result4 = 9 && 2;

console.log(result3); // trả về giá trị falsy đầu tiên: 0
console.log(result4);

// string:
const x = 3;
const y = "4";
console.log(x - y);
console.log(typeof (x - y));
//
const str1 = "hello world";
console.log(str1.length);
const str2 = "hiiii";
// backtick ``
console.log(`${str1} xin chào các bạn ${str2}`);

// if else switch case
// for: start - end
for (let i = 1; i <= 5; i++) {
  console.log(i + " ");
}

// built-in: alert, documment.write(), console.log():

// do-while: validate, menu chức năng
// while:

// continue (!=)

// == - ===

const l1 = 4;
const l2 = "4";
console.log(l1 == l2); // check value
console.log(l1 === l2); // check ref

// Nullish colescing ??: null undefined (gần giống ||)
const result5 = 0 || null || undefined || 4;
let name;
console.log(name ?? "Chưa lấy được dữ liệu người dùng");

console.log(result5);

// null - undefined
// Array:
// In C: data type: [- - - -]
let arr = [3, 9, 8, 3, 2, 1];
// Index: start: 0 -> end: size - 1

let sum = 0;
for (let i = 0; i < arr.length - 1; i++) {
  sum += arr[i];
  // sum += i;
}
console.log(sum);
// -> i++ - ++i
// for - in: index and for - of: ele
for (let index in arr) {
  console.log(index); //
}

for (let ele of arr) {
  console.log(ele);
}

// forEach((value,index)=>{}):
arr.forEach((value, index) => {
  console.log(index);
});

// map =>

// pass by value: map() - pass by reference

// sort:
arr.sort();
console.log(arr);
// reduce: tổng, tích
// const reducedValue = array.reduce((prev, next, index, array) => {...}, initialValue);

const resultSum = arr.reduce((prev, currenValue) => {
  return prev + currenValue;
}, 0);
console.log(resultSum);

// find: trả về phần tử đầu tiên thỏa mãn điều kiện
let findNumber = arr.find((ele) => ele > 5);
console.log(findNumber); // undefined nếu không tìm thấy phần tử.

// findIndex: trả về index phần tử đầu tiên thỏa mãn điều kiện, nếu k tìm thấy trả về -1
let findIndex = arr.findIndex((ele) => ele > 10);
console.log(findIndex);

// splice: start: number, deleteCount?: number, items: add element
arr.splice(1, 2, 2, 3, 4, 5, 6); // index start:
console.log(arr + " After delete");
// push
// findIndex + splice: để xóa phần tử trong array

// Input 1 số và nếu số đấy tồn tại trong array thì xóa nó đi
// [1, 2, 3, 3, -> 8, 9]
// Input: 8

// [1, 2, 3, 3, 9]
let index = arr.findIndex((ele) => ele === 8);
if (index === -1) {
  alert("Not found");
} else {
  arr.splice(index, 1);
  console.log(arr);
}
// Hiển thị alert nếu số không có trong array

// Filter: lọc -> tạo ra 1 array mới -> phải thỏa mãn điều kiện gì đấy
// Hiển thị ra các phần tử = 3
let arrFilter = arr.filter((ele) => ele === 3);
console.log(arrFilter);
// Apple, Sony, Samsung, Oppo

// Ap -> Apple : startsWith
let smartphone = ["Apple", "Sony", "Samsung", "Oppo"];
let userInput = "ap";
let resultPhone = smartphone.filter((ele) =>
  ele.toLowerCase().startsWith(userInput.toLowerCase())
);
console.log(resultPhone);

// CRUD:
// C: push
// R: forEach
// U: findIndex -> arr[index] = "..."
// D: findIndex + splice

// setTimeout: sau 1 khoảng thời gian, function sẽ được gọi , setInterval: 1 giây gọi 1 lần (đồng hồ đếm ngược)

setTimeout(() => {
  // alert("Xin chào");
}, 3000);

// Đồng hồ đếm ngược:
// 1 phút -> 0s -> nếu hết thời gian sẽ hiển thị alert
//setInterval(() => {
//console.log("X");
//}, 1000);

let timer = 5;
const resultTime = setInterval(() => {
  //console.log(timer);
  //if (timer === 0) {
  //  alert("Het gio");
  //  clearInterval(resultTime); // break;
  //} else {
  //  timer--;
  //}
}, 1000);

// Object:
// name, age, address
class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  // toString:
  toString() {
    return this.name + this.age + this.address;
  }
}

const person1 = new Person("Ken", "20", "abcxyz");
console.log(person1);

// DOM: Document object model
// 1. Lấy dữ liệu ô input
// 2. Gán event -> click button
// 3. Xử lý dữ liệu

// 4. Thay đổi CSS

// Ví dụ: hiển thị chữ màu đỏ
// B1: Lấy phần tử DOM:
const title = document.querySelectorAll(".title");

const titleId = document.querySelector("#titleId");
// getElementById - getElementByClassName - getElementByTagName
// querySelectorAll

// console.dir()
console.log(title);
title.forEach((value) => {
  value.style.color = "red";
});
// title.style.color = "red";

// Event: onclick
//const btn = document.querySelector("#btn");
//btn.addEventListener("click", () => {
//  alert("Xin chào");
// });

// style.display ="none" -> biến mất
// style.display ="block"
const listId = document.getElementById("listId");
const btn = document.querySelector("#btn");

let isDisplayed = true;
btn.addEventListener("click", () => {
  if (isDisplayed) {
    //isDisplayed = false;
    listId.style.display = "none";
  } else {
    //isDisplayed = true;
    listId.style.display = "block";
  }
  isDisplayed = !isDisplayed;
});
// Thay đổi nội dung 1 thẻ trong HTML: innerHtml
titleId.innerHTML = "<div> Xin chào</div>";

// oninput
const userName = document.querySelector("#userName");
userName.addEventListener("input", () => {
  console.log(userName.value);
});

const form = document.querySelector("#form");
// form Default: reset page
form.addEventListener("submit", (event) => {
  event.preventDefault(); // ko reload
  console.log("AAAA");
  console.log(userName.value); //
  // if (userName.value.length < 8) console.log("Error");
});
// Node JS - React JS
// [MySql] - [Mongo DB]

// to do list:
// back-end: express js
