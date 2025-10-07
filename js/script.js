//drawer
$("#js-drawer__icon").on("click", function (e) {
  e.preventDefault();
  $("#js-drawer__icon").toggleClass("is-checked");
  $("#js-drawer__content").toggleClass("is-checked");
  //  $("#js-drawer__content").slideToggle("is-checked");
});

//-----------------------------------------------------

//-----------------------------------------------------
//スムーズスクロール
$('#js-drawer__content a[href^="#"]').on("click", function (e) {
  $("#js-drawer__icon").removeClass("is-checked");
  $("#js-drawer__content").removeClass("is-checked");
});
//-----------------------------------------------------

//-----------------------------------------------------
//pc
$('a[href^="#"]').on("click", function (e) {
  const speed = 1000;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const position = jQuery(target).offset().top;

  $("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing"
  );
});
//-----------------------------------------------------

//-----------------------------------------------------
//swiper about
const swiperAbout = new Swiper(".swiper-about", {
  loop: true, // ループ有効
  slidesPerView: 4, // 一度に表示する枚数
  speed: 6000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    delay: 0, // 途切れなくループ
  },

  breakpoints: {
    957: {
      slidesPerView: 8,
    },
  },
});
//-----------------------------------------------------

//-----------------------------------------------------
//cord
$(function () {
  const $cards = $(".prizes__card");
  const $ups = $(".prizes__card--up");
  const $overlay = $(".prizes__overlay");

  // 開くとき
  $cards.on("click", function () {
    const index = $cards.index(this);

    // すべて閉じる
    $ups.removeClass("is-active");
    $overlay.removeClass("is-active");
    $("body, html").removeClass("is-fixed");

    // 対応するupと背景を表示
    const $targetUp = $ups.eq(index);
    if ($targetUp.length) {
      $targetUp.addClass("is-active");
      $overlay.addClass("is-active");
      $("body, html").addClass("is-fixed");
    }
  });

  // ボタンで閉じる
  $(".prizes__card--button").on("click", function () {
    $(this).closest(".prizes__card--up").removeClass("is-active");
    $overlay.removeClass("is-active");
    $("body, html").removeClass("is-fixed");
  });

  // 背景クリックで閉じる
  $overlay.on("click", function () {
    $ups.removeClass("is-active");
    $(this).removeClass("is-active");
    $("body, html").removeClass("is-fixed");
  });
});

//-----------------------------------------------------

//-----------------------------------------------------
// spots
window.addEventListener("load", () => {
  const swiperSpots = new Swiper("#js-gallery-swiper__spots", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    centeredSlides: true,
    initialSlide: 0,
    slidesOffsetBefore: 70,
    breakpoints: {
      957: {
        spaceBetween: 32,
        centeredSlides: false,
        slidesOffsetBefore: 70,
      },
    },
    pagination: {
      el: "#js-gallery-pagination__spots",
    },
    navigation: {
      nextEl: "#js-gallery-next__spots",
      prevEl: "#js-gallery-prev__spots",
    },
  });
});

//-----------------------------------------------------

//-----------------------------------------------------
//qa
$(".js-accordion").on("click", function (e) {
  e.preventDefault();
  if ($(this).parent().hasClass("is-open")) {
    $(this).parent().removeClass("is-open");
    $(this).next().slideUp();
  } else {
    $(this).parent().addClass("is-open");
    $(this).next().slideDown();
  }
});
//-----------------------------------------------------

//-----------------------------------------------------
//contact
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const nameInput = document.querySelector("#your-name");
  const emailInput = document.querySelector("#your-email");
  const selectInput = document.querySelector("#your-age");
  const messageInput = document.querySelector("#your-message");

  // 元の placeholder を保存
  const placeholders = {
    name: nameInput.placeholder,
    email: emailInput.placeholder,
    select: selectInput.options[0].text,
    message: messageInput.placeholder,
  };

  // 1. フォーカス時にエラーリセット
  [nameInput, emailInput, selectInput, messageInput].forEach((input) => {
    input.addEventListener("focus", () => {
      input.classList.remove("error");

      switch (input) {
        case nameInput:
          input.placeholder = placeholders.name;
          break;
        case emailInput:
          input.placeholder = placeholders.email;
          break;
        case selectInput:
          selectInput.options[0].text = placeholders.select;
          break;
        case messageInput:
          input.placeholder = placeholders.message;
          break;
      }
    });
  });

  // 2. フォーム送信時チェック
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let hasError = false;

    // 名前チェック
    if (nameInput.value.trim() === "") {
      nameInput.classList.add("error");
      nameInput.placeholder = "誤った入力内容";
      hasError = true;
    }

    // メールチェック
    if (emailInput.value.trim() === "") {
      emailInput.classList.add("error");
      emailInput.placeholder = "誤った入力内容";
      hasError = true;
    }

    // セレクトチェック
    if (selectInput.selectedIndex === 0) {
      selectInput.classList.add("error");
      selectInput.options[0].text = "選択してください";
      hasError = true;
    } else {
      selectInput.classList.remove("error");
      selectInput.options[0].text = placeholders.select;
    }

    // メッセージチェック
    if (messageInput.value.trim() === "") {
      messageInput.classList.add("error");
      hasError = true;
    }

    if (!hasError) {
      alert("送信可能です！");
      form.reset();

      // 全て元の文字に戻す
      nameInput.placeholder = placeholders.name;
      emailInput.placeholder = placeholders.email;
      selectInput.options[0].text = placeholders.select;
      messageInput.placeholder = placeholders.message;
    }
  });
});

//-----------------------------------------------------

//-----------------------------------------------------
//page-top
$(window).on("scroll", function () {
  if (300 < $(window).scrollTop()) {
    $("#js-page-top").addClass("is-show");
  } else {
    $("#js-page-top").removeClass("is-show");
  }
});
//-----------------------------------------------------
