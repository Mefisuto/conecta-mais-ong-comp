document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filters .btn");
    const projectCards = document.querySelectorAll(".project-grid .project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Adiciona a classe 'active' ao botão clicado
            button.classList.add("active");

            const filter = button.dataset.filter;

            projectCards.forEach(card => {
                if (filter === "all" || card.dataset.category === filter) {
                    card.style.display = "flex"; // Mostra o card
                } else {
                    card.style.display = "none"; // Esconde o card
                }
            });
        });
    });
});

