// mouse follow 
const dot = document.querySelector('.cursor-dot');
let mouseX = 0, mouseY = 0;
let dotX = 0, dotY = 0;
const speed = 0.15; 

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

// — pause other Wistia players when one plays —

// Utility: pause all except the one you’re interacting with
function pauseOthers(currentEl) {
  document.querySelectorAll('wistia-player').forEach(el => {
    if (el !== currentEl) {
      // Try pausing via the custom element API
      if (typeof el.pause === 'function') {
        try { el.pause(); } catch {}
      }
      // Also pause any <video> inside its shadow DOM
      if (el.shadowRoot) {
        const vid = el.shadowRoot.querySelector('video');
        if (vid && !vid.paused) vid.pause();
      }
    }
  });
}

// 1) Wistia API hooks (for async embeds)
window._wq = window._wq || [];
window._wq.push({
  onReady(video) {
    // Find the corresponding <wistia-player> by media-id
    const selector = `wistia-player[media-id="${video.hashedId}"]`;
    const el = document.querySelector(selector);
    // When this one plays, pause all the rest
    video.bind('play', () => pauseOthers(el));
  }
});

// 2) Fallback: native play events on the custom element / inner <video>
function setupFallbackListeners() {
  document.querySelectorAll('wistia-player').forEach(el => {
    // Listen for the element’s own `play` event
    el.addEventListener('play', () => pauseOthers(el));
    // If there's a <video> in the open shadow root, hook its play too
    if (el.shadowRoot) {
      const vid = el.shadowRoot.querySelector('video');
      if (vid) {
        vid.addEventListener('play', () => pauseOthers(el));
      }
    }
  });
}

// Run fallback hookup after DOM+Wistia are ready
if (document.readyState !== 'loading') {
  setupFallbackListeners();
} else {
  document.addEventListener('DOMContentLoaded', setupFallbackListeners);
}
