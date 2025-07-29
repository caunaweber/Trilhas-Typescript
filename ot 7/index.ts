function primeiroElemento<T>(array: T[]): T | undefined {
    return array[0];
}

console.log(primeiroElemento([1, 2, 3]));           // 1 (tipo: number)
console.log(primeiroElemento(["a", "b", "c"]));     // "a" (tipo: string)
console.log(primeiroElemento([true, false]));       // true (tipo: boolean)
console.log(primeiroElemento([]));                  // undefined (array vazio)

interface Pilha<T> {
    push(item: T): void;
    pop(): T | undefined;
}

class PilhaSimples<T> implements Pilha<T> {
    private itens: T[] = [];

    push(item: T): void {
        this.itens.push(item);
    }

    pop(): T | undefined {
        return this.itens.pop();
    }

    imprimir(): void {
        console.log("Conteúdo da pilha:", this.itens);
    }
}

// Pilha de números
const pilhaNumeros = new PilhaSimples<number>();
pilhaNumeros.push(10);
pilhaNumeros.push(20);
pilhaNumeros.imprimir(); // [10, 20]
console.log("Removido:", pilhaNumeros.pop()); // 20

// Pilha de strings
const pilhaStrings = new PilhaSimples<string>();
pilhaStrings.push("a");
pilhaStrings.push("b");
pilhaStrings.imprimir(); // ["a", "b"]
console.log("Removido:", pilhaStrings.pop()); // "b"


class Mapa<K, V> {
  private itens: { chave: K; valor: V }[] = [];

  public set(chave: K, valor: V): void {
    for (let i = 0; i < this.itens.length; i++) {
      if (this.itens[i].chave === chave) {
        this.itens[i].valor = valor;
        return;
      }
    }
    this.itens.push({ chave, valor });
  }

  public get(chave: K): V | undefined {
    for (let i = 0; i < this.itens.length; i++) {
      if (this.itens[i].chave === chave) {
        return this.itens[i].valor;
      }
    }
    return undefined;
  }

  public exibir(): void {
    console.log("Mapa completo:", this.itens);
  }
}

// Mapa de número → string
const mapaNomes = new Mapa<number, string>();
mapaNomes.set(1, "João");
mapaNomes.set(2, "Maria");
mapaNomes.set(1, "Carlos"); // atualiza chave 1
console.log(mapaNomes.get(1)); // Carlos
console.log(mapaNomes.get(2)); // Maria

// Mapa de string → boolean
const mapaPermissoes = new Mapa<string, boolean>();
mapaPermissoes.set("admin", true);
mapaPermissoes.set("usuario", false);
console.log(mapaPermissoes.get("admin")); // true



function processar<T extends { length: number }>(entrada: T): T {
  console.log(`Comprimento: ${entrada.length}`);
  return entrada;
}

processar("Olá, mundo!"); 
processar([1, 2, 3, 4]);


function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const pessoa = { nome: "Ana", idade: 25 };
const endereco = { cidade: "São Paulo", estado: "SP" };

const pessoaCompleta = mergeObjects(pessoa, endereco);
console.log(pessoaCompleta);