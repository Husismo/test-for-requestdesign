import "./styles/index.scss";
import "slick-carousel";
import $ from "jquery";

$(".carousel__wrapper").slick({
  dots: true,
  centerMode: true,
  fade: true,
  nextArrow:
    '<svg class="slick-arrow slick-next" xmlns="http://www.w3.org/2000/svg" width="106" height="23" viewBox="0 0 106 23" fill="none"><path d="M94 1L104.5 11.5M104.5 11.5L94 22M104.5 11.5H0" stroke="#292D32" stroke-width="1.5"/></svg>',
});

$(".drop").hover(
  function () {
    $(".drop-down__menu").stop(false, true).fadeIn(300);
  },
  function () {
    $(".drop-down__menu").stop(false, true).fadeOut(300);
  }
);

let isOpenMenu = false;

$(".burger").on("click", function () {
  if (!isOpenMenu) {
    isOpenMenu = true;
    $(".header__nav").css("display", "flex");
    $(".cross-icon").css("display", "block");
    $(".burger-icon").css("display", "none");
  } else if (isOpenMenu) {
    isOpenMenu = false;
    $(".header__nav").css("display", "none");
    $(".cross-icon").css("display", "none");
    $(".burger-icon").css("display", "block");
  }
});

let checkForm = () => {
  let name = $(".form__name").val().trim();
  let phone = $(".form__phone").val();
  $(".form__phone").css("border-color", "rgba(242, 242, 242, 0.5)");
  $(".form__name").css("border-color", "rgba(242, 242, 242, 0.5)");
  if (name.length < 2) {
    $(".form__name").css("border-color", "red");
    return false;
  } else if (phone.length != 11) {
    $(".form__phone").css("border-color", "red");
    return false;
  } else {
    return true;
  }
};

$(".form__btn").on("click", function (event) {
  event.preventDefault();
  if (checkForm()) {
    let data = {
      name: $(".form__name").val().trim(),
      phone: $(".form__phone").val(),
      comment: $(".form__textarea").val().trim(),
    };
    console.log(data);
  }
});
