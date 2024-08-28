document.getElementById('generaBtn').addEventListener('click', function() {
    const numero = Math.floor(Math.random() * 6) + 1;
    document.getElementById('numeroGenerato').textContent = numero;
});

// funzione per attivare/diattivare dark mode
document.getElementById('darkModeToggle').addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');

});