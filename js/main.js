



$(document).ready(function() {

    $('.btn-1').click(function() {
        $('.item-card-1').animate({height: 'toggle', display: 'block'});
    });  
    $('.btn-2').click(function() {
        $('.item-card-2').animate({height: 'toggle', display: 'block'});
    });
    $('.btn-3').click(function() {
        $('.item-card-3').animate({height: 'toggle', display: 'block'});
    });

    $('.btn-left').click(function() {
        $('.item-card-1').animate({height: 'toggle', display: 'none'});
    });    
    $('.btn-middle').click(function() {
        $('.item-card-2').animate({height: 'toggle', display: 'none'});
    });
    $('.btn-right').click(function() {
        $('.item-card-3').animate({height: 'toggle', display: 'none'});
    });
        

    //menu-btn toggle
    $('.nav-btn').click(function() {
        $('.main-nav').toggleClass('visible');
        $('.line').toggleClass('switch');
    });
    
    $("#wrapper").click( function() {
        $(".icon").toggleClass("close");
    });

    //show cart
    $('.cart-icon').click(function() {
        $('.shopping-cart').toggleClass("show-cart");
    });

});




var striker = 3249.99;
var bigBoy = 1999.99;
var veneno = 1449.99;

