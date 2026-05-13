registrarSocio(dni, nombre) {
    if (!dni || !nombre) {
        console.log("⚠️ Error: Debes ingresar DNI y nombre del socio.");
        return;
    }

    const cabeceraPrestamo = {
        dni: dni,
        nombre: nombre,
        fecha: new Date().toLocaleString()
    };

    console.log(`✅ Cabecera creada con éxito para el socio ${cabeceraPrestamo.nombre} (DNI: ${cabeceraPrestamo.dni}).`);
    return cabeceraPrestamo;
}

// Ejemplo de uso:
registrarSocio("12345678", "Juan Pérez");


// Función para calcular el subtotal de libros prestados
function calcularSubtotal(librosPrestados) {
    if (!Array.isArray(librosPrestados) || librosPrestados.length === 0) {
        console.log("⚠️ No hay libros cargados en el detalle.");
        return 0;
    }

    // Sumar todas las unidades prestadas
    const subtotal = librosPrestados.reduce((acumulador, libro) => {
        return acumulador + libro.unidades;
    }, 0);

    console.log(`📚 El socio tiene un total de ${subtotal} unidades en su poder.`);
    return subtotal;
}

// calculo_subtotal
const detalleLibros = [
    { titulo: "Cien años de soledad", unidades: 2 },
    { titulo: "Rayuela", unidades: 1 },
    { titulo: "El principito", unidades: 3 }
];

calcularSubtotal(detalleLibros);


// Lista de ítems del préstamo (detalle)
let detallePrestamo = [];

// Función para agregar un libro al préstamo
function agregarLibro(codigo, titulo, cantidad) {
    if (!codigo || !titulo || !cantidad || cantidad <= 0) {
        console.log("⚠️ Error: Debes ingresar código, título y cantidad válida.");
        return;
    }

    // Crear objeto libro
    const libro = {
        codigo: codigo,
        titulo: titulo,
        cantidad: cantidad
    };

    // Agregar al detalle
    detallePrestamo.push(libro);

    // Calcular subtotal
    const subtotal = detallePrestamo.reduce((acumulador, item) => {
        return acumulador + item.cantidad;
    }, 0);

    // Confirmación
    console.log(`✅ Libro agregado: ${titulo} (x${cantidad}). Subtotal actual: ${subtotal} unidades.`);
    return subtotal;
}

// Ejemplo de uso:
agregarLibro("L001", "Cien años de soledad", 2);
agregarLibro("L002", "Rayuela", 1);
agregarLibro("L003", "El principito", 3);


// Función para calcular la multa por retraso
function calcularMulta(diasRetraso, valorPorDia) {
    if (!diasRetraso || diasRetraso <= 0) {
        console.log("✅ No hay retraso. No se aplica multa.");
        return 0;
    }

    if (!valorPorDia || valorPorDia <= 0) {
        console.log("⚠️ Error: Debes ingresar un valor válido por día de retraso.");
        return 0;
    }

    // Calcular monto total
    const montoTotal = diasRetraso * valorPorDia;

    // Mensaje de confirmación
    console.log(`💰 Multa calculada: ${diasRetraso} días de retraso x $${valorPorDia} = $${montoTotal}.`);
    return montoTotal;
}

// Ejemplo de uso:
calcularMulta(5, 100); // 5 días de retraso, $100 por día
