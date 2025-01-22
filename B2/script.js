const formId = document.getElementById("formId");
const tbody = document.getElementById("tbody");
let students = [];
let id = 1;
let studentList = [];

formId.innerHTML +=
  "<h2>Thông tin học sinh</h2>" +
  "<form id='form'>" +
  "<label for='fullname'>Full name:</label>" +
  "<input id='fullname' type='text' placeholder='hay nhap day du ho ten'><br>" +
  "<p id='fullnameErr'>Fullname can't be blank</p>" +
  "<label for='email'>Email:</label>" +
  "<input id='email' type='text' placeholder='hay nhap email'><br>" +
  "<p id='emailErr'>Email must contain a '@'</p>" +
  "<label for='phoneNum'>Phone Number:</label>" +
  "<input id='phoneNum' type='text' placeholder='hay nhap so dien thoai'><br>" +
  "<p id='phoneNumErr'>Phone number must start with +84 </p>" +
  "<label for='hometown'>Hometown:</label>" +
  "<input id='hometown' type='text' placeholder='hay nhap que quan'><br>" +
  "<p id='hometownErr'>Hometown can't be blank</p>" +
  "<p style='margin:0px 0px'>Gender:</p>" +
  "<lable for='genderMale'>Nam</lable><input type='radio' value='Male' name='gender' checked> <br>" +
  "<lable for='genderFemale'>Nu</lable><input type='radio' value='Female' name='gender'><br>" +
  "<button id='submitBtn'>Save</button>" +
  "</form>";

formId.style.display = "inline-block";
formId.style.padding = "1em";
formId.style.border = "0.2em solid black";
class Student {
  constructor(fullname, email, phoneNum, hometown, gender) {
    this.fullname = fullname;
    this.email = email;
    this.phoneNum = phoneNum;
    this.hometown = hometown;
    this.gender = gender;
    this.id = id++;
  }
}
// Lấy được value input -> submit form
// B1: Lấy phần tử DOM -> B2: .value -> lấy ra được value
// B2: event: submit(event) -> event.preventDefault() -> alert("Thêm mới thành công!!!")-> event.target.reset()

// console.log(genders, " aaa");
// radio -> getElementByName -> 1 array 2 input -> for -> checked

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phoneNum = document.getElementById("phoneNum");
const hometown = document.getElementById("hometown");
const genders = document.getElementsByName("gender");
const form = document.getElementById("form");
const fullnameErr = document.getElementById("fullnameErr");
const emailErr = document.getElementById("emailErr");
const hometownErr = document.getElementById("hometownErr");
const phoneNumErr = document.getElementById("phoneNumErr");
const submitBtn = document.getElementById("submitBtn");

let gender = "Male";

