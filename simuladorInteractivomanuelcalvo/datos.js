function cotizarNuevaPoliza() {
    debugger
    m2 = parseInt(prompt("Ingrese los M2 de la propiedad"))
    zona = parseInt(prompt("Ingrese en qué zona vive:"))
    const cotizadorSeguroHogar = new Cotizador(m2, valorMetro2Seguro, zona)
    res = cotizadorSeguroHogar.cotizarPoliza()
    console.log(res)
}