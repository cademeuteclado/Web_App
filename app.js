// Função para abrir uma janela específica ao clicar no botão 1
function openWindow1() {
  window.open('pagina1.html', '_blank', 'width=500,height=500');
}

// Função para abrir uma janela específica ao clicar no botão 2
function openWindow2() {
  window.open('pagina2.html', '_blank', 'width=500,height=500');
}

// Função para abrir uma janela específica ao clicar no botão 3
function openWindow3() {
  window.open('pagina3.html', '_blank', 'width=500,height=500');
}

// Seleciona os botões com os IDs específicos e adiciona eventos de clique a eles
document.getElementById('button1').addEventListener('click', openWindow1);
document.getElementById('button2').addEventListener('click', openWindow2);
document.getElementById('button3').addEventListener('click', openWindow3);
