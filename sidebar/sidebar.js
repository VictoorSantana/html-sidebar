
$(document).ready(function() {
  $('.sideb-itemHead').click(function () {
    if($(this).parent().hasClass('sideb-itemContainer-closed')) {
      $(this).parent().removeClass('sideb-itemContainer-closed');
      $(this).parent().addClass('sideb-itemContainer-opened');
    } else {
      $(this).parent().addClass('sideb-itemContainer-closed');
      $(this).parent().removeClass('sideb-itemContainer-opened');
    }
  });
});

function sidebar(toOpen = false) {
  if(toOpen) {
    $('#sidebar').removeClass('sideb-closed');
    $('#sidebar').addClass('sideb-opened');
  } else {
    $('#sidebar').removeClass('sideb-opened');
    $('#sidebar').addClass('sideb-closed');
  }
}