for (let i = 0; i < genders.length; i++) {
  genders[i].addEventListener("change", () => {
    for (let i = 0; i < genders.length; i++) {
      if (genders[i].checked) {
        gender = genders[i].value;
      }
    }
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  studentHolder = JSON.parse(localStorage.getItem("editStudent")) || {};
  if (!studentHolder.id) {
    let isValidated = true;
    if (fullname.value.length === 0) {
      fullnameErr.style.display = "block";
      isValidated = false;
    } else {
      fullnameErr.style.display = "none";
    }

    if (hometown.value.length === 0) {
      hometownErr.style.display = "block";
      isValidated = false;
    } else {
      hometownErr.style.display = "none";
    }

    if (!email.value.includes("@") || email.value.length === 0) {
      emailErr.style.display = "block";
      isValidated = false;
    } else {
      emailErr.style.display = "none";
    }

    if (!phoneNum.value.startsWith("+84") || phoneNum.value.length === 0) {
      phoneNumErr.style.display = "block";
      isValidated = false;
    } else {
      phoneNumErr.style.display = "none";
    }

    if (isValidated) {
      let student = new Student(
        fullname.value,
        email.value,
        phoneNum.value,
        hometown.value,
        gender
      );
      // fullname.value.length === 0 -> textcontent = " "
      students.push(student);
      localStorage.setItem("students", JSON.stringify(students));
    }
  } else {
    studentList = JSON.parse(localStorage.getItem("students"));
    // studentHolder = studentList.find((obj) => obj.id === studentHolder.id);
    const studentIndex = studentList.findIndex(
      (obj) => obj.id === studentHolder.id
    );

    studentList[studentIndex].fullname = fullname.value;
    studentList[studentIndex].email = email.value;
    studentList[studentIndex].phoneNum = phoneNum.value;
    studentList[studentIndex].hometown = hometown.value;
    localStorage.setItem("students", JSON.stringify(studentList));
    localStorage.removeItem("editStudent");
  }
  alert("Added successfully");
  displayStudents();
  event.target.reset();
});

// Fullname -> dưới sẽ tạo 1 thẻ <p></p> -> none
// hiển thị lỗi lên thẻ <p></p> -> display: block
// debounce:

students.push(
  new Student(
    "Alice Johnson",
    "alice.johnson@example.com",
    "123-456-7890",
    "New York",
    "Female"
  )
);
students.push(
  new Student(
    "Bob Smith",
    "bob.smith@example.com",
    "987-654-3210",
    "Los Angeles",
    "Male"
  )
);
students.push(
  new Student(
    "Charlie Brown",
    "charlie.brown@example.com",
    "555-123-4567",
    "Chicago",
    "Male"
  )
);
students.push(
  new Student(
    "Diana Prince",
    "diana.prince@example.com",
    "555-987-6543",
    "Themyscira",
    "Female"
  )
);
students.push(
  new Student(
    "Eve Adams",
    "eve.adams@example.com",
    "555-678-1234",
    "San Francisco",
    "Female"
  )
);

localStorage.setItem("students", JSON.stringify(students));
displayStudents();
function displayStudents() {
  studentList = JSON.parse(localStorage.getItem("students")) || [];
  tbody.innerHTML = "";
  for (let i = 0; i < studentList.length; i++) {
    tbody.innerHTML += `
      <tr>
        <td>${studentList[i].id}</td>
        <td>${studentList[i].fullname}</td>
        <td>${studentList[i].email}</td>
        <td>${studentList[i].phoneNum}</td>
        <td>${studentList[i].hometown}</td>
        <td>${studentList[i].gender}</td>
        <td>
          <button id="edit" onclick="editStudent(${studentList[i].id})">Edit</button>
          <button id="delete" onclick="removeStudent(${studentList[i].id})">Delete</button>
        </td>
      </tr>`;
  }
}
// Delete:
// splice + findIndex
// const isLargeNumber = (element) => element > 13;
// setLocal, display, alert
// https://fastui.vercel.app/fui-toast-javascript/
function removeStudent(id) {
  const studentIndex = students.findIndex((obj) => obj.id === id);
  students.splice(studentIndex, 1);
  FuiToast.success("Student has been removed.");

  localStorage.setItem("students", JSON.stringify(students));
  displayStudents();
}

// const fullname = document.getElementById("fullname");
// const email = document.getElementById("email");
// const phoneNum = document.getElementById("phoneNum");
// const hometown = document.getElementById("hometown");
// const genders = document.getElementsByName("gender");
// Edit student:
function editStudent(id) {
  studentList = JSON.parse(localStorage.getItem("students")) || [];
  // const studentIndex = studentList.findIndex((obj) => obj.id === id);
  const student = studentList.find((obj) => obj.id === id);
  fullname.value = student.fullname;
  email.value = student.email;
  phoneNum.value = student.phoneNum;
  hometown.value = student.hometown;
  // genders[i].checked: for loop:
  for (let i = 0; i < genders.length; i++) {
    if (student.gender === genders[i].value) {
      genders[i].checked = true;
      break;
    }
  }
  localStorage.setItem("editStudent", JSON.stringify(student));
}
