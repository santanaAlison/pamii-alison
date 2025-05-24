class CentralDeTrafego {
    private static instance: CentralDeTrafego;

    private constructor() {
        console.log('Central de Trafego Iniciada');
    }

    static getInstance(): CentralDeTrafego {
        if (!CentralDeTrafego.instance) {
            CentralDeTrafego.instance = new CentralDeTrafego();
        }
        return CentralDeTrafego.instance;
    }

    emitirAlerta(mensagem: string) {
        console.log('Alerta: ${mensagem}');
    }
}

const central1 = CentralDeTrafego.getInstance();
const central2 = CentralDeTrafego.getInstance();

central1.emitirAlerta('Acidente na rodovia!');

console.log(central1 === central2);