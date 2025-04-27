let currentPage = 'register'; // Стартовая страница

function showPage(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(page).classList.add('active');
}

showPage(currentPage);

// Логика для регистрации
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(`Registered with ${username}`);
    currentPage = 'login';
    showPage(currentPage);
});

// Логика для входа
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    console.log(`Logged in as ${username}`);
    currentPage = 'chat-list';
    showPage(currentPage);
});

// Логика для создания чатов
document.getElementById('create-chat').addEventListener('click', function () {
    console.log('Creating new chat...');
});

// Логика для отправки сообщений
document.getElementById('send-message').addEventListener('click', function () {
    const message = document.getElementById('message').value;
    if (message) {
        const messagesDiv = document.getElementById('messages');
        const newMessage = document.createElement('div');
        newMessage.textContent = message;
        messagesDiv.appendChild(newMessage);
        document.getElementById('message').value = ''; // Очистить поле ввода
    }
});
