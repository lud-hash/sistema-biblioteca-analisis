// --- DATOS INICIALES (Issue #7: Alta de Libros) ---
let inventario = [
    { id: 1, titulo: "JavaScript Moderno", stock: 3 },
    { id: 2, titulo: "Lógica de Programación", stock: 2 }
];

function registrarSocio() {
    console.log("Ejecutando: Registro de Socio (Cabecera)");
}

function altaDeLibro(id, titulo, cantidad) {
    inventario.push({ id, titulo, stock: cantidad });
    console.log(`+ Libro registrado: ${titulo} (Stock inicial: ${cantidad})`);
}

// --- LÓGICA DE STOCK (Issue #5: Gestión de Stock) ---
function descontarStock(idLibro) {
    let libro = inventario.find(l => l.id === idLibro);
    if (libro && libro.stock > 0) {
        libro.stock--;
        return true;
    }
    return false;
}

// --- FUNCIÓN FINAL (Issue #6: Emisión de Comprobante) ---
function imprimirComprobante(socio, libros) {
    console.log("\n===============================");
    console.log("   COMPROBANTE DE BIBLIOTECA   ");
    console.log("===============================");
    console.log(`Socio: ${socio}`);
    console.log("Libros retirados:");
    libros.forEach(l => console.log(`- ${l}`));
    console.log("===============================\n");
}

// --- PRUEBA DEL SISTEMA ---
registrarSocio(); 
altaDeLibro(3, "Node.js para Expertos", 10); 

if (descontarStock(1)) { 
    imprimirComprobante("Ludmila Ramirez", ["JavaScript Moderno"]); 
}