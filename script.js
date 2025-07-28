document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnSolicitar");
  const input = document.getElementById("documento");
  const msg = document.getElementById("statusMsg");

  // Remove estilos inline do botão e usa classe CSS para estilo (assumindo .btn-customBlue)
  // Certifique-se que o botão no HTML tenha essa classe para manter estilo consistente.
  btn.classList.add("btn-customBlue");

  // Função para validar CPF ou CNPJ (simplificada)
  function validarDocumento(doc) {
    const apenasDigitos = doc.replace(/\D/g, '');
    return (apenasDigitos.length === 11 || apenasDigitos.length === 14);
  }

  // Função para mostrar mensagem de status
  function mostrarMensagem(texto, tipo = "erro") {
    msg.textContent = texto;
    msg.style.color = tipo === "erro" ? "red" : "green";
    if (texto) {
      msg.setAttribute("role", "alert");
    } else {
      msg.removeAttribute("role");
    }
  }

  // Limpa mensagem após 5 segundos
  function limparMensagem() {
    setTimeout(() => {
      msg.textContent = "";
      msg.removeAttribute("role");
    }, 5000);
  }

  btn.addEventListener("click", () => {
    const doc = input.value.trim();

    if (!validarDocumento(doc)) {
      mostrarMensagem("Por favor, insira um CPF ou CNPJ válido.");
      limparMensagem();
      return;
    }

    // Bloqueia botão para evitar cliques múltiplos
    btn.disabled = true;
    btn.textContent = "Abrindo WhatsApp...";
    
    const numero = "5521973732903";
    const texto = encodeURIComponent(`Olá! Gostaria de receber a 2ª via do boleto para o CPF/CNPJ: ${doc}`);
    const url = `https://wa.me/${numero}?text=${texto}`;
    window.open(url, "_blank");

    // Reseta campo e botão após um curto tempo
    setTimeout(() => {
      input.value = "";
      mostrarMensagem("");
      btn.disabled = false;
      btn.innerHTML = `<i class="fab fa-whatsapp text-lg"></i> Solicitar`;
    }, 2000);
  });
});
// Adiciona o ícone do WhatsApp ao botão
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnSolicitar");
  if (btn) {
    btn.innerHTML = `<i class="fab fa-whatsapp text-lg"></i> Solicitar`;
  }
});
// Adiciona o ícone do WhatsApp ao botão
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnSolicitar");
  if (btn) {
    btn.innerHTML = `<i class="fab fa-whatsapp text-lg"></i> Solicitar`;
  }
});
