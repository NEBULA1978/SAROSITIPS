// Funcion normal demasida anidada mejo la de abajo

function getImportarPermission(user) {
    if (user.isLoggedIn() && user.isAdmin()) {
        // El usuario está registrado y es un administrador
        return true;
    } else {
        // El usuario no cumple con ambas condiciones
        return null;
    }
}

// CORRECTA
// Función que verifica si un usuario tiene permiso para importar
function getImportarPermission(user) {
    // Verifica si el usuario NO está registrado (!user.isLoggedIn()) o NO es un administrador (!user.isAdmin())
    if (!user.isLoggedIn() || !user.isAdmin()) {
        // Si no cumple ambas condiciones, devuelve null, lo que significa que el usuario no tiene permiso
        return null;
    }

    // Si el usuario está registrado y es un administrador, puede continuar aquí para realizar las acciones de importación
    // Puedes agregar código adicional aquí para manejar el caso en el que el usuario tenga permiso
    // Por ejemplo, puedes realizar acciones de importación o devolver algún otro valor indicando el permiso concedido
}
