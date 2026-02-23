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

//Criando classe NaveJedi
class NaveJedi extends NaveEspacial {
    constructor(nome, mestre) {
        super(nome);
        this.mestre = mestre;
    }

    ativarHiperespaco() {
        return `${this.nome} atviou o hiperespaço sob o comando do mestre ${this.mestre}!`;
    }
}

//Criando uma instância da classe NaveEspacial - Objeto
const minhaNave = new NaveEspacial('Millenium Falcon');
const minhaNaveJedi = new NaveJedi('X-Wing', 'Luke');

console.log(minhaNave);
console.log(minhaNaveJedi.ativarHiperespaco());
