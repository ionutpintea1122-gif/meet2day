function initNavbar() {
    const token = localStorage.getItem('meet2day_token');
    const userStr = localStorage.getItem('meet2day_user');
    const btnLogin = document.getElementById('navbar-login-btn');
    const userZone = document.getElementById('navbar-user-zone');

    if (token && userStr) {
        const user = JSON.parse(userStr);
        const nume = user.user_metadata?.nume || user.email.split('@')[0];

        if (btnLogin) btnLogin.style.display = 'none';
        if (userZone) {
            userZone.style.display = 'flex';
            document.getElementById('navbar-user-name').textContent = '👤 ' + nume;
        }
    } else {
        if (btnLogin) btnLogin.style.display = 'block';
        if (userZone) userZone.style.display = 'none';
    }
}

function logout() {
    localStorage.removeItem('meet2day_token');
    localStorage.removeItem('meet2day_user');
    window.location.href = 'index.html';
}

function adaugaEvent() {
    const token = localStorage.getItem('meet2day_token');
    if (!token) {
        window.location.href = 'login.html';
    } else {
        window.location.href = 'adauga-event.html';
    }
}

document.addEventListener('DOMContentLoaded', initNavbar);