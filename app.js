const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Configurações do canvas para cobrir toda a janela
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array para armazenar as partículas
const particles = [];

// Função para criar partículas
function createParticle() {
  this.x = Math.random() * canvas.width;
  this.y = -20; // Começa acima do canvas
  this.radius = Math.random() * 2 + 1; // Tamanho das partículas
  this.speedY = Math.random() * 3 + 1; // Velocidade das partículas
  
  // Criação da partícula
  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white'; // Cor das partículas
    ctx.fill();
  }
}

// Função para atualizar e desenhar as partículas
function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle, index) => {
    particle.y += particle.speedY;
    
    // Se a partícula sair da tela, remove do array
    if (particle.y > canvas.height) {
      particles.splice(index, 1);
    }
    
    particle.draw();
  });
}

// Função para criar partículas em intervalos regulares
setInterval(() => {
  const particle = new createParticle();
  particles.push(particle);
}, 100);

// Loop para animação contínua
function animate() {
  requestAnimationFrame(animate);
  drawParticles();
}

animate(); // Inicia a animação
