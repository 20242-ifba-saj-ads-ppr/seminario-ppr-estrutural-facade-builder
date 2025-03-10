class Extracao {
    iniciar() {
        console.log("Máquinas de extração iniciadas...");
    }

    parar() {
        console.log("Máquinas de extração desligadas...");
    }
}

class Transporte {
    carregar() {
        console.log("Caminhões carregados com minério...");
    }

    descarregar() {
        console.log("Minério descarregado na purificação...");
    }
}

class Purificacao {
    iniciarProcesso() {
        console.log("Processo de purificação do ouro iniciado...");
    }

    finalizarProcesso() {
        console.log("Ouro purificado e armazenado...");
    }
}

class RegistroProducao {
    registrar(dados) {
        console.log(`Registro de produção: ${dados} kg de ouro processados.`);
    }
}

class MinaDeOuro {
    constructor() {
        this.extracao = new Extracao();
        this.transporte = new Transporte();
        this.purificacao = new Purificacao();
        this.registro = new RegistroProducao();
    }

    operarMina(quantidadeOuro) {
        this.extracao.iniciar();
        this.transporte.carregar();
        this.transporte.descarregar();
        this.purificacao.iniciarProcesso();
        this.purificacao.finalizarProcesso();
        this.registro.registrar(quantidadeOuro);
        this.extracao.parar();
    }
}

const mina = new MinaDeOuro();
mina.operarMina(50); 
