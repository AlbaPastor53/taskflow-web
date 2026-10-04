function login(username, password) {
    if (username && password) {
        return "Inicio de sesión correcto";
    }

    return "Usuario y contraseña obligatorios";
}