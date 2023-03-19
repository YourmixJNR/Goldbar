const toggleNav = document.getElementById('menu-bar');
const navbarBox = document.querySelector('.navbar-box');

toggleNav.addEventListener('change', function() {
  if (this.checked) {
    navbarBox.classList.add('open');
  } else {
    navbarBox.classList.remove('open');
  }
});

const links = document.querySelectorAll('.navbar-box a');

links.forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menu-bar').checked = false;
  });
});