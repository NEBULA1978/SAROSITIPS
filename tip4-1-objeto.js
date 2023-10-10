// Ejejmplo 1: Objeto y método que devuelve un valor de color hexadecimal basado en el nombre de color proporcionado
const ColorUtility1 = {
    getColor: function(color) {
        if (color === 'blue') {
            return '#0000FF'; // Azul en formato hexadecimal
        } else if (color === 'red') {
            return '#FF0000'; // Rojo en formato hexadecimal
        } else if (color === 'green') {
            return '#00FF00'; // Verde en formato hexadecimal
        } else {
            return '#FFFFFF'; // Valor predeterminado si no se encuentra un color válido (blanco)
        }
    }
};

// Ejejmplo 2: Objeto y método que devuelve un valor de color hexadecimal basado en el nombre de color proporcionado
const ColorUtility2 = {
    getColor: function(color) {
        switch (color) {
            case 'blue':
                return '#0000FF'; // Azul en formato hexadecimal
            case 'red':
                return '#FF0000'; // Rojo en formato hexadecimal
            case 'green':
                return '#00FF00'; // Verde en formato hexadecimal
            default:
                return '#FFFFFF'; // Valor predeterminado si no se encuentra un color válido (blanco)
        }
    }
};
