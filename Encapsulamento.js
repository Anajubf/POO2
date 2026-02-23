class NaveEspacial {
    // Atributos (default - automático)
    #estaVoando;

    //Métodos
    constructor(nome) {
        this.nome = nome;
        this.#estaVoando = false;
    }

    voar() {
        this.#estaVoando = true;
        return `${this.nome} está voando pelo espaço!`;
    }

    pousar() {
        this.#estaVoando = false;
    }

    receberInfo() {
        return this.#estaVoando ? 'Sim' : 'Não';
    }
}

//Criando uma instância da classe NaveEspacial - Objeto
const minhaNave = new NaveEspacial('Millenium Falcon');

console.log(minhaNave);

console.log(minhaNave.voar());

console.log(`Está voando? ${minhaNave.receberInfo() === 'Sim' ? 'Decolagem autorizada' : 'Em solo'}`,
);

minhaNave.pousar();
console.log(`Está voando? ${minhaNave.receberInfo()}`);
