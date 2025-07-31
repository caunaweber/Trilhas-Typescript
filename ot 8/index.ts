type A = { nome: string };
type B = { idade: number };

type AB = A & B;

function processarEntrada(id: string | number, dados: AB): void {
  console.log(`ID: ${id}`);
  console.log(`Nome: ${dados.nome}`);
  console.log(`Idade: ${dados.idade}`);
}

processarEntrada("abc", { nome: "Berebo", idade: 20 });

type TipoA = { nome: string };
type TipoB = { idade: number };

type EscolherTipo<T extends boolean> = T extends true ? TipoA : TipoB;

function criarObjeto<T extends boolean>(valor: EscolherTipo<T>): void {
  console.log(valor);
}

criarObjeto<true>({ nome: "teste" });
criarObjeto<false>({ idade: 99 });

interface Configuracoes {
  tema: string;
  idioma: string;
  layout: string;
}

function atualizarConfiguracoes(config: Partial<Configuracoes>) {
  const padrao: Configuracoes = {
    tema: "claro",
    idioma: "pt-BR",
    layout: "horizontal"
  };

  const novaConfig = { ...padrao, ...config };
  console.log("Configuração atualizada:", novaConfig);
}

atualizarConfiguracoes({ tema: "escuro" });

interface Usuario {
  nome: string;
  idade: number;
}

function exibirUsuario(usuario: Readonly<Usuario>) {
  console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}`);
}

const user: Usuario = { nome: "teste", idade: 99 };
exibirUsuario(user);

const capitais: Record<string, string> = {
  Brasil: "Brasília",
  Argentina: "Buenos Aires",
  Alemanha: "Berlim",
  Japão: "Tóquio",
  Canadá: "Ottawa"
};

function buscarCapital(pais: string): string {
  const capital = capitais[pais];
  return capital ? `A capital de ${pais} é ${capital}.` : `País "${pais}" não encontrado.`;
}

console.log(buscarCapital("Brasil"));    
console.log(buscarCapital("Japão"));       
console.log(buscarCapital("Itália")); 


function criarListaParcial<T>(itens: Partial<T>[]): Partial<T>[] {
  return itens;
}

interface Configuracao {
  tema: string;
  idioma: string;
  notificacoesAtivas: boolean;
}

const lista = criarListaParcial<Configuracao>([
  { tema: "escuro" },
  { idioma: "pt-BR", notificacoesAtivas: true },
  {},
  { notificacoesAtivas: false }
]);

console.log(lista);