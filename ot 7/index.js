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
function primeiroElemento(array) {
    return array[0];
}
console.log(primeiroElemento([1, 2, 3])); // 1 (tipo: number)
console.log(primeiroElemento(["a", "b", "c"])); // "a" (tipo: string)
console.log(primeiroElemento([true, false])); // true (tipo: boolean)
console.log(primeiroElemento([])); // undefined (array vazio)
var PilhaSimples = /** @class */ (function () {
    function PilhaSimples() {
        this.itens = [];
    }
    PilhaSimples.prototype.push = function (item) {
        this.itens.push(item);
    };
    PilhaSimples.prototype.pop = function () {
        return this.itens.pop();
    };
    PilhaSimples.prototype.imprimir = function () {
        console.log("Conteúdo da pilha:", this.itens);
    };
    return PilhaSimples;
}());
// Pilha de números
var pilhaNumeros = new PilhaSimples();
pilhaNumeros.push(10);
pilhaNumeros.push(20);
pilhaNumeros.imprimir(); // [10, 20]
console.log("Removido:", pilhaNumeros.pop()); // 20
// Pilha de strings
var pilhaStrings = new PilhaSimples();
pilhaStrings.push("a");
pilhaStrings.push("b");
pilhaStrings.imprimir(); // ["a", "b"]
console.log("Removido:", pilhaStrings.pop()); // "b"
var Mapa = /** @class */ (function () {
    function Mapa() {
        this.itens = [];
    }
    Mapa.prototype.set = function (chave, valor) {
        for (var i = 0; i < this.itens.length; i++) {
            if (this.itens[i].chave === chave) {
                this.itens[i].valor = valor;
                return;
            }
        }
        this.itens.push({ chave: chave, valor: valor });
    };
    Mapa.prototype.get = function (chave) {
        for (var i = 0; i < this.itens.length; i++) {
            if (this.itens[i].chave === chave) {
                return this.itens[i].valor;
            }
        }
        return undefined;
    };
    Mapa.prototype.exibir = function () {
        console.log("Mapa completo:", this.itens);
    };
    return Mapa;
}());
// Mapa de número → string
var mapaNomes = new Mapa();
mapaNomes.set(1, "João");
mapaNomes.set(2, "Maria");
mapaNomes.set(1, "Carlos"); // atualiza chave 1
console.log(mapaNomes.get(1)); // Carlos
console.log(mapaNomes.get(2)); // Maria
// Mapa de string → boolean
var mapaPermissoes = new Mapa();
mapaPermissoes.set("admin", true);
mapaPermissoes.set("usuario", false);
console.log(mapaPermissoes.get("admin")); // true
function processar(entrada) {
    console.log("Comprimento: ".concat(entrada.length));
    return entrada;
}
processar("Olá, mundo!");
processar([1, 2, 3, 4]);
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var pessoa = { nome: "Ana", idade: 25 };
var endereco = { cidade: "São Paulo", estado: "SP" };
var pessoaCompleta = mergeObjects(pessoa, endereco);
console.log(pessoaCompleta);
