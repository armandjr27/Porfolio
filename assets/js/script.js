$(function(){
    $('.nav-link').click(function(){
        $(this).addClass('active');
    });

    const year = new Date();
    $("#year-copyright").html(year.getFullYear());
});