// hide and show sidebar
const navBtn = document.getElementById('nav-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');

navBtn.addEventListener('click', function() {
  sidebar.classList.add('show-sidebar');
});

closeBtn.addEventListener('click', function() {
  sidebar.classList.remove('show-sidebar');
});

//fixed navbar
const navbar = document.getElementById('nav');

window.addEventListener('scroll', function() {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});

