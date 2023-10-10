// Ejejmplo 1: Función que devuelve un valor de color hexadecimal basado en el nombre de color proporcionado
function getColorUsingIf(color) {
    // Verifica si el color es 'blue' y devuelve el valor hexadecimal correspondiente
    if (color === 'blue') {
        return '#0000FF'; // Azul en formato hexadecimal
    }
    
    if (color === 'red') {
        return '#FF0000';
    }
    // Verifica si el color es 'green' y devuelve el valor hexadecimal correspondiente
    if (color === 'green') {
        return '#00FF00'; // Verde en formato hexadecimal
    }

    // Valor predeterminado si no se encuentra un color válido
    return '#FFFFFF'; // Blanco en formato hexadecimal
}

// Ejejmplo 2: Función que devuelve un valor de color hexadecimal basado en el nombre de color proporcionado
function getColorUsingSwitch(color) {
    // Utiliza una declaración switch para manejar diferentes casos de colores
    switch (color) {
        case 'blue':
            return '#0000FF'; // Azul en formato hexadecimal
        case 'red':
            return '#FF0000'; // Rojo en formato hexadecimal
        case 'green':
            return '#00FF00'; // Verde en formato hexadecimal
        default:
            // Valor predeterminado si no se encuentra un color válido
            return '#FFFFFF'; // Blanco en formato hexadecimal
    }
}
