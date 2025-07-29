interface Contato {
    email: string;
    telefone: string;
}

function exibirContato(contato: Contato): void {
    console.log(`Email: ${contato.email}`);
    console.log(`Telefone: ${contato.telefone}`);
}


type OperacaoMatematica = (a: number, b: number) => number;

const soma: OperacaoMatematica = (a, b) => a + b;

const subtracao: OperacaoMatematica = (a, b) => a - b;

const multiplicacao: OperacaoMatematica = (a, b) => a * b;

const divisao: OperacaoMatematica = (a, b) => {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
};

interface Configuracao {
    background?: string;
}

function aplicarConfiguracao(config: Configuracao): void {
    if (config.background) {
        console.log(`Aplicando background: ${config.background}`);
    } else {
        console.log("Nenhum background especificado.");
    }
}

type Entrada = string | string[];

function juntarString(entrada: Entrada): string {
    if (typeof entrada === "string") {
        return entrada;
    } else {
        return entrada.join(", ");
    }
}

interface Jogo {
    nome: string;
    preco: number;
    jogar?: () => void;
}

function exibirJogo(jogo: Jogo): void {
    console.log(`🎮 Nome do jogo: ${jogo.nome}`);
    console.log(`💰 Preço: R$ ${jogo.preco.toFixed(2)}`);

    if (jogo.jogar) {
        console.log("Vamos jogar!");
        jogo.jogar();
    } else {
        console.log("Este jogo não pode ser jogado no momento.");
    }
}

const jogo1: Jogo = {
    nome: "Elden Ring",
    preco: 299.90,
    jogar: () => console.log("Iniciando Elden Ring...")
};

const jogo2: Jogo = {
    nome: "Dark Souls Remastered",
    preco: 159.90
};

exibirJogo(jogo1);
console.log("\n---\n");
exibirJogo(jogo2);