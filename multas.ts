type EstadoPrestamo = "activo" | "vencido" | "devuelto";

interface Prestamo{
    folio: string;
    multa: number;
    ejemplar: number;
    estado: EstadoPrestamo;
    socio?: string; //el ? lo vuelve opcional: puede no venir 
}

function calcularMulta(prestamo: Prestamo): number {
    const cargoFijo = 50;
    return prestamo.multa + cargoFijo;
}

function reciboDe(prestamo: Prestamo): string {
    if(prestamo.socio == undefined){
        return "No hay socio asignado";
    }
    return `Recibo para el socio: ${prestamo.socio.toUpperCase()} con multa de: ${calcularMulta(prestamo)}`;
}

const prestamo: Prestamo ={multa: 250, ejemplar: 15, folio: "F001", estado: 'activo', socio: 'Juan Pérez'}; 

console.log("Tu multa es de ", calcularMulta(prestamo));   
console.log(reciboDe(prestamo));