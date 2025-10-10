document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        offset: 120,
        once: true,
        easing: 'ease-in-out'
    });

    const counters = document.querySelectorAll('.counter');
    let started = false;

    function animateCounters() {
      const triggerBottom = window.innerHeight * 0.85;

      counters.forEach(counter => {
        const rect = counter.getBoundingClientRect();
        if (rect.top < triggerBottom && !started) {
          started = true;
          counters.forEach(c => {
            const target = +c.getAttribute('data-target');
            let count = 0;
            const speed = 60;
            const increment = target / speed;

            const updateCount = () => {
              count += increment;
              if (count < target) {
                c.textContent = Math.ceil(count) + '+';
                requestAnimationFrame(updateCount);
              } else {
                c.textContent = target + '+';
              }
            };
            updateCount();
          });
        }
      });
    }

    window.addEventListener('scroll', animateCounters);
  });
