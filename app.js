
let counterID = 999;
const employe0 = {
    ID: 0,
    fullName: "Ghazi Samer",
    department:"Administration",
    level:"Senior",
    image: "",
    putId: function(counter){
        this.ID = counter +1;
        ++counterID;
    },
    salary: function (min, max) {
       return (Math.floor(Math.random() * (max - min) ) + min) * 0.75;
      },
    print :function(){
        console.log("Employee name:" + this.firstName);
        console.log("Employee salary:" + this.salary);
       }
       

};

employe0.putId(counterID);
// console.log("    ---" +  employe0.ID) 
var ghaziName_Salary = employe0.salary(1500, 2000);
 

const employe1 = {
    ID: 0,
    fullName: "Lana Ali",
    department:"Finance	",
    level:"Senior",
    image:"" ,
    putId: function(counter){
        this.ID = counter +1;
        ++counterID;
    },
    salary: function (min, max) {
        return (Math.floor(Math.random() * (max - min) ) + min) * 0.75;
      },
    print :function(){
        console.log("Employee name:" + this.firstName);
        console.log("Employee salary:" + this.salary);
       }
       

};
employe1.putId(counterID);
// console.log("    ---" +  employe1.ID) 
var lanaName_Salary = employe1.salary(1500, 2000);

const employe2 = {
    ID: 0,
    fullName: "Tamara Ayoub",
    department:"Marketing",
    level:"Senior",
    image:"" ,
    putId: function(counter){
        this.ID = counter +1;
        ++counterID;
    },
    salary: function (min, max) {
        return (Math.floor(Math.random() * (max - min) ) + min) * 0.75;
      },
    print :function(){
        console.log("Employee name:" + this.firstName);
        console.log("Employee salary:" + this.salary);
       }
       

};
employe2.putId(counterID);
// console.log("    ---" +  employe2.ID) 
var tamaraName_Salary = employe2.salary(1500, 2000);

const employe3 = {
    ID: 0,
    fullName: "Safi Walid",
    department:"Administration",
    level:"Mid-Senior",
    image:"" ,
    putId: function(counter){
        this.ID = counter +1;
        ++counterID;
    },
    salary: function (min, max) {
        return (Math.floor(Math.random() * (max - min) ) + min) * 0.75;
      },
    print :function(){
        console.log("Employee name:" + this.firstName);
        console.log("Employee salary:" + this.salary);
       }
       

};
employe3.putId(counterID);
// console.log("    ---" +  employe3.ID) 
var safiName_Salary = employe3.salary(1000, 1500);

const employe4 = {
    ID: 0,
    fullName: "Omar Zaid",
    department:"Development",
    level:"Senior",
    image:"" ,
    putId: function(counter){
        this.ID = counter +1;
        ++counterID;
    },
    salary: function (min, max) {
        return (Math.floor(Math.random() * (max - min) ) + min) * 0.75;
      },
    print :function(){
        console.log("Employee name:" + this.firstName);
        console.log("Employee salary:" + this.salary);
       }
       

};
employe4.putId(counterID);
// console.log("    ---" +  employe4.ID) 
var omarName_Salary = employe4.salary(1500, 2000);

const employe5 = {
    ID: 0,
    fullName: "Rana Saleh",
    department:"Development",
    level:"Junior",
    image:"" ,
    putId: function(counter){
        this.ID = counter +1;
        ++counterID;
    },
    salary: function (min, max) {
        return (Math.floor(Math.random() * (max - min) ) + min) * 0.75;
      },
    print :function(){
        console.log("Employee name:" + this.firstName);
        console.log("Employee salary:" + this.salary);
       }
       

};
employe5.putId(counterID);
// console.log("    ---" +  employe5.ID) 
var ranaName_Salary = employe5.salary(500, 1000);

const employe6 = {
    ID: 0,
    fullName: "Hadi Ahmad",
    department:"Finance",
    level:"Mid-Senior",
    image:"" ,
    putId: function(counter){
        this.ID = counter +1;
        ++counterID;
    },
    salary: function (min, max) {
        return (Math.floor(Math.random() * (max - min) ) + min) * 0.75;
      },
    print :function(){
        console.log("Employee name:" + this.firstName);
        console.log("Employee salary:" + this.salary);
        console.log("Employee salary:" + this.ID);

        
       }
};
var allEmployeId6 = employe6.putId(counterID);
// console.log("    ---" +  employe6.ID) 
var hadiName_Salary = employe6.salary(1000, 1500);


const allSalary = [ghaziName_Salary, lanaName_Salary, tamaraName_Salary, safiName_Salary, omarName_Salary, ranaName_Salary, hadiName_Salary];
const allEmployee = [employe0, employe1, employe2, employe3, employe4, employe5, employe6];

for(let i=0 ; i<allEmployee.length; i++){

    console.log(`Employee name: ${allEmployee[i].fullName} \nEmployee salary: ${allSalary[i]}`)    
    }


