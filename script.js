// // console.log("Hi!") //Print statement
// // console.log(5+5)


// //Variables
// //Variables in JavaScript are the storage containers to store specific values. 

// //Defining varaibles in JS: 
// //Mutable, i.e. Can be changed.    //Immutable, i.e Can't be changed. 

// //Loops in JS
// //Loops in JS are used to run a specific task n no. of times.

// //Types: 1. for Loop
// for(let i = 1; i <= 50; i++){
//     console.log(i)
// }

// //2. while loop
// let toffee = 10;
// while (toffee > 0){     //toffee = 10 => 10 > 0
//     console.log(toffee)     //Print toffee ki value
//     toffee --;      //toffee ki value mein se ek minus krdia => toffee = 10 - 1 = 9
// }

// //3. do-while  
// // do {
// //    console.log("Hello") 
// //    a--;
// // } while(a > 0);


// //if-else
// const temperature = 15;
// if(temperature <= 40){
//     console.log('Set ac to 20');
// } else if (temperature <= 30){
//     console.log('Set ac to 25');
// } else{
//     console.log('AC off')
// }


// const a = 5;    //Integer
// const b = 5.0;  //Float
// const c = "5";  //String

// if(a === c){
//     console.log('True')
// }else{
//     console.log('False')
// }

// //Operators in JS
// //Types:

// //1: Arithemetic

// // console.log(4+5)    //8
// // console.log(3**2)   //9

// //2. Assignment Operator

// let y = 5;

// y = y + 1
// y += 1
// y -= 1
// y /= 1
// y *= 1

// //3. Comparsion Operator
// // ==, <=, >=, ===, != (not equals to), <, >, !==

// //4. Logical Operators
// // &&, ||, !

// // Type Casting in JS
// // In JS, changing a value from one data type to another is refrred to as Type Casting. 
// // Data type of a value describes of how a value is represented. For example: Integer, Float, Strings, etc.

// //Ex: Converting a Number to String, Intger value to Float Value, etc.

// //Types of Type Casting: 1. Explicit Type Casting, 2. Implicit Type Casting

// const num = 123
// console.log(num)
// const strNum = String(num)

// if (num === strNum){
//     console.log('True')
// }
// else{
//     console.log("False")
// }


//Input Methods in JS

// // Method 1: Console Inputs
// const a = Number(prompt('Laa re chikne de: '))
// const b = Number(prompt('Laa ek baar aur de: '))
// console.log(a+b)

//Method 2: HTML Form inputs

// const htmlVal = document.getElementById('test').value
// console.log(htmlVal)


// Arrays in JavaScript:  
// let n = Number(prompt("Enter size value:"))
// let arr = [];

// for(let i = 0; i<n; i++){
//     arr[i] = Number(prompt(`Enter ${i}th value:`))
// }

// console.log(`Whole array formed: ${arr}`);

// const name = 23
//String methods
// console.log("Hello " + name + " NamasteJi")
// console.log(`Hello ${name} Namasteji`)



// const num = Number(prompt("Enter a value:"))

// if(num % 2 === 0){
//     console.log('true')
// }

// else{
//     console.log('false')
// }


// const val = Number(prompt("Enter a value:"))

// for(let i = 1; i <= 10; i++){
//     console.log(val*i)
// }


// const age = Number(prompt("Enter a value:"))
// if(age <= 18){
//     console.log('False')
// }

// else{
//     console.log('True')
// }


// const val = Number(prompt("Enter a value:"))

// if(val >= 5){
//  for(let i = 1; i <= 5; i++){
//     console.log(val*i)
//     }   
// }

// else{
//     for(let i = 1; i <= 10; i++){
//     console.log(val*i)
//     }
// }