const bouncePaths = [
  "M0,50 Q80,100 400,50 V150 H0 V50",  // Up
  "M0,50 Q80,0 400,50 V150 H0 V50",    // Curve tight
  "M0,50 Q80,80 400,50 V150 H0 V50",   // Loosen back
  "M0,50 Q80,45 400,50 V150 H0 V50",   // Settle
  "M0,50 Q80,50 400,50 V150 H0 V50"    // Final resting
];

const originalPath = "M0,200 Q80,100 400,200 V150 H0 V50"; // Initial flat

// Morph controller
function runBounce(pathEl, paths, isReversing = false) {
  let index = isReversing ? paths.length - 1 : 0;

  function animate() {
    pathEl.setAttribute('d', isReversing ? paths[index] : paths[index]);

    if ((!isReversing && index < paths.length - 1) || (isReversing && index > 0)) {
      index += isReversing ? -1 : 1;
      setTimeout(() => requestAnimationFrame(animate), 80);
    } else {
      if (isReversing) pathEl.setAttribute("d", originalPath);
    }
  }

  animate();
}

// Attach to all cards
document.querySelectorAll('.project-card').forEach(card => {
  const path = card.querySelector('.card-curve-path');
  if (!path) return;

  card.addEventListener('mouseenter', () => runBounce(path, bouncePaths, false));
  card.addEventListener('mouseleave', () => runBounce(path, bouncePaths, true));
});
