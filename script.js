document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnSolicitar");
  const input = document.getElementById("documento");
  const msg = document.getElementById("statusMsg");

  if (btn) {
    btn.classList.add("btn-customBlue");
    btn.innerHTML = `<i class="fab fa-whatsapp text-lg"></i> Solicitar`;
  }

  function validarDocumento(doc) {
    const apenasDigitos = doc.replace(/\D/g, '');
    return (apenasDigitos.length === 11 || apenasDigitos.length === 14);
  }

  function mostrarMensagem(texto, tipo = "erro") {
    msg.textContent = texto;
    msg.style.color = tipo === "erro" ? "red" : "green";
    if (texto) {
      msg.setAttribute("role", "alert");
    } else {
      msg.removeAttribute("role");
    }
  }

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

    btn.disabled = true;
    btn.textContent = "Abrindo WhatsApp...";

    const numero = "5521973732903";
    const texto = encodeURIComponent(`Olá! Gostaria de receber a 2ª via do boleto para o CPF/CNPJ: ${doc}`);
    const url = `https://wa.me/${numero}?text=${texto}`;
    window.open(url, "_blank");

    setTimeout(() => {
      input.value = "";
      mostrarMensagem("");
      btn.disabled = false;
      btn.innerHTML = `<i class="fab fa-whatsapp text-lg"></i> Solicitar`;
    }, 2000);
  });

  // Toggle dark mode
  const toggleDark = document.getElementById('toggle-dark');
  if (toggleDark) {
    toggleDark.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('darkMode', document.body.classList.contains('dark'));
    });
  }

  // Aplica estado salvo do dark mode
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
  }

  // Botão voltar ao topo
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Botão flutuante do WhatsApp
  const whatsappFloat = document.getElementById('whatsapp-float');
  if (whatsappFloat) {
    whatsappFloat.addEventListener('click', () => {
      window.open('https://api.whatsapp.com/send?phone=5521973732903', '_blank');
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const whatsappFloat = document.getElementById("whatsapp-float");
  const numero = "5521973732903"; // seu número com código do país e DDD, sem espaços
  whatsappFloat.addEventListener("click", () => {
    window.open(`https://wa.me/${numero}`, "_blank");
  });
  // Para acessibilidade, permitir ativar com Enter ou Espaço
  whatsappFloat.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      whatsappFloat.click();
    }
  });
});
// Fim do script.js
