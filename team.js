document.addEventListener('DOMContentLoaded', () => {
    // Animate the team intro section
    gsap.from('.team-intro', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out'
    });
  
    // Animate the team sections
    gsap.from('.team-section', {
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.team-section',
        start: 'top 80%'
      }
    });
  
    // Animate team members
    gsap.from('.team-member', {
      duration: 0.6,
      y: 30,
      opacity: 0,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.team-grid',
        start: 'top 80%'
      }
    });
  });
