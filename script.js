const slideShow = document.getElementById('Slider');
const slides = slideShow.getElementsByTagName('video');


function toggleMenu(){
      const menuIcon = document.querySelector('.menuIcon');
      const navbar = document.getElementById('navbar');
      menuIcon.classList.toggle('active');
      navbar.classList.toggle('active');
  }