// console.log("Hello word");
// console.error("This is a fucken error");
// console.warn ("Fucken Warning");

// const name = "Gyan";
// const age = 46;
// console.log("My name is" + name + My age is + age);


// const numbers = new Array(1,2,3,4,5);
// const Fruits = ["Apples","Pawpaw", "orange"];
// Fruits[3]= "grapes";
// Fruits.push('Mangoes');
// console.log(numbers);
// console.log(Fruits);


// const person ={
//     firstname: "Prince Gyan",
//     Lastname: "Baidoo",
//     age: 45,
//     hobbies: ["music", "Movies","Games"],
//     address:{
//         street: "Tema",
//         State: "ghana"

//     }
// }

// person.email ="baidooprince48@gmail.com"



// console.log(person);







const todos = [
    {
        id: 1,
        text: "Take out trash",
        isComplete: true
    },

    {
        id: 2,
        text: "Meeting with boss",
        isComplete: true
    },

    {
        id: 3,
        text: "Dentist appt",
        isComplete: false
    },
] 

// console.log(todos[1].text);

//sending it to a server
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

//for loop
// for(let i=0; i<10; i++) {

// console.
// }

// const x = 10;

// const color = x> 10 ? "red" : "blue";

// console.log(color);

// switch(color) {
//     case "red":
//         console.log("color is red");
//         break;

//         case "blue":
//             console.log("color is blue");
//             break;
        
//         default:
//             console.log("color is Mot red or blue");
//             break;
// }

//function
// function addNums(num1, num2) {
// console.log(num1 + num2)
// return num1 + num2
// }

// console.log (addNums(67,9));


//constructor function
// function Person(firstname, lastname,dob) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.dob = new Date (dob);
//     this.getBirthYear = function(){
//         return this.dob.getFullYear();
//     }

// this.getFullName = function(){
//     return `${this.firstname} ${this.lastname}`
// }

// }


// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstname} ${this.lastname}`
// }

//instantiate object
// const person1 = new Person("Prince", "Gyan", "8-9-7438");
// const person2 = new Person("Baidoo", "Gyan", "21-8-7478");
// console.log(person1.getBirthYear(), person2.getBirthYear());
// console.log(person1.getFullName(), person2.getFullName());


// console.log(window);

//Single element
// console.log(document.getElementById("my-form"));
// console.log(document.querySelector(".container"));

// const ul = document.querySelector(".items");

// ul.remove();

// ul.lastElementChild.remove();

// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Brad";
// ul.children[2].innerText = "Prince";

// const btn = document.querySelector(".btn");
// btn.style.background = "red";
// btn.addEventListener("mouseout  ", (e) => {
//     e.preventDefault();
    // console.log("click");
    // console.log(e.target);
    // document.querySelector("#my-form").style.background = "#ccc";
    // document.querySelector("body").classList.add("bg-dark");
    // document.querySelector(".items")
    // .lastElementChild.innerHTML = "<h1>Hello</h1>";

// });





const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);


function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === "" || emailInput.value === ""){
        msg.classList.add("error");
        msg.innerHTML = "Please Enter all fields"; 
    
         setTimeout(() => msg.remove(),3000);
    } 
       else{
           const li = document.createElement("li");
           li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}` ));
        
            userList.appendChild(li); 
       

            // clear fields
            nameInput.value = "";
            emailInput.value = "";
       }
    } 
    
    
    