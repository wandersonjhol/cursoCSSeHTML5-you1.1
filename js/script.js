$(function(){

    //abre e fecha MENU.
    $('.nav-toggle, .nav-close').click(function(e){
        e.preventDefault();
        $('.nav').toggleClass('active');
    });

    //FIXAR HEADER
    $(window).scroll(function(){//Todo esse código faz com que o header suma quando a página está parada, quando eu rolo a barrra de rolagem ele aparece.
        if($(this).scrollTop() > 100){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }
    });
});
