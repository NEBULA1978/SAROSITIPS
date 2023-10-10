def suma_numeros_pares(rango):
    resultado = 0
    for numero in range(1, rango + 1):
        if numero % 2 == 0:
            resultado += numero
    return resultado

rango = 10
resultado = suma_numeros_pares(rango)
print(f"La suma de números pares hasta {rango} es: {resultado}")

def contar_frecuencia_palabras(lista_palabras):
    frecuencia = {}
    for palabra in lista_palabras:
        if palabra in frecuencia:
            frecuencia[palabra] += 1
        else:
            frecuencia[palabra] = 1
    return frecuencia

lista_palabras = ["gato", "perro", "gato", "ratón", "perro", "gato"]
resultado = contar_frecuencia_palabras(lista_palabras)
print("Frecuencia de palabras:")
for palabra, conteo in resultado.items():
    print(f"{palabra}: {conteo}")
