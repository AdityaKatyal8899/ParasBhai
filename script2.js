//Task 1
// const toggle = document.getElementById('toggle')
// const body = document.querySelector('body')

// toggle.addEventListener('click', () =>{
//     if(body.classList.contains("light-mode")){
//         body.classList.remove("light-mode")
//         body.classList.add("dark-mode")
//     }

//     else{
//         body.classList.remove("dark-mode")
//         body.classList.add("light-mode")
//     }
// })

// let n = Number(prompt("Enter size value:"))
// let arr = [];

// for(let i = 0; i<n; i++){
//     arr[i] = Number(prompt(`Enter ${i}th value:`))
// }

// console.log(`Whole array formed: ${arr}`);

// function sumThemUp(a, b){
//     return a + b
// }


let sumUp  = (a, b) => a+b;
console.log(sumUp(6, 5))