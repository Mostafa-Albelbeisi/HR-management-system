// 'use strict';
// const body = document.getElementsByTagName('body');
// console.log(document);
// let h1El = document.getElementsByTagName("h1");
// console.log(h1El[0]);

// h1El[0].textContent = "Hello world";

// let pEl = document.getElementsByTagName("p");
// console.log(pEl);
// pEl[1].textContent = "Mostafa";

// const parEl = document.getElementById("par");
// console.log(parEl);
// parEl.textContent = "This is a paragraph with id";

// const divEl = document.getElementsByClassName("container");
// console.log(divEl)

// //style
// pEl[1].style.color = "red";

// // Element.style.property = "";
// h1El[0].style.backgroundColor = "blue";
// //another way to add elements
// let p = document.querySelectorAll("p");
// for (let i = 0; i < p.length; i++) {
//     p[i].classList.add("design");

// }
// // pEl[0].classList.add('design');
// // pEl[1].className = "design";//call style from css

// //creating Elements
// //3 steps to do it:
// //1- creatin element from js:
// const h2El = document.createElement('h2');
// //2. add text content or attributs
// h2El.textContent = "This is h2 elements";
// //appending it
// divEl[0].appendChild(h2El);
// console.log(h2El);

// const div = document.getElementById ('div');
// div.appendChild(h2El);

// //image
// //1.create elements

// const imgEl = document.createElement("img");
// //2. add text or attributes
// imgEl.src = "./Photos/Ghazi.jpg";
// imgEl.alt = "Coffe cup";
// //3.appending it
// div.appendChild(imgEl);

// //1. create "document.createElements"
// //2. add content/add attribute
// //3. append location--> appendChild


const body = document.getElementsByTagName("body");
const EmpArr = []; //defind array
function AllEmployee(img, fullName, id, department, level, salary) {
  this.img = img;
  this.fullName = fullName;
  this.id = id;
  this.department = department;
  this.level = level;
  this.salary = salary;
  EmpArr.push(this);
} //end AllEmployee const

//make text
const hel = document.createElement('h2');
hel.textContent = ("This is employee card");
hel.style.textAlign = "center";
body[0].appendChild(hel);


//now make const
AllEmployee.prototype.printEmployee = function () {
  const divEll = document.createElement("div");
  body[0].appendChild(divEll);



  //here adding the img
  const imgEll = document.createElement("img");
  imgEll.src = this.img;
  imgEll.alt = this.img;
  imgEll.style.width = "130px";
  // imgEll.style.justifyContent = "space-between";
  // imgEll.style.justifyItems = "center";
  // imgEll.style.display = "flex"

  //here adding the elements
  const pEll = document.createElement("p");
  pEll.textContent = `Full name: ${this.fullName} - ID ${this.id}`;
  const pEll2 = document.createElement("p");
  pEll2.textContent += ` Department: ${this.department} - Level: ${this.level}`;
  const pEll3 = document.createElement("p");
  pEll3.textContent += `Salary: ${this.salary}`;
  divEll.appendChild(pEll);
  divEll.appendChild(pEll2);
  divEll.appendChild(pEll3);

  const tbl = document.createElement("table");
  tbl.style.justifyItems = "center";
  tbl.style.justifyContent = "space-between";
  //   tbl.style.display = "flex";
  tbl.style.height = "100%";
  // tbl.style.position = "fixed";
  tbl.style.zIndex = "999";
  tbl.style.display = "flex";
  tbl.style.justifyContent = "space-between";
  tbl.style.alignItems = "center";
  tbl.style.padding = "10px 200px";
  const tBody = document.createElement("tbody");
  tBody.style.justifyItems = "center";
  tBody.style.padding = "10px 20px";
  tBody.style.justifyContent = "space-between";

  // creating all cells
  for (let i = 0; i < 1; i++) {
    // creates a table row
    const row = document.createElement("tr");
    row.style.justifyContent = "center";
    row.style.color = "balck";
    row.style.justifyItems = "center";
    row.style.boxSizing = "border-box";
    row.append(imgEll);

    for (let j = 0; j < 1; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row

      const cell = document.createElement("td");
      cell.append(pEll);
      cell.append(pEll2);
      cell.append(pEll3);
      cell.style.backgroundColor = "#477D57";
      cell.style.padding = "100px 200px";

      // const cellText = document.createTextNode(`cell in row ${this.fullName}, column ${j}`);
      // cell.appendChild(cellText);
      row.appendChild(cell);
    } //end for2

    // add the row to the end of the table body
    tBody.appendChild(row);
  } //end for1

  // put the <tbody> in the <table>
  tbl.appendChild(tBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
}; //end AllEmployee prototype

let employe00 = new AllEmployee(
  "./Photos/Ghazi.jpg",
  "Ghazi Samer",
  1000,
  "Administration",
  "senior",
  salary(1500, 2000)
); //end employee00
let employe01 = new AllEmployee(
  "./Photos/Lana.jpg",
  "Lana Ali",
  1001,
  "Finance",
  "senior",
  salary(1500, 2000)
); //end employee01
let employe02 = new AllEmployee(
  "./Photos/Tamara.jpg",
  "Tamara Ayoub",
  1002,
  "Marketing",
  "senior",
  salary(1500, 2000)
); //end employee02
let employe03 = new AllEmployee(
  "./Photos/Safi.jpg",
  "Safi Walid",
  1003,
  "Administration",
  "Mid-Senior",
  salary(1000, 1500)
); //end employee03
let employe04 = new AllEmployee(
  "./Photos/Omar.jpg",
  "Omar Zaid",
  1004,
  "Development",
  "senior",
  salary(1500, 2000)
); //end employee04
let employe05 = new AllEmployee(
  "./Photos/Rana.jpg",
  "Rana Saleh",
  1005,
  "Development",
  "Junior",
  salary(500, 1000)
); //end employee05
let employe06 = new AllEmployee(
  "./Photos/Hadi.jpg",
  "Hadi Ahmad",
  1006,
  "Finance",
  "Mid-Senior",
  salary(1000, 1500)
); //end employee06

employe00.printEmployee();
employe01.printEmployee();
employe02.printEmployee();
employe03.printEmployee();
employe04.printEmployee();
employe05.printEmployee();
employe06.printEmployee();

console.log(AllEmployee);
