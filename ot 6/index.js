var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Carro.prototype.descrever = function () {
        console.log("Carro: ".concat(this.marca, " ").concat(this.modelo, ", ano ").concat(this.ano));
    };
    return Carro;
}());
var carro1 = new Carro("Toyota", "Corolla", 2020);
var carro2 = new Carro("Honda", "Civic", 2023);
carro1.descrever();
carro2.descrever();
var CarroEletrico = /** @class */ (function (_super) {
    __extends(CarroEletrico, _super);
    function CarroEletrico(marca, modelo, ano, capacidadeBateria) {
        var _this = _super.call(this, marca, modelo, ano) || this;
        _this.capacidadeBateria = capacidadeBateria;
        return _this;
    }
    CarroEletrico.prototype.descrever = function () {
        _super.prototype.descrever.call(this);
        console.log("Capacidade da bateria: ".concat(this.capacidadeBateria, " kWh"));
    };
    return CarroEletrico;
}(Carro));
var carroEletrico1 = new CarroEletrico("Tesla", "Model 3", 2021, 75);
carroEletrico1.descrever();
var Conta = /** @class */ (function () {
    function Conta(saldoInicial) {
        this.saldo = saldoInicial;
    }
    Conta.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log("Dep\u00F3sito de R$".concat(valor, " realizado. Saldo atual: R$").concat(this.saldo));
        }
        else {
            console.log("Valor de depósito inválido.");
        }
    };
    Conta.prototype.sacar = function (valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque de R$".concat(valor, " realizado. Saldo atual: R$").concat(this.saldo));
        }
        else {
            console.log("Valor de saque inválido ou saldo insuficiente.");
        }
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.calcularJuros = function () {
        return 0;
    };
    return Conta;
}());
var minhaConta = new Conta(1000);
minhaConta.depositar(500);
minhaConta.sacar(200);
console.log("Saldo final: R$".concat(minhaConta.consultarSaldo()));
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(saldoInicial, taxaJuros) {
        var _this = _super.call(this, saldoInicial) || this;
        _this.taxaJuros = taxaJuros;
        return _this;
    }
    ContaCorrente.prototype.calcularJuros = function () {
        var juros = this.saldo * this.taxaJuros;
        return juros;
    };
    return ContaCorrente;
}(Conta));
var contaGenerica = new Conta(1000);
console.log("Juros (Conta genérica): R$", contaGenerica.calcularJuros());
var contaCorrente = new ContaCorrente(1000, 0.02);
console.log("Juros (Conta corrente): R$", contaCorrente.calcularJuros());
