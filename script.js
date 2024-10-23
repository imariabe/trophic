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




document.addEventListener('DOMContentLoaded', function() {
  // Get all team members
  const teamMembers = document.querySelectorAll('.team-member');
  
  // Add hover effects using mouseenter and mouseleave
  teamMembers.forEach(member => {
      // Mouse enter effect
      member.addEventListener('mouseenter', function() {
          this.classList.add('active');
          const socialIcons = this.querySelector('.social-icons');
          if (socialIcons) {
              socialIcons.style.opacity = '1';
              socialIcons.style.transform = 'translateY(0)';
          }
      });

      // Mouse leave effect
      member.addEventListener('mouseleave', function() {
          this.classList.remove('active');
          const socialIcons = this.querySelector('.social-icons');
          if (socialIcons && window.innerWidth > 600) {
              socialIcons.style.opacity = '0';
              socialIcons.style.transform = 'translateY(10px)';
          }
      });
  });

  // Add click effects for social icons
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach(icon => {
      icon.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Add click animation
          this.style.transform = 'scale(0.95)';
          setTimeout(() => {
              this.style.transform = 'scale(1)';
          }, 100);

          // Get the social media platform from data attribute
          const social = this.getAttribute('data-social');
          const memberName = this.closest('.team-member').getAttribute('data-member');
          
          // You can add your social media handling logic here
          console.log(`Clicked ${social} icon for ${memberName}`);
      });
  });

  // Add touch support for mobile devices
  if ('ontouchstart' in window) {
      teamMembers.forEach(member => {
          member.addEventListener('touchstart', function() {
              this.classList.add('active');
          });

          member.addEventListener('touchend', function() {
              setTimeout(() => {
                  this.classList.remove('active');
              }, 300);
          });
      });
  }
});

// Handle window resize
window.addEventListener('resize', function() {
  const socialIconsContainers = document.querySelectorAll('.social-icons');
  socialIconsContainers.forEach(container => {
      if (window.innerWidth <= 600) {
          container.style.opacity = '1';
          container.style.transform = 'translateY(0)';
      }
  });
});