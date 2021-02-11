//2. Faça fetch dos dados através da aPI (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.
//Formato:
//Nome: [nome]
//ID: [id]
//Região: [area]
//Ingredientes: [ingredientes (string única)]
//Instruções: [instruções]

const fetch = require('node-fetch');

fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
.then((response)=>{
    if (response.ok) return response.json()
})

.then((data)=>{
    console.log(data)
})
