/**
 * Created by Administrator on 2017/2/17.
 */
$(function () {

    $('.swipe-container').fullpage({
        verticalCentered: !1,
        // 'continuousVertical': true,
        // 'navigation': true,
        onLeave: function (index, nextIndex, direction) {
            if (index == 1 && direction == "down") {
                $('.words_show #a1').fadeOut(0, function () {
                    $('.words_show #a2').fadeOut(0, function () {
                        $('.words_show #a3').delay(20).fadeOut(0, function () {
                            $('.words_show #a4').fadeOut(0);
                            $('.words_show #a5').delay(50).fadeOut(0);
                        });
                    });
                });
                $('.dot>div:nth-of-type(1)').removeClass('active')
            }
            if (index == 2 && direction == 'down') {
                $('#word_box').css({
                    display: 'none'
                });
                $('.dot>div:nth-of-type(2)').removeClass('active')

            }
            if (index == 3 && direction == 'down') {
                $('#word_box3').css({
                    display: 'none'
                });
                $('.dot>div:nth-of-type(3)').removeClass('active')
            }
            if (index == 4 && direction == 'down') {
                $('#word_box4').css({
                    display: 'none'
                });
                $('.dot>div:nth-of-type(4)').removeClass('active')
            }

            if (index == 5 && direction == 'down') {
                $('#word_box5').css({
                    display: 'none'
                });
                $('.dot>div:nth-of-type(5)').removeClass('active')
            }

            if (index == 6 && direction == 'down') {
                $('#word_box6').css({
                    display: 'none'
                });

            }

            if (index == 5 && direction == 'up') {
                $('.dot>div:nth-of-type(5)').removeClass('active')
            }
            if (index == 4 && direction == 'up') {
                $('.dot>div:nth-of-type(4)').removeClass('active')
            }
            if (index == 3 && direction == 'up') {
                $('.dot>div:nth-of-type(3)').removeClass('active')
            }
            if (index == 2 && direction == 'up') {
                $('.dot>div:nth-of-type(2)').removeClass('active')
            }
            if (index == 1 && direction == 'up') {
                $('.dot>div:nth-of-type(1)').addClass('active')
            }


        },
        afterLoad: function (dot, index) {
            console.log(index);
            if (index == 1) {
                $('.words_show #a1').fadeIn(3000, function () {
                    $('.words_show #a2').fadeIn(3000, function () {
                        $('.words_show #a3').delay(20).fadeIn(2000, function () {
                            $('.words_show #a4').fadeIn(1000);
                            $('.words_show #a5').delay(50).fadeIn(3000);

                        });
                    });
                });
                $('.arrowx').css({
                    display: 'block'
                });
                $('.arrows').css({
                    display: 'none'
                });
            }
            if (index == 2) {
                $('#word_box').fadeIn(5000);
                $('.dot div:nth-of-type(2)').addClass('active')
            }
            if (index == 3) {
                $('#word_box3').fadeIn(5000);
                $('.dot div:nth-of-type(3)').addClass('active')
            }
            if (index == 4) {
                $('#word_box4').fadeIn(5000);
                $('.dot div:nth-of-type(4)').addClass('active')
            }
            if (index == 5) {
                $('#word_box5').fadeIn(5000);
                $('.dot div:nth-of-type(5)').addClass('active')
            }
            if (index == 6) {
                $('#word_box6').fadeIn(5000);
                $('.arrowx').css({
                    display: 'none'
                });
                $('.arrows').css({
                    display: 'block'
                });
                $('#share').css({
                    display: 'block'
                });
                $('.dot div:nth-of-type(6)').addClass('active');
                $('#video_play').css({display: 'none'});
            }
            if (index != 6) {
                $('#share').css({
                    display: 'none'
                });
                $('.dot div:nth-of-type(6)').removeClass('active')
            }
        }
    });

// 导航条
    $('#menu').click(function () {
        $('.menu_holder').fadeToggle(2000);
        $('#menu').css({
            display: 'none'
        });
        $('#menu2').css({
            display: 'block'
        })
    });
    $('#menu2').click(function () {
        $('.menu_holder').fadeToggle(1000);
        $('#menu2').css({
            display: 'none'
        });
        $('#menu').css({
            display: 'block'
        })
    });
});
$('#menu3').mouseover(function () {
    $('#menu3').css({
        display: 'none'
    });
    $('#menu4').css({
        display: 'block'
    })
});
$('#menu4').click(function () {
    $('.box_line').css({
        display: 'block',
    });
    $('.words_show').css({
        display: 'block'
    });
    $('#menu4').css({
        display: 'none'
    });


});


// function setImg(){
//     setInterval(function () {
//         $('.bgi').animate({
//             '-webkit-transform': 'scale(1)',
//             '-moz-transform': 'scale(1)',
//             'transform': 'scale(1)'
//         })
//     },1000);
// }

function play() {
    // alert(11)
    // var myVideo = document.getElementById('video');
    // myVideo.play();
    console.log(111);
    $('.box_line').css({
        display: 'none',
    });
    $('.words_show').css({
        display: 'none'
    });
    $("#menu3").css({
        display: 'block',
        opacity: '0.5'
    });
}

