// // student 1 object
// let student1 = {
//     firstName: "Emmanuel",
//     lastName: "Ogbonnaya",
//     age: 45,
//     CGPA: undefined,
//     isGraduated: false,
// }

// // student 2 object
// let student2 = {
//     firstName: "Adesoye",
//     lastName: "Abajo",
//     age: 60,
//     CGPA: 3.5,
//     isGraduated: true,
// }

// // student 3 object
// let student3 = {
//     firstName: "Prince",
//     lastName: "junior",
//     age: 25,
//     CGPA: 2.2,
//     isGraduated: false,
// }

// // student1.wife = "Jenifer";
// console.log(student1);


// let students = [
//     {
//         firstName: "Emmanuel",
//         lastName: "Ogbonnaya",
//         age: 45,
//         CGPA: undefined,
//         isGraduated: false,
//     },
//     {
//         firstName: "Adesoye",
//         lastName: "Abajo",
//         age: 60,
//         CGPA: 3.5,
//         isGraduated: true,
//     },
//     {
//         firstName: "Prince",
//         lastName: "junior",
//         age: 25,
//         CGPA: 2.2,
//         isGraduated: false,
//     } 
// ]
// // console.log(students);

let nums = [1,3,5,7,8,9,11,30,23,11,23,34,0,4,5,6,7,8,9,10];

const numsList = document.getElementById("num-list");

// let index = 0;
// while (index < nums.length) {
//     const numLi= document.createElement("li");
//     numLi.textContent = nums[index];

//     numsList.appendChild(numLi);

//     index += 1;
// }

// for (index = 0; index < nums.length; index++) {
//     const numLi = document.createElement("li");
//     numLi.textContent = nums[index];

//     numsList.appendChild(numLi);
// }

// for (num of nums) {
//     const numLi = document.createElement("li");
//     numLi.textContent = num;

//     numsList.appendChild(numLi);
// }

// function addArrayNums() {
//     let total = 0;
//     for(num of nums) {
//         total += num;
//     }

//     const totalHeading = document.getElementByIdClassName("total")[0];
//     return (totalHeading.textContent = total);     
// }


// const addButton = document.getElementById("add-btn");

// addButton.addEventListener("click",addArrayNums);
function addTwoNums(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return console.log("invalid number");
    }
    let total = num1 + num2;

    return total;
}

console.log(addTwoNums(10, 5));




