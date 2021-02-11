//3. Faça fetch dos dados através da API (https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood) e retorne uma lista(array) com os nomes dos primeiros 10 resultados.

const fetch = require('node-fetch')

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then(response => {
        // network failure, request prevented
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        }

        return Promise.reject(new Error(response.statusText));
    })
    .then(response => response.json())
    .then(result => {
        console.log(data)
    })
    .catch(error => {
        // common error
        return null;
    });