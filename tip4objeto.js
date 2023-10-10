// Ejemplo 3

function getColor(color) {
    const hex = {
        blue: '#0000FF',
        red: '#FF0000',
        green: '#00FF00'
    }
    return hex[color] ?? defaultColor; //
}

// ////////////////////////////////77
// ////////////////////////////////77

// Ejemplo 4

function getColor(color) {
    const defaultColor = '#FFFFFF'

    const hex = {
        blue: '#0000FF',
        red: '#FF0000',
        green: '#00FF00'
    }

    return hex[color] ?? defaultColor; //
    // Entonces, en resumen, esta línea de código devuelve el valor hexadecimal correspondiente a color si es válido (según las claves en hex). Si color no es válido o no está presente en hex, devuelve defaultColor, que es un valor predeterminado. Esto asegura que siempre se devuelva un valor válido de color.
}


// /////////////////////////////
// /////////////////////////////

// Ejemplo 4.1: Función que obtiene un valor de color basado en un nombre de color proporcionado
function getColor(color) {
    // Valor predeterminado en caso de que el color proporcionado no sea válido
    const defaultColor = 'white';

    // Objeto que mapea nombres de colores a sus valores hexadecimales correspondientes
    const hex = {
        blue: '#0000FF',  // Azul en formato hexadecimal
        red: '#FF0000',   // Rojo en formato hexadecimal
        green: '#00FF00', // Verde en formato hexadecimal
        white: '#FFFFFF'  // Blanco en formato hexadecimal
    }

    // Devuelve el valor hexadecimal correspondiente si el color es válido; de lo contrario, devuelve el valor predeterminado
    return hex[color] ?? hex[defaultColor];
}
