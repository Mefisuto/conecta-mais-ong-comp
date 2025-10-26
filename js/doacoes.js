document.addEventListener("DOMContentLoaded", () => {
    const donationForm = document.querySelector(".donation-form");
    const valueInput = document.getElementById("valor");
    const donationButtons = document.querySelectorAll(".option-card .btn");

    donationButtons.forEach(button => {
        button.addEventListener("click", () => {
            const amount = button.dataset.amount;
            if (amount === "custom") {
                valueInput.value = ""; // Limpa o campo para o usuário digitar
                valueInput.focus();
            } else {
                valueInput.value = amount;
            }
        });
    });

    if (donationForm) {
        donationForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário

            const valor = parseFloat(valueInput.value);
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const formaPagamento = document.getElementById("formaPagamento").value;

            if (isNaN(valor) || valor < 10) {
                alert("Por favor, insira um valor de doação válido (mínimo R$10).");
                return;
            }

            if (nome.trim() === "") {
                alert("Por favor, preencha seu nome completo.");
                return;
            }

            if (!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
                alert("Por favor, insira um e-mail válido.");
                return;
            }

            if (formaPagamento === "") {
                alert("Por favor, selecione uma forma de pagamento.");
                return;
            }

            // Se tudo estiver válido, simula o envio
            alert(`Obrigado, ${nome}! Sua doação de R$${valor.toFixed(2)} foi registrada. Entraremos em contato para os detalhes do pagamento.`);
            donationForm.reset(); // Limpa o formulário
        });
    }
});

