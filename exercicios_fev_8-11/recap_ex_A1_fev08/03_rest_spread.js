 //Rest & Spread
 //Utilizando um operador clone o objeto c​lothes
 const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
};

const  clothesClone  = { ...clothes };
console.log(clothesClone)

//Novamente utilizando um operador, clone o objeto c​lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ants, shirts ​e​ socks
 const cloneClothes = { ...clothes, shoes:{colors:['yellow', 'purple']} }
 console.log(cloneClothes)
 
//Arrays e seus métodos
//A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
var numbers = [4, 9, 16, 25];
var sqrtNumbers = numbers.map(Math.sqrt)
console.log(numbers, sqrtNumbers)


//A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
var numbers = [65, 44, 12, 4];
var multDez = numbers.map((num)=>{ return num * 10 })
console.log(numbers, multDez)


//A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
var ages = [32, 33, 16, 40];
var filterMaior18 = ages.filter((arr)=>{ return arr >= 18 })
console.log(filterMaior18)


//A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
data = [
    {
        name: 'Butters',
        age: 3,
        type: 'dog',
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog',
    },
    
    {
        name: 'Red',
        age: 1,
        type: 'cat',
    },
    {
        name: 'Joey',
        age: 3,
        type: 'dog',
    },
];

var filterDog = data.filter((type)=> { return data.type == 'dog' })
console.log(filterDog)

// //Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​

// //Parte B - Hora do Jogo!
// //Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
// var getShirtsColorsAmount = function (company) {
//     colors = company.products.shirts.colors;
//     return colors.length;
// };

// //A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks
// const clothes = {
//     pants: { colors: ['black', 'blue'] },
//     shirts: { colors: ['white', 'red'] },
//     socks: { colors: ['beige', 'gray'] },
// };

// //Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
// const arr = [1, 2, 3];
// const arr2 = [4, 5, 6];

// //A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
// var persons = [
//     { firstname: 'Malcom', lastname: 'Reynolds' },
//     { firstname: 'Kaylee', lastname: 'Frye' },
//     { firstname: 'Jayne', lastname: 'Cobb' },
// ];