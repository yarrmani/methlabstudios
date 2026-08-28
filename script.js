// ───── Graphics design projects ─────
const GRAPHICS_PROJECTS = [
  {
    id: 'raavi',
    title: 'Raavi — Social Media Design & Brand Strategy',
    subtitle: 'Premium visual identity for a luxury silver tableware brand',
    tags: ['Social Media', 'Brand Identity', 'Luxury'],
    thumb: 'assets/Raavi/ravvi_thumbnail.jpeg',
    thumbRatio: '7/2',
    type: 'multi',
    descriptionImage: 'assets/Raavi/ravi description.PNG',
    collageImages: [
      'assets/Raavi/Feel the weight.jpg',
      'assets/Raavi/The Art of Gift-Giving.jpg',
      'assets/Raavi/Product Luxury.jpg',
      'assets/Raavi/forged by hand.jpg',
      'assets/Raavi/Tin Lining (Qalaai).jpg',
      'assets/Raavi/Tin Lining (Qalaai) 2.jpg',
      'assets/Raavi/did you know 1.jpg',
      'assets/Raavi/did you know 2.png',
      'assets/Raavi/hajj_post.jpg',
      'assets/Raavi/ind day final.jpg',
      'assets/Raavi/new shoot prodcut post (2).jpg',
      'assets/Raavi/website_post_2.png'
    ]
  },
  {
    id: 'un-realtors',
    title: 'UN Realtors — Real Estate Social Media Campaign',
    subtitle: 'Conversion-focused social media presence for a real estate agency',
    tags: ['Social Media', 'Real Estate', 'Campaign'],
    thumb: 'assets/Un realtors/un banner.jpeg',
    thumbRatio: '7/2',
    type: 'multi',
    descriptionImage: 'assets/Un realtors/UN description.PNG',
    collageImages: [
      'assets/Un realtors/647088569_122118448029250428_1566540525963096079_n.jpg',
      'assets/Un realtors/658859742_18046701824564423_1690870531055406996_n.jpeg',
      'assets/Un realtors/669709778_18047441357564423_6547439902359663853_n.jpeg',
      'assets/Un realtors/671065782_18048374231564423_3531684243332796089_n.jpeg',
      'assets/Un realtors/684776772_18051202508564423_6473389819746557065_n.jpeg',
      'assets/Un realtors/688893562_18052784099564423_8923691104832120388_n.jpeg',
      'assets/Un realtors/711493868_18055958360564423_8986819877904205326_n.jpeg',
      'assets/Un realtors/714611744_18055992752564423_988878727618596950_n.jpeg',
      'assets/Un realtors/717287283_122142861339250428_6499347458018978843_n.jpg',
      'assets/Un realtors/717496938_122142575487250428_8145829253211151702_n.jpg',
      'assets/Un realtors/724207551_122144088369250428_3657824032650371736_n.jpg',
      'assets/Un realtors/758677108_18064522916564423_5887070959894655159_n.jpeg',
      'assets/Un realtors/770585154_18066633140564423_4601607268676432830_n.jpeg',
      'assets/Un realtors/771708519_18066192689564423_8788334101127136869_n.jpg',
      'assets/Un realtors/775633599_18067244870564423_114444517924829409_n.jpeg'
    ]
  },
  {
    id: 'arborlink',
    title: 'ArborLink — Social Media Design Portfolio',
    subtitle: 'Visual identity for a professional tree care and arborist service app',
    tags: ['Social Media', 'App Branding', 'Nature'],
    thumb: 'assets/arborlink/arborlink banner.jpg',
    thumbRatio: '7/2',
    type: 'multi',
    descriptionImage: 'assets/arborlink/arborlink description.PNG',
    collageImages: [
      'assets/arborlink/1.jpg.jpeg',
      'assets/arborlink/2.jpg.jpeg',
      'assets/arborlink/3.jpg.jpeg',
      'assets/arborlink/4.jpg.jpeg',
      'assets/arborlink/5.jpg.jpeg',
      'assets/arborlink/6.jpg.jpeg',
      'assets/arborlink/7.jpg.jpeg',
      'assets/arborlink/8.jpg.jpeg',
      'assets/arborlink/9.jpg.jpeg',
      'assets/arborlink/10.jpg.jpeg',
      'assets/arborlink/11.jpg.jpeg',
      'assets/arborlink/13.jpg.jpeg',
      'assets/arborlink/14.jpg.jpeg'
    ]
  },
  {
    id: 'brad-pitt-f1',
    title: "Brad Pitt's F1 Movie Poster Design",
    subtitle: 'Cinematic poster design for the F1 racing film',
    tags: ['Poster Design', 'Cinema', 'Photoshop'],
    thumb: 'assets/graphics/f1-cover.png',
    postImage: 'assets/graphics/f1-module.png'
  },
  {
    id: 'daily-deli',
    title: 'Daily Deli Co — A Flavor-Packed Design Journey',
    subtitle: 'Brand identity for an artisan deli concept',
    tags: ['Branding', 'Packaging', 'Identity'],
    thumb: 'assets/graphics/deli-cover.png',
    postImage: 'assets/graphics/deli-module.png'
  },
  {
    id: 'tim-hortons',
    title: 'Hazelnut Cappuccino — Tim Hortons Design',
    subtitle: 'Seasonal beverage campaign visual',
    tags: ['Campaign', 'Food & Beverage', 'Illustration'],
    thumb: 'assets/graphics/tims-cover.png',
    postImage: 'assets/graphics/tims-module.png'
  }
];

