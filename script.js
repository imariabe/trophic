function toggleMenu() {
    const header = document.querySelector('.header2');
    header.classList.toggle('active');
}

function animateCounter(counter) {
  const target = +counter.getAttribute('data-count');
  const speed = 500; // Adjust speed for slower count
  let count = 0;

  const updateCount = () => {
    const increment = target / speed;
    count += increment;
    if (count < target) {
      counter.innerText = Math.ceil(count);
      setTimeout(updateCount, 30); // Increase delay for slower count
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
}

function startCounters() {
  const counters = document.querySelectorAll('.count');
  counters.forEach(counter => animateCounter(counter));
}

const observerOptions = {
  root: null, // Sets it to viewport
  threshold: 0.2 // Trigger when 20% of the section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounters();
      observer.unobserve(entry.target); // Stop observing once animation starts
    }
  });
}, observerOptions);

document.querySelectorAll('.stat-item').forEach(statItem => {
  observer.observe(statItem);
});
