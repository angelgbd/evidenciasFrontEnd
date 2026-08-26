interface Prestamo{
    multa: number;
    ejemplar: number;
}

function calcularMulta(prestamo: Prestamo): number {
    const cargoFijo = 50;
    return prestamo.multa + cargoFijo;
}

const prestamo = {multa: 250, ejemplar: 15}; 

console.log("Tu multa es de ", calcularMulta(prestamo));