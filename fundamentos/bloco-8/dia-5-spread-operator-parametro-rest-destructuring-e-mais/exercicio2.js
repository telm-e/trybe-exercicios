// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro

const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr);
console.log(sum(3, 4, 5, 6, 7));