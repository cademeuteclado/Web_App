document.addEventListener('DOMContentLoaded', function() {
  function activateAnimation() {
    this.classList.toggle('active');
    // Redirecionar para a nova página na mesma janela
    window.location.href = 'pagina_nova.html';
  }

  // Selecionar o botão
  var button = document.getElementById('button1');

  // Adicionar evento de clique ao botão, se encontrado
  if (button) {
    button.addEventListener('click', activateAnimation);
  }
});
