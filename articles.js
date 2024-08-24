document.addEventListener('DOMContentLoaded', () => {
    // Animate the tag search section
    gsap.from('.tag-search', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out'
    });
  
    // Animate the article items
    gsap.from('.article-item', {
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.articles-list',
        start: 'top 80%'
      }
    });
  
    // Animate tags on hover
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
      tag.addEventListener('mouseenter', () => {
        gsap.to(tag, {
          duration: 0.3,
          scale: 1.1,
          ease: 'power2.out'
        });
      });
      tag.addEventListener('mouseleave', () => {
        gsap.to(tag, {
          duration: 0.3,
          scale: 1,
          ease: 'power2.out'
        });
      });
    });
  });
  
  function filterArticles(tag) {
    const tags = document.querySelectorAll('.tag');
    const articles = document.querySelectorAll('.article-item');
  
    tags.forEach(t => t.classList.remove('active'));
    document.querySelector(`.tag[onclick="filterArticles('${tag}')"]`).classList.add('active');
  
    articles.forEach(article => {
      if (tag === 'all' || article.dataset.tags.includes(tag)) {
        gsap.to(article, { duration: 0.5, opacity: 1, display: 'flex', ease: 'power2.out' });
      } else {
        gsap.to(article, { duration: 0.5, opacity: 0, display: 'none', ease: 'power2.out' });
      }
    });
  }
