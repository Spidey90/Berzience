const heroSection = document.getElementById('hero_section');
const heroImage = document.getElementById('hero_image');

function syncHeroHeight() {
  heroSection.style.height = heroImage.offsetHeight + 'px';
}

window.addEventListener('load', syncHeroHeight);
window.addEventListener('resize', syncHeroHeight);