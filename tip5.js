function sumaNumerosPares(rango) {
    let resultado = 0;
    for (let numero = 1; numero <= rango; numero++) {
        if (numero % 2 === 0) {
            resultado += numero;
        }
    }
    return resultado;
}

const rango = 10;
const resultado = sumaNumerosPares(rango);
console.log(`La suma de números pares hasta ${rango} es: ${resultado}`);

function contarFrecuenciaPalabras(listaPalabras) {
    const frecuencia = {};

    for (const palabra of listaPalabras) {
        frecuencia[palabra] = (frecuencia[palabra] || 0) + 1;
    }

    return frecuencia;
}

const listaPalabras = ["gato", "perro", "gato", "ratón", "perro", "gato"];
const resultadoPalabras = contarFrecuenciaPalabras(listaPalabras);
console.log("Frecuencia de palabras:");
for (const palabra in resultadoPalabras) {
    console.log(`${palabra}: ${resultadoPalabras[palabra]}`);
}
