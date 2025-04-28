// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  });
  
  // Плавный скролл по якорям
  document.querySelectorAll('.scroll-to').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
// Плавное появление секций при скролле
const sections = document.querySelectorAll('section');

const showSection = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('fade-up');
    }
  });
};

window.addEventListener('scroll', showSection);
window.addEventListener('load', showSection);

  
  // Открытие/закрытие модальных окон
  const modals = document.querySelectorAll('.modal');
  const openModalBtns = document.querySelectorAll('.btn-more');
  const closeBtns = document.querySelectorAll('.close');
  
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById(btn.getAttribute('data-modal'));
      modal.style.display = 'flex';
    });
  });
  
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentElement.parentElement.style.display = 'none';
    });
  });
  
  window.addEventListener('click', (e) => {
    modals.forEach(modal => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  
  // Фильтрация карточек портфолио
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(button => button.classList.remove('active'));
      btn.classList.add('active');
  
      const filter = btn.getAttribute('data-filter');
  
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  
  // Переключение темы светлая/тёмная
  const switchTheme = document.getElementById('switch');
  
  switchTheme.addEventListener('change', () => {
    document.body.classList.toggle('light');
  });
  
  // Анимация печати текста
  const typedTextSpan = document.getElementById('typed-text');
  const cursorSpan = document.querySelector('.cursor');
  
  const textArray = ["Данила Богачёв", "Фрилансер", "Веб-разработчик", "Дизайнер", "Монтажёр", "7 лет опыта"];
  const typingDelay = 100;
  const erasingDelay = 50;
  const newTextDelay = 2000;
  let textArrayIndex = 0;
  let charIndex = 0;
  
  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 500);
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  });
  
  // Анимация отправки формы
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.textContent = 'Отправлено ✔️';
    submitButton.disabled = true;
    submitButton.style.backgroundColor = 'var(--success-color)';
    submitButton.style.transform = 'scale(1.1)';
  
    setTimeout(() => {
      submitButton.textContent = 'Отправить';
      submitButton.disabled = false;
      submitButton.style.backgroundColor = '';
      submitButton.style.transform = 'scale(1)';
      form.reset();
    }, 3000);
  });
  
  // Запуск particles.js
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5,
        "random": false
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "out_mode": "out"
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        }
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        }
      }
    },
    "retina_detect": true
  });
  
  // Ripple-эффект на кнопках
document.querySelectorAll('.btn, .btn-more').forEach(button => {
    button.addEventListener('click', function (e) {
      const circle = document.createElement('span');
      circle.classList.add('ripple');
      this.appendChild(circle);
  
      const d = Math.max(this.clientWidth, this.clientHeight);
      circle.style.width = circle.style.height = `${d}px`;
      circle.style.left = `${e.clientX - this.offsetLeft - d / 2}px`;
      circle.style.top = `${e.clientY - this.offsetTop - d / 2}px`;
  
      setTimeout(() => circle.remove(), 600);
    });
  });
  