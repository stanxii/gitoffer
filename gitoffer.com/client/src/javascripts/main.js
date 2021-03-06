$(function(){
    $('.nav-recommend').hover (
    function() {
        $(this).grumble(
            {
                text: '￥1500',
                sizeRange: 50,
                angle: 90,
                distance: 50,
                showAfter: 0,
                hideAfter: 2000
            }
        );
    },
    function() {
        $(this).grumble(
            {
                text: '￥1500',
                sizeRange: 50,
                angle: 90,
                distance: 50,
                hideAfter: 1000
            }
        );
    });
    $('.right-info').click (
        function() {
            $('.welcome').hide();
            $('.require').addClass("margin-top:85px");
        }
    );
    $('.setbtn').click(function(e) {
        e.stopPropagation();
        $('.set-nav').removeClass('hide');
    });
    $(document).click(function() {
        if(!$('.set-nav').hasClass("hide")) {
            $('.set-nav').addClass("hide");
        }
    });
});
