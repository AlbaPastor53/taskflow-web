 HEAD
// ===== Dashboard =====
function renderDashboard() {
  const panel = document.getElementById('dashboard');
  panel.innerHTML = '<h1>Panel principal</h1>';
}
renderDashboard();

function login(username, password) {
    if (username && password) {
        return "Inicio de sesión correcto";
    }

    return "Usuario y contraseña obligatorios";
}
 origin/feature-auth
