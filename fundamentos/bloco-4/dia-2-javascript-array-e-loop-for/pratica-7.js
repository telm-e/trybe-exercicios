let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// exercício 7
let menor = numbers[0];
for (let index = 0; index < numbers.length; index +=1) {
    if (menor < numbers[index]) {
        menor = menor;
    } else {
        menor = numbers[index];
    }
}
console.log(menor);