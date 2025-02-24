document.querySelectorAll('.button, .button2').forEach(button => {
    button.addEventListener('mousemove', function(e) {
      // Get the position of the element relative to the viewport
      const rect = button.getBoundingClientRect();
      // Calculate the position of the mouse pointer relative to the element
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      // Set CSS custom properties (--x and --y) on the button element
      button.style.setProperty('--x', `${x}px`);
      button.style.setProperty('--y', `${y}px`);
    });
  });

const buttonforuse = document.querySelector('.button');
const buttonforuse2 = document.querySelector('.button2');
const menu = document.querySelector(".mainnav");
const interiormenu = document.querySelector('.hamburgermenu');

buttonforuse.addEventListener("click", (e) => {
    console.log("clicked");
    e.stopPropagation();  // Stop event from propagating to the document
    interiormenu.classList.toggle("showMenu");
    menu.classList.toggle("opacityChange");
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    interiormenu.classList.remove("showMenu");
    menu.classList.remove("opacityChange");
  });
});

document.addEventListener('click', (event) => {
  const isClickInsideMenu = interiormenu.contains(event.target) || buttonforuse.contains(event.target);
  if (!isClickInsideMenu) {
    interiormenu.classList.remove("showMenu");
    menu.classList.remove("opacityChange");
  }
});

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

// Link buttons to texts
const buttons = document.querySelectorAll('#two > section:nth-of-type(3) ul:nth-of-type(1) button');
const texts = document.querySelectorAll('#two > section:nth-of-type(3) ul:nth-of-type(2) li');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    texts.forEach(text => text.style.display = 'none');
    texts[index].style.display = 'grid';
  });
});

document.querySelectorAll('#two > section:nth-of-type(3) ul:nth-of-type(1) li button').forEach(button => {
  button.addEventListener('click', function() {
    console.log("Button clicked:", this);
    document.querySelectorAll('#two > section:nth-of-type(3) ul:nth-of-type(1) li button').forEach(btn => {
      btn.classList.remove('clicked');
    });
    this.classList.add('clicked');
  });
});

