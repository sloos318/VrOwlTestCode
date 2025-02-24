document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.imgingrid').forEach(function(tile) {
    const imageUrl = tile.getAttribute('data-image');
    // Remove redundant JavaScript that was handling the hover effect
  });

  // Initialize the typewriter effect
  document.querySelectorAll('[data-typewriter]').forEach(el => {
    new Typewriter(el, { repeat: true });
  });
});

class Typewriter {
  constructor(el, options) {
    this.el = el;
    this.words = el.dataset.typewriter.split(',');
    this.speed = options?.speed || 100;
    this.delay = options?.delay || 1500;
    this.repeat = options?.repeat;
    this.initTyping();
  }

  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  toggleTyping() {
    this.el.classList.toggle('typing');
  }

  async typewrite(word) {
    await this.wait(this.delay);
    this.toggleTyping();
    for (const letter of word.split('')) {
      this.el.textContent += letter;
      await this.wait(this.speed);
    }
    this.toggleTyping();
    await this.wait(this.delay);
    this.toggleTyping();
    while (this.el.textContent.length) {
      this.el.textContent = this.el.textContent.slice(0, -1);
      await this.wait(this.speed);
    }
    this.toggleTyping();
  }

  async initTyping() {
    for (const word of this.words) {
      await this.typewrite(word);
    }
    if (this.repeat) {
      await this.initTyping();
    } else {
      this.el.style.animation = 'none';
    }
  }
}

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

let img1 = document.querySelector(".imgingrid1");

img1.onmousemove = function(e) {
  e.target.style.setProperty('--x',(100*e.offsetX/e.target.offsetWidth)+'%');
  e.target.style.setProperty('--y',(100*e.offsetY/e.target.offsetHeight)+'%'); 
}

let img2 = document.querySelector(" .imgingrid2 ");

img2.onmousemove = function(e) {
  e.target.style.setProperty('--x',(100*e.offsetX/e.target.offsetWidth)+'%');
  e.target.style.setProperty('--y',(100*e.offsetY/e.target.offsetHeight)+'%'); 
}

let img3 = document.querySelector(".imgingrid3");

img3.onmousemove = function(e) {
  e.target.style.setProperty('--x',(100*e.offsetX/e.target.offsetWidth)+'%');
  e.target.style.setProperty('--y',(100*e.offsetY/e.target.offsetHeight)+'%'); 
}

let img4 = document.querySelector(".imgingrid4");

img4.onmousemove = function(e) {
  e.target.style.setProperty('--x',(100*e.offsetX/e.target.offsetWidth)+'%');
  e.target.style.setProperty('--y',(100*e.offsetY/e.target.offsetHeight)+'%'); 
}

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

// New code to close menu on nav link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    interiormenu.classList.remove("showMenu");
    menu.classList.remove("opacityChange");
  });
});

// New code to close menu on click outside of it
document.addEventListener('click', (event) => {
  const isClickInsideMenu = interiormenu.contains(event.target) || buttonforuse.contains(event.target);
  if (!isClickInsideMenu) {
    interiormenu.classList.remove("showMenu");
    menu.classList.remove("opacityChange");
  }
});
