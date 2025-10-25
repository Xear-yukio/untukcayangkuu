document.addEventListener('DOMContentLoaded', () => {
  const musicBtn = document.getElementById('music-play');
  const audio = new Audio('music.mp3');
  audio.loop = true;
  musicBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      musicBtn.textContent = '⏸';
    } else {
      audio.pause();
      musicBtn.textContent = '▶';
    }
  });

  const galleryGrid = document.getElementById('gallery-grid');
  const images = [
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/4.jpg',
  'images/5.jpg',
  'images/6.jpg',
  'images/7.jpg',
  'images/8.jpg'
];
  galleryGrid.innerHTML = images.map((src, i) => 
    `<figure class='thumb'><img src='${src}' alt='Kenangan ${i+1}'><figcaption>Kenangan ${i+1}</figcaption></figure>`
  ).join('');
});
