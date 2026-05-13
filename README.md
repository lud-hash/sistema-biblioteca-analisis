# sistema-biblioteca-analisisfunction registrarSocio(dni, nombre) {
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
