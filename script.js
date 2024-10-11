function toggleMenu() {
    const header = document.querySelector('.header2');
    header.classList.toggle('active');
}

function animateCounter() {
    const counters = document.querySelectorAll('.count');
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
  
        const speed = 200;
        const increment = target / speed;
  
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCount();
    });
  }
  
  window.addEventListener('load', animateCounter);
  