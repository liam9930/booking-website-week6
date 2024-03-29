import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");


$(".needs-validation").each(function (index) {
    $(this).on("submit", function (e) {
      e.preventDefault();
      $(this).addClass("was-validated");
    });
});

const swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  grabCursor: true,
  loop: true, // 設置為循環播放
  slidesPerView: "auto",
  preloadImages: true,
  autoplay: {
    delay: 0, // 自動播放間隔時間（單位：毫秒）
    disableOnInteraction: false
  },
  lazy: {
    loadPrevNext: true
  },
  speed: 20000 // 滑動速度（單位：毫秒）
});

  