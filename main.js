import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");


$(".needs-validation").each(function (index) {
    $(this).on("submit", function (e) {
      e.preventDefault();
      $(this).addClass("was-validated");
    });
});
  