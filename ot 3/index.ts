let cidades: string[] = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Porto Alegre"];
console.log("A terceira cidade é:", cidades[2]);

let numeros: number[] = [10, 20, 30, 40, 50];

numeros.splice(3, 0, 35);
numeros.splice(1, 1);
console.log("Array final:", numeros);

const nums1: number[] = [1, 2, 3, 4, 5];
const multiplicados: number[] = nums1.map(num => num * 3);

console.log("Array original:", nums1);
console.log("Array multiplicado:", multiplicados);

const nums2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const impares: number[] = nums2.filter(num => num % 2 !== 0);

console.log("Array de números impares:", impares);

const nums3: number[] = [5, 7, 10, 12, 15];

const somaTotal: number = nums3.reduce((acumulador, atual) => acumulador + atual, 0);
console.log("Soma total dos números:", somaTotal);