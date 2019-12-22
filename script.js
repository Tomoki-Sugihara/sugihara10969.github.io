$(function() {

if (window.matchMedia( "(max-width: 560px)" ).matches) {
  $('#header-menu').hide();
}

var checkOpen = 0;
$('#header-tag').click(
  function() {
  if (checkOpen == 0) {
    $('#header-menu').slideDown(300);
    checkOpen = 1;
  }else if (checkOpen == 1) {
    $('#header-menu').slideUp(300);
    checkOpen = 0;
  }
});

$('header').bgSwitcher({
  images: ['https://pas-pol.jp/wp-content/uploads/2014/11/main_visual_13-0x0.jpg',
           'https://pas-pol.jp/wp-content/uploads/2014/11/main_visual_2-0x0.jpg',
           'https://pas-pol.jp/wp-content/uploads/2014/11/main_visual_6-0x0.jpg',
           'https://pas-pol.jp/wp-content/uploads/2014/11/main_visual_7-0x0.jpg',
           'https://pas-pol.jp/wp-content/uploads/2014/11/main_visual_111-0x0.jpg'
  ],
  interval: 5000,
  effect: "fade"
});

$('#scrollTop').animate({'scrollTop':'0'},'slow');



});
