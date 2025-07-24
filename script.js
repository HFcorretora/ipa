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
// Adiciona hover effect ao botão
btnSolicitar.addEventListener("mouseover", () => { 
  btnSolicitar.style.backgroundColor = "#0056b3"; // Cor mais escura no hover
});
btnSolicitar.addEventListener("mouseout", () => {
  btnSolicitar.style.backgroundColor = "var(--custom-blue)"; // Volta à cor original
});
// Adiciona mensagem de status  
const btnSolicitar = document.getElementById("btnSolicitar");
const inputDocumento = document.getElementById("documento");
const statusMsg = document.getElementById("statusMsg");

btnSolicitar.addEventListener("click", () => {
  const doc = inputDocumento.value.trim();

  if (doc.length < 11) {
    statusMsg.textContent = "Por favor, insira um CPF ou CNPJ válido.";
    return;
  }

  const mensagem = encodeURIComponent(`Olá, gostaria de receber a segunda via do boleto para o documento: ${doc}`);
  const numeroWhats = "5521973732903";
  const urlWhats = `https://wa.me/${numeroWhats}?text=${mensagem}`;

  window.open(urlWhats, "_blank");

  inputDocumento.value = "";
  statusMsg.textContent = "";
});
// Adiciona estilo ao botão
btnSolicitar.style.cssText = `
