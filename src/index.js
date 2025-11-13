const modal = document.querySelector('[data-modal]');
const overlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close');

// кнопки с data-атрибутом
const openButtons = document.querySelectorAll('[data-modal-open]');

// функция открытия
function openModal() {
  modal.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // блокируем прокрутку
}

// функция закрытия
function closeModal() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = ''; // возвращаем прокрутку
}

// клик по кнопкам с data-modal-open
openButtons.forEach(button => {
  button.addEventListener('click', openModal);
});

// клик по крестику
closeBtn.addEventListener('click', closeModal);

// клик по фону
overlay.addEventListener('click', closeModal);


//review
const reviews = document.querySelectorAll(".review-card");
const dots = document.querySelectorAll(".pagination-1");
const leftArrow = document.querySelector(".arrow:not(.arrow-right)");
const rightArrow = document.querySelector(".arrow-right");

let current = 0;

function showReview(index) {
  reviews.forEach((review, i) => {
    review.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
}

rightArrow.addEventListener("click", () => {
  current = (current + 1) % reviews.length;
  showReview(current);
});

leftArrow.addEventListener("click", () => {
  current = (current - 1 + reviews.length) % reviews.length;
  showReview(current);
});

// чтобы работала и кликабельная пагинация:
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    current = i;
    showReview(current);
  });
});
