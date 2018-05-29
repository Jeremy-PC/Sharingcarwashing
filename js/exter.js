<!-- script-for-menu -->
(function ($) {
    $( "span.menu" ).click(function() {
            $( "ul.res" ).slideToggle( 300, function() {
            });
        });
})(jQuery);
<!-- /script-for-menu -->

// flexslider
(function ($) {
    $(window).load(function(){
        $('.flexslider').flexslider({
            animation: "slide",
            start: function(slider){
                $('body').removeClass('loading');
            }
        });
    });
})(jQuery);
// gallery
(function ($) {
$(document).ready(function(){
    $('.nivo-lightbox-demo a').nivoLightbox({ effect: 'fade'});
});
})(jQuery);

(function ($) {
    $("#slider").responsiveSlides({
        auto: true,
        speed: 500,
        namespace: "callbacks",
        pager: false,
        nav:true,
    });
})(jQuery);