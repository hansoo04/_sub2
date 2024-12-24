$(function(){
    $('.trim-space ul li:first label').addClass('trim-on')
    $('.trim-space ul li label').click(function(){
        $('.trim-space ul li label').removeClass('trim-on')
        $(this).addClass('trim-on')
    })
    $('.car-list ul').hide()
    $('.car-list').click(function(){
        if ($('.car-list ul').is(':hidden')) {
            $('.car-list ul').slideDown();
            $('.car-list img').css('transform', 'rotate(180deg)');
        } else {
            $('.car-list ul').slideUp();
            $('.car-list img').css('transform', 'rotate(0deg)');
        }
    });



    
})