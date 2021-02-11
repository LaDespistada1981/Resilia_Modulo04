//Exercícios de Revisão JavaScript

//Exercicios - Dinamica aula 01
//Escolha 2 dos 3 exercícios para realizar nessa dinâmica. O que sobrar deverá ser resolvido em casa durante essa semana.

//1. Escreva uma função soma que retorna a soma dos números de um array usando spread operator

const array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

const somaArray= (acumulador, valorCorrente)=> acumulador + valorCorrente;

console.log(array.reduce(somaArray))
