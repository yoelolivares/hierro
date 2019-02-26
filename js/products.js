'use strict';

$('.js-open-card-info').on('click', function (e) {
    $(this).find('.item-description-card').animate({display: 'block', height: '100%'});
});

$('.js-close-card-info').on('click', function (e) {
    e.stopPropagation();
    $(this).parent().animate({display: 'block', height: '0%'});
});
