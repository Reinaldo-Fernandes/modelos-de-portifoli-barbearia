// 📅 Enviar formulário para WhatsApp
const modal = document.getElementById("modalAgendamento");

// 🧼 Modal de Agendamento
const botaoAbrirModal = document.getElementById("abrirModal");
const botaoFecharModal = document.querySelector(".fechar-modal");

if (botaoAbrirModal && modal && botaoFecharModal) {
  botaoAbrirModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("hidden");
  });

  botaoFecharModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Fecha modal ao clicar fora
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
}

const form = document.getElementById("formAgendamento");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const servico = document.getElementById("servico").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    const numeroDestino = "5584999824438";

    const mensagem =
      `👋 Olá! Quero agendar um horário.%0A%0A` +
      `👤 *Nome:* ${nome}%0A` +
      `📞 *Telefone:* ${telefone}%0A` +
      `✂️ *Serviço:* ${servico}%0A` +
      `📅 *Data:* ${data}%0A` +
      `⏰ *Hora:* ${hora}`;

    const url = `https://wa.me/${numeroDestino}?text=${mensagem}`;
    window.open(url, "_blank");

    // ✅ Mensagem de sucesso
    const feedback = document.getElementById("mensagemFeedback");
    if (feedback) {
      feedback.textContent = "✅ Agendamento concluído com sucesso!";
      feedback.classList.remove("hidden");
      feedback.classList.add("show");

      setTimeout(() => {
        feedback.classList.remove("show");
        setTimeout(() => feedback.classList.add("hidden"), 500);
      }, 4000);
    }

    // 👉 Aqui estava o erro: 'modal' não existia ainda
    modal.classList.add('hidden');

    form.reset();
  });
}
