/**
 * VisalKalvi — Connection Box Rotating Text Animation
 */

document.addEventListener('DOMContentLoaded', () => {
  const phrases = ['Future Ready Career', 'Build Future Together'];
  let phraseIndex = 0;
  
  // Try to find elements on either home or about page
  const rotEl = document.getElementById('rotatingText') || document.getElementById('rotatingTextAbout');
  
  if (rotEl) {
    setInterval(() => {
      rotEl.style.opacity = '0';
      rotEl.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        rotEl.textContent = phrases[phraseIndex];
        rotEl.style.opacity = '1';
        rotEl.style.transform = 'translateY(0)';
      }, 400);
    }, 3000);
  }
});
