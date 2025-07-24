document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnSolicitar");
  const input = document.getElementById("documento");
  const msg = document.getElementById("statusMsg");

  // Estilo inicial do botão
  btn.style.cssText = `
    background-color: var(--custom-blue);
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  `;

  // Efeito hover
  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#0056b3"; // Cor mais escura
  });

  btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "var(--custom-blue)";
  });

  // Ação ao clicar
  btn.addEventListener("click", () => {
    const doc = input.value.trim();

    if (doc.length < 11) {
      msg.textContent = "Por favor, insira um CPF ou CNPJ válido.";
      return;
    }

    const numero = "5521973732903";
    const texto = encodeURIComponent(`Olá! Gostaria de receber a 2ª via do boleto para o CPF/CNPJ: ${doc}`);
    const url = `https://wa.me/${numero}?text=${texto}`;
    window.open(url, "_blank");

    input.value = "";
    msg.textContent = "";
  });
});
