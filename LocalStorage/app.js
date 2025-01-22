//  <!-- LocalStorage: -->

//     <!-- set: mutator/ get: accessor -->

//     <!-- token: -->
// "key: string, value: string"
// JSON.stringfy() JSON.parse()
//localStorage.setItem("number", "4");
//localStorage.setItem("number2", "45");

// let number = localStorage.getItem("number") || 0;
// const content = document.getElementById("number");
// content.innerHTML = number;
// content.innerHTML = localStorage.getItem("number");

// delete
// clear: delete all

// localStorage.clear();
// removeItem để xóa 1 key:
// localStorage.removeItem("number");

// const addButton = document.getElementById("add");
// addButton.addEventListener("click", () => {
//   number = parseInt(number) + 1;
//   localStorage.setItem("number", number.toString());
//   content.innerHTML = localStorage.getItem("number");
// });

// const subtractButton = document.getElementById("subtract");

// subtractButton.addEventListener("click", () => {
//   number = parseInt(number) - 1;
//   localStorage.setItem("number", number.toString());
//   content.innerHTML = localStorage.getItem("number");
// });

// const student = {
//   name: "John",
//   age: 20,
// };
//localStorage.setItem("student", JSON.stringify(student)); // object, array =>

// const studentFromLocalStorage = JSON.parse(localStorage.getItem("student"));

// 3 thằng học sinh (name, age) -> thêm 1 học sinh mới
// hiển thị ra danh sách học sinh từ localStorage
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const students = [
  new Student("John", "20"),
  new Student("Kyle", "19"),
  new Student("May", "22"),
];

// localStorage.setItem("students", JSON.stringify(students));
const studentList = document.getElementById("content");

function displayStudentList() {
  let localStudents = JSON.parse(localStorage.getItem("students")) || [];
  studentList.innerHTML = "";
  for (each of localStudents) {
    studentList.innerHTML += `<tr> ${each.name} </tr>
                                <tr> ${each.age}</tr>`;
  }
}
displayStudentList();

const addStudentBtn = document.getElementById("addStudent");
addStudentBtn.addEventListener("click", () => {
  students.push(new Student("Paul", "25"));
  localStorage.setItem("students", JSON.stringify(students));
  displayStudentList();
});
