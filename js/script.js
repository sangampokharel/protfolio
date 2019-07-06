$(document).ready(function(){
    $('.loading').fadeOut(3000,function(){
        $(".container").fadeIn(1000);
    });

   $(document).scroll(function(){
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 100) {
            $(".navbar").css('background-color', 'grey');
        } else{
            $(".navbar").css('background-color', '');
        }
    });

   });

   new WOW().init();
})