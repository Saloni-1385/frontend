const form = document.getElementById('companyForm');
const resetBtn = document.getElementById('resetBtn');
const showName = document.getElementById('showName');
const showMotto = document.getElementById('showMotto');
const showPhoto = document.getElementById('showPhoto');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const companyName = document.getElementById('companyName').value.trim();
  const motto = document.getElementById('motto').value.trim();
  const photoUrl = document.getElementById('photoUrl').value.trim();

  showName.textContent = `Company Name: ${companyName}`;
  showMotto.textContent = `Motto: "${motto}"`;
  showPhoto.src = photoUrl;
  showPhoto.style.display = 'block';

  alert('Company info submitted successfully!');
});
const eye = document.getElementById('eye');
const pupil = document.getElementById('pupil');

document.addEventListener('mousemove', event => {
  const rect = eye.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const maxPupilMove = (rect.width / 2) - (pupil.offsetWidth / 2) - 5;

  const deltaX = event.clientX - centerX;
  const deltaY = event.clientY - centerY;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  const maxDistance = maxPupilMove;
  const distanceRatio = Math.min(distance, maxDistance) / distance || 0;

  const pupilX = deltaX * distanceRatio;
  const pupilY = deltaY * distanceRatio;

  pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
});

resetBtn.addEventListener('click', () => {
  showName.textContent = '';
  showMotto.textContent = '';
  showPhoto.src = '';
  showPhoto.style.display = 'none';
});
