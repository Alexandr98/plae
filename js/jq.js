jQuery('#fader img:gt(0)').hide();

setInterval(function(){
 jQuery('#fader :first-child')
 .fadeTo(500, 0)
 .next('img')
 .fadeTo(500, 2)
 .end()
 .appendTo('#fader');
}, 4000);
 $(document).ready(function(){
    $("#intro").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
 
