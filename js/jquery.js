$(document).ready(function(){
  $('.pilihan').click(function() {
      var name = $(this).attr('id');
      
      if (name == "_about") {
        $('.isi').load('about.html');
      } else if (name == "_contact") {
          $('.isi').load('contact.html');
      } else if (name == "_love") {
        $('.isi').load('ilu.html');
    }
  });
  $('.isi').load('blank.html');
  $('#background').hover(function() {
      $('.isi').load('blank.html');
  })
});