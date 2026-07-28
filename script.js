
document.getElementById('ano').textContent = new Date().getFullYear();

const botaoMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

botaoMenu.addEventListener('click', () => {
  menu.classList.toggle('open');
});

function enviarWhatsApp(event) {
  event.preventDefault();

  // TROQUE PELO NÚMERO COM DDD E CÓDIGO DO PAÍS, SOMENTE NÚMEROS.
  // Exemplo: 5551999999999
  const numeroWhatsApp = '5551999999999';

  const nome = document.getElementById('nome').value.trim();
  const material = document.getElementById('material').value.trim();
  const quantidade = document.getElementById('quantidade').value.trim();
  const cidade = document.getElementById('cidade').value.trim();

  const mensagem = [
    'Olá, gostaria de solicitar um orçamento.',
    '',
    `Nome/empresa: ${nome}`,
    `Material: ${material}`,
    `Quantidade estimada: ${quantidade || 'Não informada'}`,
    `Município da entrega: ${cidade || 'Não informado'}`
  ].join('\n');

  const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, '_blank');
  return false;
}
