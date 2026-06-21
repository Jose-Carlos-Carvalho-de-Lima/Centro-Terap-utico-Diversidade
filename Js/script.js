// Aguarda o HTML carregar completamente antes de rodar o código
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona o botão de agendamento pelo ID
    const botaoAgendar = document.getElementById("btnAgendar");

    // Verifica se o botão realmente existe na página
    if (botaoAgendar) {
        // Adiciona um evento de clique
        botaoAgendar.addEventListener("click", function() {
            alert("Olá! O sistema de agendamento está sendo integrado ao servidor Django. Em breve você poderá marcar sua consulta!");
        });
    }

});