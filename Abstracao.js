class NaveEspacial {
    // Atributos (default - automático)

    //Métodos
    constructor(nome) {
        this.nome = nome;
        this.estaVoando = false;
    }

    voar() {
        this.estaVoando = true;
        return `${this.nome} está voando pelo espaço!`;
    }

    pousar() {
        this.estaVoando = false;
    }
}


//Criando uma instância da classe NaveEspacial - Objeto
const minhaNave = new NaveEspacial("Millenium Falcon")

console.log(minhaNave);

console.log('------------------');
console.log(minhaNave.voar());
console.log(`Está voando? ${minhaNave.estaVoando ? "Sim" : "Não"}`)

console.log('------------------');
minhaNave.pousar;
console.log(`Está voando? ${minhaNave.estaVoando ? 'Sim' : 'Não'}`);