// ───── Mouse follow cursor ─────
const dot = document.querySelector('.cursor-dot');
let mouseX = 0;
let mouseY = 0;
let dotX = 0;
let dotY = 0;
const speed = 0.15;

if (dot && window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  (function animateCursor() {
    dotX += (mouseX - dotX) * speed;
    dotY += (mouseY - dotY) * speed;
    dot.style.left = `${dotX}px`;
    dot.style.top = `${dotY}px`;
    requestAnimationFrame(animateCursor);
  })();
} else if (dot) {
  dot.style.display = 'none';
}

// ───── Graphics showcase grid ─────
(function initGraphicsGrid() {
  const grid = document.getElementById('graphicsGrid');
  if (!grid) return;

  GRAPHICS_PROJECTS.forEach((project) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'graphics-card';
    card.setAttribute('data-project-id', project.id);
    card.setAttribute('aria-label', `View design post: ${project.title}`);
    const thumbStyle = project.thumbRatio
      ? `style="aspect-ratio: ${project.thumbRatio};"` : '';
    card.innerHTML = `
      <div class="graphics-card-thumb" ${thumbStyle}>
        <img src="${project.thumb}" alt="" />
        <div class="graphics-card-overlay">
          <span>VIEW POST →</span>
        </div>
      </div>
      <div class="graphics-card-body">
        <div class="graphics-card-tags">
          ${project.tags.map((t) => `<span>${t}</span>`).join('')}
        </div>
        <h3>${project.title}</h3>
        <p>${project.subtitle}</p>
      </div>
    `;
    card.addEventListener('click', () => openProjectModal(project));
    grid.appendChild(card);
  });
})();

// ───── Project image lightbox ─────
const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');

function openProjectModal(project) {
  if (project.type === 'multi') {
    // Raavi-style: thumbnail + description + collage
    const collageHTML = project.collageImages.map((src, i) => `
      <button class="raavi-collage-item" data-img="${src}" aria-label="View image ${i + 1}" type="button">
        <img src="${src}" alt="Raavi design ${i + 1}" loading="lazy" />
        <div class="raavi-collage-overlay"><span>VIEW →</span></div>
      </button>
    `).join('');

    modalContent.innerHTML = `
      <div class="raavi-modal-layout" data-project="${project.id}">
        <div class="raavi-section raavi-thumbnail">
          <img src="${project.thumb}" alt="${project.title}" />
        </div>
        <div class="raavi-section raavi-description">
          <img src="${project.descriptionImage}" alt="Project description" />
        </div>
        <div class="raavi-section">
          <p class="raavi-collage-label">Design Gallery</p>
          <div class="raavi-collage-grid">${collageHTML}</div>
        </div>
      </div>
    `;

    // Attach lightbox listeners
    modalContent.querySelectorAll('.raavi-collage-item').forEach((btn) => {
      btn.addEventListener('click', () => openImageLightbox(btn.dataset.img));
    });
  } else {
    modalContent.innerHTML = `
      <img src="${project.postImage}" alt="${project.title}" />
    `;
  }

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modalClose?.focus();
}

function closeProjectModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  modalContent.innerHTML = '';
}

// ───── Image lightbox (for collage images) ─────
const imgLightbox = document.getElementById('imageLightbox');
const imgLightboxImg = document.getElementById('imageLightboxImg');
const imgLightboxClose = document.getElementById('imageLightboxClose');
const imgLightboxBackdrop = document.getElementById('imageLightboxBackdrop');

function openImageLightbox(src) {
  imgLightboxImg.src = src;
  imgLightbox.classList.add('is-open');
  imgLightbox.setAttribute('aria-hidden', 'false');
}

function closeImageLightbox() {
  imgLightbox.classList.remove('is-open');
  imgLightbox.setAttribute('aria-hidden', 'true');
  imgLightboxImg.src = '';
}

imgLightboxClose?.addEventListener('click', closeImageLightbox);
imgLightboxBackdrop?.addEventListener('click', closeImageLightbox);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && imgLightbox?.classList.contains('is-open')) {
    closeImageLightbox();
  }
});

modalClose?.addEventListener('click', closeProjectModal);
modalBackdrop?.addEventListener('click', closeProjectModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal?.classList.contains('is-open')) {
    closeProjectModal();
  }
});

// ───── Wistia: pause others when one plays ─────
function pauseOthers(currentEl) {
  document.querySelectorAll('wistia-player').forEach((el) => {
    if (el !== currentEl) {
      if (typeof el.pause === 'function') {
        try {
          el.pause();
        } catch {}
      }
      if (el.shadowRoot) {
        const vid = el.shadowRoot.querySelector('video');
        if (vid && !vid.paused) vid.pause();
      }
    }
  });
}

window._wq = window._wq || [];
window._wq.push({
  onReady(video) {
    const selector = `wistia-player[media-id="${video.hashedId}"]`;
    const el = document.querySelector(selector);
    video.bind('play', () => pauseOthers(el));
  }
});

function setupFallbackListeners() {
  document.querySelectorAll('wistia-player').forEach((el) => {
    el.addEventListener('play', () => pauseOthers(el));
    if (el.shadowRoot) {
      const vid = el.shadowRoot.querySelector('video');
      if (vid) {
        vid.addEventListener('play', () => pauseOthers(el));
      }
    }
  });
}

if (document.readyState !== 'loading') {
  setupFallbackListeners();
} else {
  document.addEventListener('DOMContentLoaded', setupFallbackListeners);
}
