new WOW().init();
$(document).scroll(function () {
  if ($(document).scrollTop() > $('#header').height() + 10) {
    $('#header').addClass('fixedHeader');
  } else {
    $('#header').removeClass('fixedHeader');
  }
});

$('.foto1').hover(
  function () {
    $('#wrap1').css('display', 'block');
  },
  function () {
    $('#wrap1').css('display', 'none');
  });

$('.foto2').hover(
  function () {
    $('#wrap2').css('display', 'block');
  },
  function () {
    $('#wrap2').css('display', 'none');
  });

$('.foto3').hover(
  function () {
    $('#wrap3').css('display', 'block');
  },
  function () {
    $('#wrap3').css('display', 'none');
  });

$('.foto4').hover(
  function () {
    $('#wrap4').css('display', 'block');
  },
  function () {
    $('#wrap4').css('display', 'none');
  });

$('.foto5').hover(
  function () {
    $('#wrap5').css('display', 'block');
  },
  function () {
    $('#wrap5').css('display', 'none');
  });

$('.foto6').hover(
  function () {
    $('#wrap6').css('display', 'block');
  },
  function () {
    $('#wrap6').css('display', 'none');
  });

$('.foto7').hover(
  function () {
    $('#wrap7').css('display', 'block');
  },
  function () {
    $('#wrap7').css('display', 'none');
  });

$('.foto8').hover(
  function () {
    $('#wrap8').css('display', 'block');
  },
  function () {
    $('#wrap8').css('display', 'none');
  });