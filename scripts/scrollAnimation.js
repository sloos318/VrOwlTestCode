document.addEventListener('DOMContentLoaded', function() {
  const darkBackgrounds = document.querySelectorAll('.darkbackground');
  const items = document.querySelectorAll('.darkbackground ul li');
  const dots = document.querySelectorAll('.darkbackground .dot');
  const secondDarkBackground = darkBackgrounds[1];

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        items.forEach(item => item.classList.remove('visible'));
        entry.target.classList.add('visible');
        entry.target.style.opacity = '1';
      }
    });
  }, {
    threshold: 0.5
  });

  items.forEach(item => {
    observer.observe(item);
  });

  items.forEach(img => {
    img.style.transition = 'opacity 1s';
    img.style.opacity = '0';
    observer.observe(img);
  });

  // Add scroll animation for .darkbackground
  darkBackgrounds.forEach(bg => {
    bg.style.transition = 'transform 1s';
    observer.observe(bg);
  });

  // Add observer for the second .darkbackground to animate .time li elements
  const timeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        timeItems.forEach((item, index) => {
          item.style.animationDelay = `${index * 0.3}s`;
          item.classList.add('animate');
        });
      }
    });
  }, {
    threshold: 0.5
  });

  timeObserver.observe(secondDarkBackground);

  // Add observer for dots to gradually show them based on scrolling
  const dotObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      } else {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(200px)';
      }
    });
  }, {
    threshold: 0.5
  });

  dots.forEach(dot => {
    dot.style.transition = 'opacity 1s, transform 1s';
    dotObserver.observe(dot);
  });
});
