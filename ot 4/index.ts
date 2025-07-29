function concatenaNomes(nome: string, sobrenome: string): string {
    return `${nome} ${sobrenome}`;
}

const nomeCompleto = concatenaNomes("nome", "sorenome");
console.log("Nome completo:", nomeCompleto);

// function soma(a: number, b: number): number {
//     return a + b;
// }

const soma = (a: number, b: number): number => {
    return a + b;
};

function saudacao(nome: string, titulo?: string): string {
    if (titulo) {
        return `Olá, ${titulo} ${nome}!`;
    } else {
        return `Olá, ${nome}!`;
    }
}

console.log(saudacao("nome"));             
console.log(saudacao("Nome", "Sr."));     
console.log(saudacao("Nome", "Dra.")); 

function ajustar(valor: number): number;
function ajustar(valor: string): string;

function ajustar(valor: number | string): number | string {
    if (typeof valor === "number") {
        return valor * 2;
    } else {
        return valor.toUpperCase();
    }
}

function incrementa(base: number, incremento: number = 1): number {
    return base + incremento;
}