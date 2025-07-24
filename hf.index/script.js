const btnSolicitar = document.getElementById("btnSolicitar");
const inputDocumento = document.getElementById("documento");
const statusMsg = document.getElementById("statusMsg");

btnSolicitar.addEventListener("click", () => {
  const doc = inputDocumento.value.trim();

  // Verificação simples: CPF ou CNPJ tem 11 ou 14 números (sem formatação)
  // Aqui só verifica se tem pelo menos 11 caracteres, você pode ajustar regex depois
  if (doc.length < 11) {
    statusMsg.textContent = "Por favor, insira um CPF ou CNPJ válido.";
    return;
  }

  // Monta a mensagem para WhatsApp
  const mensagem = encodeURIComponent(`Olá, gostaria de receber a segunda via do boleto para o documento: ${doc}`);

  // Número da Minha Assessoria para WhatsApp
  const numeroWhats = "5521973732903";

  // URL para abrir WhatsApp Web ou app
  const urlWhats = `https://wa.me/${numeroWhats}?text=${mensagem}`;

  // Abre em nova aba
  window.open(urlWhats, "_blank");

  // Limpa input e mensagem
  inputDocumento.value = "";
  statusMsg.textContent = "";
});
// Adiciona estilo ao botão
btnSolicitar.style.cssText = `
  background-color: var(--custom-blue);
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;