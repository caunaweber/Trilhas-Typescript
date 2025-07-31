var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function processarEntrada(id, dados) {
    console.log("ID: ".concat(id));
    console.log("Nome: ".concat(dados.nome));
    console.log("Idade: ".concat(dados.idade));
}
processarEntrada("abc", { nome: "Berebo", idade: 20 });
function criarObjeto(valor) {
    console.log(valor);
}
criarObjeto({ nome: "teste" });
criarObjeto({ idade: 99 });
function atualizarConfiguracoes(config) {
    var padrao = {
        tema: "claro",
        idioma: "pt-BR",
        layout: "horizontal"
    };
    var novaConfig = __assign(__assign({}, padrao), config);
    console.log("Configuração atualizada:", novaConfig);
}
atualizarConfiguracoes({ tema: "escuro" });
function exibirUsuario(usuario) {
    console.log("Nome: ".concat(usuario.nome, ", Idade: ").concat(usuario.idade));
}
var user = { nome: "teste", idade: 99 };
exibirUsuario(user);
var capitais = {
    Brasil: "Brasília",
    Argentina: "Buenos Aires",
    Alemanha: "Berlim",
    Japão: "Tóquio",
    Canadá: "Ottawa"
};
function buscarCapital(pais) {
    var capital = capitais[pais];
    return capital ? "A capital de ".concat(pais, " \u00E9 ").concat(capital, ".") : "Pa\u00EDs \"".concat(pais, "\" n\u00E3o encontrado.");
}
console.log(buscarCapital("Brasil"));
console.log(buscarCapital("Japão"));
console.log(buscarCapital("Itália"));
function criarListaParcial(itens) {
    return itens;
}
var lista = criarListaParcial([
    { tema: "escuro" },
    { idioma: "pt-BR", notificacoesAtivas: true },
    {},
    { notificacoesAtivas: false }
]);
console.log(lista);
