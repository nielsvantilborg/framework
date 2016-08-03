(function($){
  $(function(){  
    var scroll = $(window).scrollTop();
    var headerHeight = $('.stickyScroll').outerHeight();
    
    $(window).scroll(function() {
      var scrolled = $(window).scrollTop();
      if (scrolled > headerHeight){
        $('.stickyScroll').addClass('off-canvas');
      } else {
        $('.stickyScroll').removeClass('off-canvas');
      }

        if (scrolled > scroll){
         $('.stickyScroll').removeClass('fixed');
        } else {
        $('.stickyScroll').addClass('fixed');
        }             
      scroll = $(window).scrollTop();  
     });
       
   });
})(jQuery); 