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
// Para no anidar un if dentro de otro if:
function getImportarPermission(user){
    if(!user.isLoggedIn() || !user.isAdmin()){
        return null;
    }
}