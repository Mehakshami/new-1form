const form = document.getElementById('loginForm');
const cardOutput = document.getElementById('cardOutput');
const previewImg = document.getElementById('previewImg');
const outputText = document.getElementById('outputText');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const image = document.getElementById('profileImage').files[0];

  if (image) {
    const reader = new FileReader();
    reader.onload = function (e) {
      previewImg.src = e.target.result;
    };
    reader.readAsDataURL(image);
  } else {
    previewImg.src = '';
  }

  outputText.innerHTML = `<strong>Username:</strong> ${username}<br><strong>Email:</strong> ${email}`;
  cardOutput.style.display = 'block';
});