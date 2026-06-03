// console.log("Hi!") //Print statement
// console.log(5+5)


//Variables
//Variables in JavaScript are the storage containers to store specific values. 

//Defining varaibles in JS: 
//Mutable, i.e. Can be changed.    //Immutable, i.e Can't be changed. 

//Loops in JS
//Loops in JS are used to run a specific task n no. of times.

//Types: 1. for Loop
for(let i = 1; i <= 50; i++){
    console.log(i)
}

//2. while loop
let toffee = 10;
while (toffee > 0){     //toffee = 10 => 10 > 0
    console.log(toffee)     //Print toffee ki value
    toffee --;      //toffee ki value mein se ek minus krdia => toffee = 10 - 1 = 9
}

//3. do-while  
// do {
//    console.log("Hello") 
//    a--;
// } while(a > 0);


//if-else
const temperature = 15;
if(temperature <= 40){
    console.log('Set ac to 20');
} else if (temperature <= 30){
    console.log('Set ac to 25');
} else{
    console.log('AC off')
}


const a = 5;    //Integer
const b = 5.0;  //Float
const c = "5";  //String

if(a === c){
    console.log('True')
}else{
    console.log('False')
}

//Operators in JS
//Types:

//1: Arithemetic

// console.log(4+5)    //8
// console.log(3**2)   //9

//2. Assignment Operator

let y = 5;

y = y + 1
y += 1
y -= 1
y /= 1
y *= 1

//3. Comparsion Operator
// ==, <=, >=, ===, != (not equals to), <, >, !==

//4. Logical Operators
// &&, ||, !