class Carro {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    descrever(): void {
        console.log(`Carro: ${this.marca} ${this.modelo}, ano ${this.ano}`);
    }
}

const carro1 = new Carro("Toyota", "Corolla", 2020);
const carro2 = new Carro("Honda", "Civic", 2023);

carro1.descrever();
carro2.descrever();

class CarroEletrico extends Carro {
    capacidadeBateria: number;

    constructor(marca: string, modelo: string, ano: number, capacidadeBateria: number) {
        super(marca, modelo, ano);
        this.capacidadeBateria = capacidadeBateria;
    }
    
    descrever(): void {
        super.descrever(); 
        console.log(`Capacidade da bateria: ${this.capacidadeBateria} kWh`);
    }
}

const carroEletrico1 = new CarroEletrico("Tesla", "Model 3", 2021, 75);
carroEletrico1.descrever();

class Conta{
    protected saldo: number;
    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }
    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        } else {
            console.log("Valor de depósito inválido.");
        }
    }
    sacar(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        } else {
            console.log("Valor de saque inválido ou saldo insuficiente.");
        }
    }
    consultarSaldo(): number {
        return this.saldo;
    }

    public calcularJuros(): number {
        return 0;
    }
}

const minhaConta = new Conta(1000);
minhaConta.depositar(500);
minhaConta.sacar(200);
console.log(`Saldo final: R$${minhaConta.consultarSaldo()}`);

class ContaCorrente extends Conta {
    private taxaJuros: number;

    constructor(saldoInicial: number, taxaJuros: number) {
        super(saldoInicial);
        this.taxaJuros = taxaJuros;
    }

   
    public override calcularJuros(): number {
        const juros = this.saldo * this.taxaJuros;
        return juros;
    }
}

const contaGenerica = new Conta(1000);
console.log("Juros (Conta genérica): R$", contaGenerica.calcularJuros());

const contaCorrente = new ContaCorrente(1000, 0.02); 
console.log("Juros (Conta corrente): R$", contaCorrente.calcularJuros());


interface Motorizavel {
    ligarMotor(): void;
}

class Barco implements Motorizavel {
    ligarMotor(): void {
        console.log("⛵ O motor do barco foi ligado. Pronto para navegar!");
    }
}

class Motocicleta implements Motorizavel {
    ligarMotor(): void {
        console.log("🏍️ O motor da motocicleta foi ligado. Vrum vrum!");
    }
}

function iniciarVeiculo(veiculo: Motorizavel): void {
    veiculo.ligarMotor();
}

const meuBarco = new Barco();
const minhaMoto = new Motocicleta();

iniciarVeiculo(meuBarco);
iniciarVeiculo(minhaMoto);