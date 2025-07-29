let nome: string = "teste";
let idade: number = 99;
let aprovado: boolean = true;
let lista: number[] = [1, 2, 3];
let qualquer: any = "dadas";

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Aprovado:", aprovado);
console.log("Lista:", lista);
console.log("Tipo any:", qualquer);

//nome = 123;              
//idade = "vinte e quatro";
//aprovado = "sim";     
//lista = ["a", "b", "c"];

function somarNumeros(numeros: number[]): number {
    let soma: number = 0;

    for (let num of numeros) {
        soma += num;
    }

    return soma;
}

const listaSoma: number[] = [10, 20, 30, 40];
const resultado: number = somarNumeros(listaSoma);

console.log("Resultado da soma:", resultado);


enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

function mensagemDoDia(dia: DiaDaSemana): void {
    switch (dia) {
        case DiaDaSemana.Domingo:
        case DiaDaSemana.Sabado:
            console.log("É fim de semana! Hora de descansar.");
            break;
        case DiaDaSemana.Segunda:
            console.log("Segunda-feira: Começando a semana com energia!");
            break;
        case DiaDaSemana.Sexta:
            console.log("Sexta-feira: Quase lá!");
            break;
        default:
            console.log("Dia útil: Vamos continuar trabalhando!");
            break;
    }
}

mensagemDoDia(DiaDaSemana.Domingo);
mensagemDoDia(DiaDaSemana.Quarta);
mensagemDoDia(DiaDaSemana.Sexta);


type Produto = [string, number];

function exibirProduto(produto: Produto): void {
    const [nome, preco] = produto;
    console.log(`Produto: ${nome}`);
    console.log(`Preço: R$ ${preco.toFixed(2)}`);
}

const meuProduto: Produto = ["produto teste", 249.90];
exibirProduto(meuProduto);

let valor: any;

valor = "Uma string";
console.log("String:", valor);

valor = 42;
console.log("Número:", valor);

valor = true;
console.log("Booleano:", valor);

valor = { nome: "Produto", preco: 10.5 };
console.log("Objeto:", valor);

valor = [1, 2, 3];
console.log("Array:", valor);

valor = () => console.log("Função");
valor();

function logMensagem(mensagem: string): void {
    console.log("Mensagem:", mensagem);
}

function retornaNada(): undefined {
    console.log("executando");
    return undefined; 
}