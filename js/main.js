// window.onscroll = function(){
//   var countScroll = window.pageYOffset || document.document.Element.scrollTop;
//   console.log(countScroll);
//
//   var headerElem = document.getElementById('header');
//   if(countScroll > 100){
//     headerElem.classList.add('fixedHeader');
//   }else if(headerElem.classList.contains('fixedHeader') && window.pageYOffset < headerElem){
//     headerElem.classList.remove('fixedHeader');
//   }
// }
$(document).scroll (function(){
  if($(document).scrollTop () > $('#header').height () + 10){
    $('#header').addClass('fixedHeader');
  }
  else{
    $('#header').removeClass('fixedHeader');
  }
});
