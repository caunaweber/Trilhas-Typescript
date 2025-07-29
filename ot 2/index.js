var nome = "teste";
var idade = 99;
var aprovado = true;
var lista = [1, 2, 3];
var qualquer = "dadas";
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Aprovado:", aprovado);
console.log("Lista:", lista);
console.log("Tipo any:", qualquer);
//nome = 123;              
//idade = "vinte e quatro";
//aprovado = "sim";     
//lista = ["a", "b", "c"];
function somarNumeros(numeros) {
    var soma = 0;
    for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
        var num = numeros_1[_i];
        soma += num;
    }
    return soma;
}
var listaSoma = [10, 20, 30, 40];
var resultado = somarNumeros(listaSoma);
console.log("Resultado da soma:", resultado);
var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
    DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
    DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
    DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
    DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
    DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
    DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
})(DiaDaSemana || (DiaDaSemana = {}));
function mensagemDoDia(dia) {
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
function exibirProduto(produto) {
    var nome = produto[0], preco = produto[1];
    console.log("Produto: ".concat(nome));
    console.log("Pre\u00E7o: R$ ".concat(preco.toFixed(2)));
}
var meuProduto = ["produto teste", 249.90];
exibirProduto(meuProduto);
var valor;
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
valor = function () { return console.log("Função"); };
valor();
function logMensagem(mensagem) {
    console.log("Mensagem:", mensagem);
}
function retornaNada() {
    console.log("executando");
    return undefined;
}
