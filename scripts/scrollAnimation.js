document.addEventListener('DOMContentLoaded', function() {
  const darkBackgrounds = document.querySelectorAll('.darkbackground');
  const items = document.querySelectorAll('.darkbackground ul li');
  const dots = document.querySelectorAll('.darkbackground .dot');
  const secondDarkBackground = darkBackgrounds[1] || null;

  if (items.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          items.forEach(item => item.classList.remove('visible'));
          entry.target.classList.add('visible');
          entry.target.style.opacity = '1';
        }
      });
    }, { threshold: 0.3 }); // Lower threshold for better small-screen handling

    items.forEach(item => {
      item.style.transition = 'opacity 1s';
      item.style.opacity = '0';
      observer.observe(item);
    });
  }

  darkBackgrounds.forEach(bg => {
    bg.style.transition = 'transform 1s';
  });

  if (secondDarkBackground) {
    const timeObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const timeItems = secondDarkBackground.querySelectorAll('.time li');
          timeItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.3}s`;
            item.classList.add('animate');
          });
        }
      });
    }, { threshold: 0.3 });

    timeObserver.observe(secondDarkBackground);
  }

  if (dots.length > 0) {
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
    }, { threshold: 0.3 });

    dots.forEach(dot => {
      dot.style.transition = 'opacity 1s, transform 1s';
      dot.style.opacity = '0';
      dot.style.transform = 'translateY(200px)';
      dotObserver.observe(dot);
    });
  }
});