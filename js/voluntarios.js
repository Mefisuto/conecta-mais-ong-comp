document.addEventListener("DOMContentLoaded", () => {
    const volunteerForm = document.querySelector(".volunteer-form");

    if (volunteerForm) {
        volunteerForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário

            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const interesses = Array.from(document.getElementById("interesses").selectedOptions).map(option => option.value);

            if (nome.trim() === "") {
                alert("Por favor, preencha seu nome completo.");
                return;
            }

            if (!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
                alert("Por favor, insira um e-mail válido.");
                return;
            }

            if (interesses.length === 0) {
                alert("Por favor, selecione pelo menos uma área de interesse.");
                return;
            }

            // Se tudo estiver válido, simula o envio
            alert("Obrigado por se candidatar! Entraremos em contato em breve.");
            volunteerForm.reset(); // Limpa o formulário
        });
    }
});

