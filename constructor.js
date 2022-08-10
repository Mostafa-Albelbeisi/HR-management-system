function salary(min, max) {
  return (Math.floor(Math.random() * (max - min)) + min) * 0.75;
}
let ID = 999;
const arr = [];
function AllEmploye(EmployeeName, Department, EmployeeSalary) {
  this.EmployeeName = EmployeeName;
  this.Department = Department;
  this.salary = EmployeeSalary;
  arr.push(this);

  AllEmploye.prototype.printEmployee = function () {
    // console.log(`Employee name: ${this.EmployeeName} : Department: ${this.Department} : Salary ${this.EmployeeSalary}JD`)
    document.write(
      `<p> Employee name: ${this.EmployeeName} <br> Department: ${this.Department} <br> Salary: ${this.salary}JD</p>`
    );
  };
} //end the employe function

// const employee0 = new AllEmploye(
//   "Ghazi Samer",
//   "Administration",
//   salary(1500, 2000)
// );
// const employee1 = new AllEmploye(
//   "Lana Ali",
//   "Finance",

//   salary(1500, 2000)
// );
// const employee2 = new AllEmploye(
//   "Tamara Ayoub",
//   "Administration",
//   salary(1500, 2000)
// );
// const employee3 = new AllEmploye(
//   "Safi Walid",
//   "Development",
//   salary(1000, 1500)
// );
// const employee4 = new AllEmploye(
//   "Rana Saleh",
//   "Development	",
//   salary(500, 1000)
// );
// const employee5 = new AllEmploye("Hadi Ahmad", "Finance", salary(1000, 1500));

employee0.printEmployee();
employee1.printEmployee();
employee2.printEmployee();
employee3.printEmployee();
employee4.printEmployee();
employee5.printEmployee();

console.log(arr);
// console.log(employee0.EmployeeName);
