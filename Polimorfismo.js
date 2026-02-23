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

class NaveSith extends NaveEspacial {
    constructor(nome, mestre) {
        super(nome);
        this.mestre = mestre;
    }

    ativarHiperespaco() {
        return `${this.nome} entrou no hiperespaço sob o comando do malvado e brabo Lorde ${this.mestre}!`;
    }
}

//Criando uma instância da classe NaveEspacial - Objeto
const minhaNave = new NaveEspacial('Millenium Falcon');
const minhaNaveJedi = new NaveJedi('X-Wing', 'Luke');

console.log(minhaNave);
console.log(minhaNaveJedi.ativarHiperespaco());

const minhaNaveSith = new NaveSith('Estrela da Morte', 'Darth Vader');

console.log(minhaNave.voar());
console.log(minhaNaveJedi.voar());
console.log(minhaNaveSith.voar());

cconsole.log(minhaNave.receberInfo());
console.log(minhaNaveJedi.ativarHiperespaco());
console.log(minhaNaveSith.ativarHiperespaco());

