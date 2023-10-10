// Función que verifica si un usuario tiene permiso para importar y realiza alguna acción si tiene permiso
function getImportarPermission(users) {
    for(const user of users){
        // Case 1
        // Verifica si el usuario NO está registrado (!user.isLoggedIn()) o NO es un administrador (!user.isAdmin())
        if (!user.isLoggedIn() || !user.isAdmin()) {
            // Si no cumple ambas condiciones, devuelve null, lo que significa que el usuario no tiene permiso
            continue;//salta iteracion
        }
        // Case 2
        // Verifica si el usuario NO está registrado (!user.isLoggedIn()) o NO es un administrador (!user.isAdmin())
        if (!user.isLoggedIn() || !user.isAdmin()) {
            // Si no cumple ambas condiciones, devuelve null, lo que significa que el usuario no tiene permiso
            continue;
        }

    }
}//he ouesto par ejejmplo no modificar

 
