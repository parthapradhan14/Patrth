// script for nav - FAQs related to Bus Tickets Booking
function changeContent(contentId) {
    $('.tab-content').hide();
    $('#' + contentId).show();
}
// end script for FAQs related to Bus Tickets Booking

// start script for accordian - FAQs related to Bus Tickets Booking
$('.faqQUEST').click(function(){

    $(this).next().slideToggle(200);
    $(this).parent().siblings().find('.faqANS').slideUp(200);

    $(this).find('.fa-plus').toggle();
    $(this).find('.minus').toggle();

    $(this).parent().siblings().find('.minus').hide();
    $(this).parent().siblings().find('.fa-plus').show();

});
// end script for accordian - FAQs related to Bus Tickets Booking

// start script for header slider
$(document).ready(function(){
    $('#header_slider').owlCarousel({
        dots:false,
        loop: true,
        margin: 10,
        // nav:true,
        autoplay: true,
        // dots:false,
        slidespeed: 200,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1024: {
                items: 4
            }
        }
    });
});
//  end script here for header slider


// select date from header form

$(document).ready(function(){
    $('#datepicker').datepicker({
        format: 'yyyy-mm-dd', // Change the format as needed
        autoclose: true
    });
});

