//Transforme as funções declarativas abaixo em Arrow Functions

// const upperName = function (name) {
//     return name.toUpperCase();
//   };

const upperName = (name)=> name.toUpperCase()
console.log(upperName('roberta'))



// function myFunction(p1, p2) {
//     return p1 * p2;
// }

const produto = (p1,p2)=> p1*p2
console.log(produto(2,3))



// function toCelsius(fahrenheit) {
//     return (5 / 9) * (fahrenheit - 32);
// }

const convToCelsius = (fahrenheit) => (5/9) * (fahrenheit -32)
console.log(convToCelsius(100))