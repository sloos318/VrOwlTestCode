// const fishTemplate = document.querySelector('#fish-template');
// const fishContainer = document.getElementById('fish-container') || document.body;

// function createFish() {
//   const fish = fishTemplate.querySelector('.fish').cloneNode(true);

//   // Randomize direction: true = down, false = up
//   const swimDown = Math.random() > 0.5;
//   const scale = 0.7 + Math.random() * 1.2;
//   const left = Math.random() * 90; // 0% to 90% of viewport width
//   const duration = (6 + Math.random() * 4); // seconds

//   fish.style.left = left + 'vw';
//   fish.style.transform = `rotate(${swimDown ? -90 : 90}deg) scale(${scale})`;
//   fish.style.visibility = 'visible';
//   fish.classList.remove('fish');
//   fish.classList.add('fish');

//   // Set animation for swimming up or down
//   fish.style.animationName = swimDown ? 'swimDownCSS' : 'swimUpCSS';
//   fish.style.animationDuration = duration + 's';
//   fish.style.animationTimingFunction = 'linear';
//   fish.style.animationFillMode = 'forwards';

//   fishContainer.appendChild(fish);

//   fish.addEventListener('animationend', () => {
//     fish.remove();
//   });


// }

// setInterval(() => {
//   createFish();
// }, 800 + Math.random() * 1200);
