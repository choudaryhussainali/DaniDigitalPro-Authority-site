// ============================================================
// INSIGHTS.JS - ISOLATED LOGIC FOR THE EDITORIAL PAGE
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  
  // ------------------------------------------------------------
  // 1. Navigation Blur Effect
  // ------------------------------------------------------------
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });

  // ------------------------------------------------------------
  // 2. Scroll Reveal Animations
  // ------------------------------------------------------------
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ------------------------------------------------------------
  // 3. Custom Cursor Logic
  // ------------------------------------------------------------
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  
  window.addEventListener('mousemove', (e) => {
    // Move dot instantly
    cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    // Move ring with slight delay for premium feel
    requestAnimationFrame(() => {
      cursorRing.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });
  });

  // Cursor Hover Effects on Links/Buttons
  document.querySelectorAll('a, button, .insight-card, .featured-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorRing.style.width = '60px';
      cursorRing.style.height = '60px';
      cursorRing.style.backgroundColor = 'rgba(201,168,76,0.05)';
    });
    el.addEventListener('mouseleave', () => {
      cursorRing.style.width = '40px';
      cursorRing.style.height = '40px';
      cursorRing.style.backgroundColor = 'transparent';
    });
  });

  // ------------------------------------------------------------
  // 4. Background Particles Animation
  // ------------------------------------------------------------
  const canvas = document.getElementById("particles");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let particlesArray = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5; // Tiny elegant dots
        this.speedX = Math.random() * 0.5 - 0.25; // Slow drift
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        // Wrap around screen
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
      draw() {
        ctx.fillStyle = `rgba(201, 168, 76, ${this.opacity})`; // Gold color matching your theme
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      particlesArray = [];
      const numberOfParticles = (canvas.width * canvas.height) / 12000; // Density
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();
  }

  // ------------------------------------------------------------
  // 5. DYNAMIC ARTICLE INJECTION & DRAWER ENGINE
  // ------------------------------------------------------------
  const drawerOverlay = document.getElementById('drawerOverlay');
  const articleDrawer = document.getElementById('articleDrawer');
  const drawerCloseBtn = document.getElementById('drawerClose');
  
  // The empty buckets in the HTML
  const domTag = document.getElementById('drawerTag');
  const domTitle = document.getElementById('drawerTitle');
  const domBody = document.getElementById('drawerBody');

  // Find every card that has a 'data-article' attribute
  const articleCards = document.querySelectorAll('[data-article]');

  articleCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault(); 
      
      // 1. Get the specific ID from the clicked card
      const targetId = card.getAttribute('data-article');
      
      // 2. Pull the matching data from our data.js database
      const articleData = articleDatabase[targetId];

      // 3. If the article exists, inject it instantly
      if (articleData) {
        domTag.innerText = articleData.tag;
        domTitle.innerText = articleData.title;
        domBody.innerHTML = articleData.content;
        
        // 4. Slide the drawer open and lock the background
        drawerOverlay.classList.add('active');
        articleDrawer.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // 5. Reset scroll position to the top of the article
        document.querySelector('.drawer-scroll-area').scrollTop = 0;
      } else {
        console.error("Article data not found in data.js for:", targetId);
      }
    });
  });

  // Close Drawer Function
  const closeDrawer = () => {
    drawerOverlay.classList.remove('active');
    articleDrawer.classList.remove('active');
    document.body.style.overflow = ''; 
    
    // Clear the content out after it slides away so it's fresh for the next click
    setTimeout(() => { 
      domBody.innerHTML = ''; 
      domTitle.innerText = ''; 
      domTag.innerText = ''; 
    }, 500); // Waits for the 0.7s CSS animation to mostly finish
  };

  // Close triggers
  drawerCloseBtn.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && articleDrawer.classList.contains('active')) {
      closeDrawer();
    }
  });
});