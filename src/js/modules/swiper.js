import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 800,

  Keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
});

export default swiper;
