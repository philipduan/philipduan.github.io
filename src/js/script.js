$(document).ready(function(){

    /* $(window).resize(function(){
        if( $(window).width() >= 600 ){
            var screenWidth = $(window).width();
            $('.menu').css({'width':screenWidth/5});
            $('.skills-grid').css({'height':screenWidth/5*3});
            $('.work').css({'width':screenWidth/5*3});
        } else{
            $('.menu').css({'width': '100%'});
            $('.skills-grid').css({'height':screenWidth*0.9});
            $('.work').css({'width':'90%'});
        }
    }); */

    $('.menu').on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        var $target = $(this.hash);
        $('html,body').animate({
            scrollTop: $target.offset().top - 15
        }, 600);
    });
});