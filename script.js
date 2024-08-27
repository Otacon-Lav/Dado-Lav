document.getElementById('generaBtn').addEventListener('click', function() {
    const numero = Math.floor(Math.random() * 6) + 1;
    document.getElementById('numeroGenerato').textContent = 'Il numero generato: ' + numero;
});
