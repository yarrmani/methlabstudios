// script.js

// mouse-follow dot
const dot = document.querySelector('.cursor-dot');
let mouseX = 0, mouseY = 0;
let dotX = 0, dotY = 0;
const speed = 0.15; // adjust for more or less lag

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  dotX += (mouseX - dotX) * speed;
  dotY += (mouseY - dotY) * speed;
  dot.style.left = dotX + 'px';
  dot.style.top  = dotY + 'px';
  requestAnimationFrame(animate);
}
animate();
