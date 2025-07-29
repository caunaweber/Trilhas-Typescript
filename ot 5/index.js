function exibirContato(contato) {
    console.log("Email: ".concat(contato.email));
    console.log("Telefone: ".concat(contato.telefone));
}
var soma = function (a, b) { return a + b; };
var subtracao = function (a, b) { return a - b; };
var multiplicacao = function (a, b) { return a * b; };
var divisao = function (a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
};
function aplicarConfiguracao(config) {
    if (config.background) {
        console.log("Aplicando background: ".concat(config.background));
    }
    else {
        console.log("Nenhum background especificado.");
    }
}
function juntarString(entrada) {
    if (typeof entrada === "string") {
        return entrada;
    }
    else {
        return entrada.join(", ");
    }
}
function exibirJogo(jogo) {
    console.log("\uD83C\uDFAE Nome do jogo: ".concat(jogo.nome));
    console.log("\uD83D\uDCB0 Pre\u00E7o: R$ ".concat(jogo.preco.toFixed(2)));
    if (jogo.jogar) {
        console.log("Vamos jogar!");
        jogo.jogar();
    }
    else {
        console.log("Este jogo não pode ser jogado no momento.");
    }
}
var jogo1 = {
    nome: "Elden Ring",
    preco: 299.90,
    jogar: function () { return console.log("Iniciando Elden Ring..."); }
};
var jogo2 = {
    nome: "Dark Souls Remastered",
    preco: 159.90
};
exibirJogo(jogo1);
console.log("\n---\n");
exibirJogo(jogo2);
