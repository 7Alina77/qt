let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }
});

const apple = document.querySelector('#apple');
const accessories = document.querySelector('#accessories');
const other = document.querySelector('#other');
const repair = document.querySelector('#repair');
const sectionApple = document.querySelector('.apple');
const sectionAccessories = document.querySelector('.accessories');
const sectionOther = document.querySelector('.other-firms');
const sectionRepair = document.querySelector('.repair');

const scrollTo = (from,to) => {
  from.addEventListener('click', () => {
    to.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  })
};

scrollTo(apple, sectionApple);
scrollTo(accessories,sectionAccessories);
scrollTo(other, sectionOther);
scrollTo(repair, sectionRepair);