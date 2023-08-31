const slider = document.querySelector('.slider');
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPos = e.clientX;
  slider.style.cursor = 'grabbing';
});

slider.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const deltaX = e.clientX - startPos;
  slider.style.transform = `translateX(${prevTranslate + deltaX}px)`;
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
  slider.style.cursor = 'grab';
  prevTranslate = currentTranslate;
});

slider.addEventListener('mouseleave', () => {
  isDragging = false;
  slider.style.cursor = 'grab';
  prevTranslate = currentTranslate;
});
