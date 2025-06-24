import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import './modules/accordion-anim.js';
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);


Fancybox.bind("[data-fancybox]", {
  closeButton: true,
});

// Инициализация слайдера galSlider
document.querySelectorAll('.galSlider').forEach(n => {
  const mySwiperGal = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 600,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
    navigation: {
      prevEl: n.closest('.galSliderW').querySelector('.navArrowPrev'),
      nextEl: n.closest('.galSliderW').querySelector('.navArrowNext'),
    },
    pagination: {
      el: n.closest('.galSliderW').querySelector('.swiper-pagination'),
      clickable: true,
      type: 'bullets',
    },
  });
});
