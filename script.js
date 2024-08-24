// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // GSAP plugin registration
    gsap.registerPlugin(ScrollTrigger);
  
    // Hero section functionality
    initHeroSection();
  
    // Tag filtering
    initTagFiltering();
  
    // Animations
    initAnimations();
  
    // Navigation and CTA button hover effects
    initHoverEffects();
  });
  
  function initHeroSection() {
    const issueContainer = document.querySelector('.issue-container');
    const issues = document.querySelectorAll('.issue');
    const prevButton = document.querySelector('.nav-arrow.prev');
    const nextButton = document.querySelector('.nav-arrow.next');
    let currentIndex = 0;
  
    function updateIssuePosition() {
      issueContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    function showPrevIssue() {
      if (currentIndex > 0) {
        currentIndex--;
        updateIssuePosition();
      }
    }
  
    function showNextIssue() {
      if (currentIndex < issues.length - 1) {
        currentIndex++;
        updateIssuePosition();
      }
    }
  
    prevButton.addEventListener('click', showPrevIssue);
    nextButton.addEventListener('click', showNextIssue);
  }
  
  function initTagFiltering() {
    const tagButtons = document.querySelectorAll('.tag-search .tag');
    const articles = document.querySelectorAll('.article-item');
  
    function filterArticles(tag) {
      articles.forEach(article => {
        const articleTags = article.dataset.tags.split(' ');
        if (tag === 'all' || articleTags.includes(tag)) {
          article.style.display = 'block';
          gsap.to(article, { opacity: 1, y: 0, duration: 0.5 });
        } else {
          gsap.to(article, { 
            opacity: 0, 
            y: 50, 
            duration: 0.5, 
            onComplete: () => {
              article.style.display = 'none';
            }
          });
        }
      });
  
      tagButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.tag === tag);
      });
    }
  
    tagButtons.forEach(button => {
      button.addEventListener('click', () => filterArticles(button.dataset.tag));
    });
  
    // Initialize with all articles visible
    articles.forEach(article => {
      article.style.display = 'block';
    });
  }
  
  function initAnimations() {
    // Hero section animations
    gsap.from('.hero h1', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from('.hero p', { opacity: 0, y: 50, duration: 1, delay: 0.7 });
    gsap.from('.cta-button', { opacity: 0, y: 50, duration: 1, delay: 0.9 });
  
    // Articles section animations
    gsap.from('.articles h2', {
      scrollTrigger: {
        trigger: '.articles',
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });
  
    gsap.from('.article-card', {
      scrollTrigger: {
        trigger: '.article-grid',
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
    });
  
    gsap.from('.article-item', {
      scrollTrigger: {
        trigger: '.articles-list',
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
    });
  
    // Footer animations
    gsap.from('.footer-content .col', {
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 90%'
      }
    });
  
    // Article hover animations
    /*const articles = document.querySelectorAll('.article-item');
    articles.forEach(article => {
      article.addEventListener('mouseenter', () => {
        gsap.to(article.querySelector('.article-content'), { y: 0, opacity: 1, duration: 0.3 });
      });
  
      article.addEventListener('mouseleave', () => {
        gsap.to(article.querySelector('.article-content'), { y: 50, opacity: 0, duration: 0.3 });
      });*/
  }
  
  function initHoverEffects() {
    // Navigation links hover effect
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, { duration: 0.3, scale: 1.1, ease: 'power2.out' });
      });
      link.addEventListener('mouseleave', () => {
        gsap.to(link, { duration: 0.3, scale: 1, ease: 'power2.out' });
      });
    });
  
    // CTA button hover effect
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseenter', () => {
      gsap.to(ctaButton, { duration: 0.3, y: -5, ease: 'power2.out' });
    });
    ctaButton.addEventListener('mouseleave', () => {
      gsap.to(ctaButton, { duration: 0.3, y: 0, ease: 'power2.out' });
    });
  }
