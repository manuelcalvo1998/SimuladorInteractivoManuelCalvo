class Cotizador {
    constructor(m2, valorM2, zona) {
        this.metros2 = m2
        this.valorM2 = valorM2
        this.zonaResidencia = zona
    }
    cotizarPoliza() {
//       debugger
        let resultado = this.metros2 * this.valorM2
        return resultado
    }
}


