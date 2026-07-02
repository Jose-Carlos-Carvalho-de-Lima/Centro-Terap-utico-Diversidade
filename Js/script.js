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
            const isActive = menu.classList.toggle("active");
            hamburger.setAttribute("aria-expanded", isActive);
        });
    }

    // Submenus
    const subMenus = document.querySelectorAll(".item_menu > li");

    subMenus.forEach(item => {
        const link = item.querySelector(":scope > a"); // pega apenas o <a> direto do li
        if (link) {
            link.addEventListener("click", function (e) {
                e.preventDefault(); // evita recarregar página
                // Fecha todos os outros submenus
                subMenus.forEach(i => {
                    if (i !== item) i.classList.remove("open");
                });
                // Alterna o submenu clicado
                item.classList.toggle("open");
            });
        }
    });

    // Fecha submenus ao clicar fora
    document.addEventListener("click", function (e) {
        subMenus.forEach(item => {
            if (!item.contains(e.target)) {
                item.classList.remove("open");
            }
        });
    });
});
