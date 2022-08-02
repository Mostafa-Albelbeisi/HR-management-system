
let counter = 900;
const employe0 = {
    ID:"",
    fullName: "Ghazi Samer",
    department:"Administration",
    level:"Senior",
    putId: function(){
        this.ID = ++counter;
    },
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      },
    print :function(){
        console.log("Employee name:" + this.firstName);
        console.log("Employee salary:" + this.salary);
       }
       

};
var ghaziName_Salary = employe0.salary(1500, 2000);
 

const employe1 = {
    ID:"",
    fullName: "Lana Ali",
    department:"Finance	",
    level:"Senior",
    putId: function(){
        this.ID = ++counter;
    },
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      },
    print :function(){
        console.log("Employee name:" + this.firstName);
        console.log("Employee salary:" + this.salary);
       }
       

};
var lanaName_Salary = employe1.salary(1500, 2000);

const employe2 = {
    ID:"",
    fullName: "Tamara Ayoub",
    department:"Marketing",
    level:"Senior",
    putId: function(){
        this.ID = ++counter;
    },
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      },
    print :function(){
        console.log("Employee name:" + this.firstName);
        console.log("Employee salary:" + this.salary);
       }
       

};
var tamaraName_Salary = employe2.salary(1500, 2000);

const employe3 = {
    ID:"",
    fullName: "Safi Walid",
    department:"Administration",
    level:"Mid-Senior",
    putId: function(){
        this.ID = ++counter;
    },
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      },
    print :function(){
        console.log("Employee name:" + this.firstName);
        console.log("Employee salary:" + this.salary);
       }
       

};
var safiName_Salary = employe3.salary(1000, 1500);

const employe4 = {
    ID:"",
    fullName: "Omar Zaid",
    department:"Development",
    level:"Senior",
    putId: function(){
        this.ID = ++counter;
    },
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      },
    print :function(){
        console.log("Employee name:" + this.firstName);
        console.log("Employee salary:" + this.salary);
       }
       

};
var omarName_Salary = employe4.salary(1500, 2000);

const employe5 = {
    ID:"",
    fullName: "Rana Saleh",
    department:"Development",
    level:"Junior",
    putId: function(){
        this.ID = ++counter;
    },
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      },
    print :function(){
        console.log("Employee name:" + this.firstName);
        console.log("Employee salary:" + this.salary);
       }
       

};
var ranaName_Salary = employe5.salary(500, 1000);

const employe6 = {
    ID:"",
    fullName: "Hadi Ahmad",
    department:"Finance",
    level:"Mid-Senior",
    putId: function(){
        this.ID = ++counter;
    },
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      },
    print :function(){
        console.log("Employee name:" + this.firstName);
        console.log("Employee salary:" + this.salary);
       }
};
var hadiName_Salary = employe6.salary(1000, 1500);








const allSalary =[ghaziName_Salary, lanaName_Salary, tamaraName_Salary, safiName_Salary, omarName_Salary, ranaName_Salary, hadiName_Salary];
const allEmployee =[employe0, employe1, employe2, employe3, employe4, employe5, employe6];

for(let i=0 ; i<allEmployee.length; i++){
    allEmployee[i].putId();
    allEmployee[i].salary();
    console.log(`Employee name: ${allEmployee[i].fullName} \nEmployee salary: ${allSalary[i]}\n\n`)    
    }


