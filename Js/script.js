document.addEventListener("DOMContentLoaded", function () {
    // Botão de agendamento
    const botaoAgendar = document.getElementById("btnAgendar");
    if (botaoAgendar) {
        botaoAgendar.addEventListener("click", function () {
            window.open("https://wa.me/5521968250101?text=Olá! Gostaria de agendar uma consulta.", "_blank");
        });
    }

    // Menu hambúrguer (mobile)
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    if (hamburger && menu) {
        hamburger.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }
    
  
});
