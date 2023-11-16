window.addEventListener('load', function() {
  var titleElement = document.getElementById('titleElement');
  var text = 'CYBER STORE'; // Adicione um espaço em branco entre as palavras
  var index = 0;
  var interval = setInterval(function() {
    titleElement.innerText = text.slice(0, index) + '|';
    index++;
    if (index > text.length) {
      clearInterval(interval);
      fadeOut(titleElement);
    }
  }, 200);

  function fadeOut(element) {
    var opacity = 1;
    var interval = setInterval(function() {
      element.style.opacity = opacity;
      opacity -= 0.1;
      if (opacity <= 0) {
        clearInterval(interval);
        fadeIn(element);
      }
    }, 100);
  }

  function fadeIn(element) {
    var opacity = 0;
    var interval = setInterval(function() {
      element.style.opacity = opacity;
      opacity += 0.1;
      if (opacity >= 1) {
        clearInterval(interval);
        startAnimation();
      }
    }, 100);
  }

  function startAnimation() {
    index = 0;
    interval = setInterval(function() {
      titleElement.innerText = text.slice(0, index) + '|';
      index++;
      if (index > text.length) {
        clearInterval(interval);
        fadeOut(titleElement);
      }
    }, 200);
  }

  // Adicionando efeito de iluminação gradiente
  var shadowAnimation = "glow 2s infinite alternate";

  var styleSheet = document.styleSheets[0];
  styleSheet.insertRule("@keyframes glow { 0% { box-shadow: 0 0 20px 10px rgba(0, 0, 255, 0.7); } 100% { box-shadow: 0 0 40px 20px rgba(0, 0, 255, 0.7); } }", styleSheet.cssRules.length);

  titleElement.style.animation = shadowAnimation;
});
