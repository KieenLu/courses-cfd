// detect 
var mdDetect = new MobileDetect(window.navigator.userAgent);
function isMobile() {
    if ($(window).width() <= sizeScreenMobile || mdDetect.phone() !== null) {
        return true;
    } else {
        return false;
    }
}

function isDesktop() {
    if (mdDetect.mobile() == null && mdDetect.phone() == null && mdDetect.tablet() == null) {
        return true;
    }
}


function homePage() {
    if ($('#main.homepage').length === 0) return;

    function teamSlider() {
        let $carouselGallery = $(".homepage .section-gallery .list"),
            $progressBar = $('.homepage .section-gallery .timeline .process');

        $carouselGallery.flickity({
            contain: true,
            wrapAround: false,
            freeScroll: true,
            cellAlign: 'left',
            lazyLoad: 3,
            imagesLoaded: true,
            prevNextButtons: false
        });
        // var flkty = $carousel.data('flickity');
        // var $imgs = $('.homepage .section-4 .list .carousel-cell img');

        // $carousel.on('scroll.flickity', function (event, progress) {
        //     flkty.slides.forEach(function (slide, i) {
        //         var img = $imgs[i];
        //         var x = (slide.target + flkty.x) * -1 / 14;
        //         img.style.transform = 'translateX( ' + x + 'px)';
        //     });
        // });

        $carouselGallery.on('scroll.flickity', function (event, progress) {
            progress = Math.max(0.05, Math.min(1, progress));
            $progressBar.width(progress * 100 + '%');
        });

        let ctrPrevGallery = $('.homepage .section-gallery .btn_ctr.prev'),
            ctrNextGallery = $('.homepage .section-gallery .btn_ctr.next');

        ctrPrevGallery.on('click', function () {
            $carouselGallery.flickity('previous');
        });
        ctrNextGallery.on('click', function () {
            $carouselGallery.flickity('next');
        });
    }

    teamSlider();

    function jarallax() {
        $('.jarallax').jarallax({
            speed: 0.7
        });
    }
    jarallax();


    // $('#video-intro').on('load', function () {
    //     frames[0].document.head.appendChild('<style>.ytp-scroll-min{display: none;}</style>');
    // })
    let videoIntroWrap = $('.section-different .videodif'),
        videoPopup = $('#popup-video .video-src'),
        src = videoIntroWrap.data('src');
    videoIntroWrap.click(function (e) {
        e.stopPropagation();
        videoPopup.html('<video controls autoplay loop><source src="' + src + '" type="video/mp4">Your browser does not support the video tag.</video>');
        setTimeout(() => {
            $('#popup-video').fadeIn(200)
        }, 200);
    });

    function closePopupVideo() {
        videoPopup.html('');
        $('#popup-video').fadeOut(200);
    }
    $('#popup-video .close').on('click', function () {
        closePopupVideo();
    });

    $(document).keyup(function (e) {
        if (e.key === "Escape") {
            closePopupVideo();
        }
    });

    // load video background
    function loadVideoBG() {
        let videoBgWrap = $('.banner .video-bg'),
            srcVideoBg = videoBgWrap.data('src');
        setTimeout(function () {
            videoBgWrap.html('<video autoplay loop muted><source src="' + srcVideoBg + '" type="video/mp4">Your browser does not support the video tag.</video>')
        }, 800);
    }
    if (isDesktop()) {
        loadVideoBG();
    }

    // $('.video').click(function () {
    //     $('.btn-video-intro').fadeIn(200);
    //     $('#video-intro')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    // })

    $('.icon-scrolldown').on('click', function () {
        $('html').animate({
            scrollTop: $('.banner').next().offset().top,
        }, 300)
    })

    // $('#video-intro')[0].contentWindow.postMessage('{"event":"command","func":"' + 'function(){console.log(1)}' + '","args":""}', '*');

    // $('a.stop-video').click(function(){
    //     $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    // });

    // $('a.pause-video').click(function(){
    //     $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    // });
}

function profilePage() {
    function profileTabClick() {
        $('.profile .tab-title a').on('click', function (e) {
            e.preventDefault();
            let i = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $('.profile .tab-content > *:eq(' + i + ')').css({
                display: 'block'
            }).siblings().css({
                display: 'none'
            })
        })
    }
    profileTabClick();
}

function courseDetailAccordion() {
    $('.accordion .accordion__title').on('click', function (e) {
        e.preventDefault();
        // $(this).closest('.accordion').siblings('.active').removeClass('active')
        $(this).next().stop().slideToggle(200);

        let $accordion = $(this).closest('.accordion');
        if ($accordion.hasClass('active')) {
            $accordion.removeClass('active')
        } else {
            $accordion.addClass('active')
        }
        $(this).closest('.accordion').siblings('.active').removeClass('active').find('.content').stop().slideUp(200);
    })
}
courseDetailAccordion();


function coursePage() {
    if ($('#main.course-detail').length === 0) return;
    $('.banner .video').on('click', function () {
        $('html').animate({
            scrollTop: $('.course-detail .section-2').offset().top - 60
        }, 300)
    })
}



$(document).ready(function () {

    homePage();
    profilePage();
    coursePage();


    $('.popup-login .close').on('click', function () {
        $('.popup-login').fadeOut(200)
    })

    $('.btn-open-login').on('click', function () {
        $('.popup-login').fadeIn(200)
    })

    $('.select .head').on('click', function (e) {
        e.stopPropagation();
        let $select = $(this).closest('.select');
        $select.find('.sub').fadeToggle(200, function () {
            if ($select.hasClass('active')) {
                $select.removeClass('active');
            } else {
                $select.addClass('active')
            }
        });
    })

    $('.select .sub a').on('click', function (e) {
        e.preventDefault();
        let value = $(this).text();
        $(this).closest('.select').find('.head').text(value);
        $(this).closest('.select').find('.sub').fadeOut(200);
    });



    $('body').on('click', function () {
        $('.select.active .sub').fadeOut(200);
        $('.select sub').fadeOut(200);
    })

    $('.menu-hambeger').on('click', function () {
        $('body').toggleClass('menu-is-show');
    });

    $('#header nav ul').on('click', function (e) {
        e.stopPropagation();
    })
    $('.overlay_nav').on('click', function (e) {
        $('body').removeClass('menu-is-show');
    });

    $(document).keyup(function (e) {
        if (e.key === "Escape") {
            $('body').removeClass('menu-is-show');
        }
    });


    function copyToClipboard(copyText) {
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        document.execCommand("copy");
    }

    $('.affiliate_token .copy').on('click', function () {
        var textToken = document.getElementById("tokenlink");
        copyToClipboard(textToken);
        $(this).html('Đã Copy')
    });

    $('.back-to-top').on('click', function () {
        $('html').animate({
            scrollTop: 0
        }, 300)
    });


    function testimonialSlider() {
        if ($('.section-testimonial').length) {
            var $carousel = $(".section-testimonial .images .list").flickity({
                contain: true,
                wrapAround: false,
                freeScroll: false,
                cellAlign: 'center',
                lazyLoad: 2,
                imagesLoaded: true,
                prevNextButtons: false,
                on: {
                    ready: function () {
                        let dotsSlideTes = $('.section-testimonial .flickity-page-dots');
                        let dotsNew = $('.section-testimonial .dots');
                        dotsSlideTes.appendTo(dotsNew);
                    },
                    change: function (index) {
                        $('.testimonial .ct').removeClass('active');
                        $('.testimonial .ct-' + (index + 1)).addClass('active');
                    }
                }
            });
            var flkty = $carousel.data('flickity');
            var $imgs = $('.section-testimonial .carousel-cell picture img');

            $carousel.on('scroll.flickity', function (event, progress) {
                flkty.slides.forEach(function (slide, i) {
                    var img = $imgs[i];
                    var x = (slide.target + flkty.x) * -1 / 2;
                    img.style.transform = 'translateX( ' + x + 'px)';
                });
            });

            let ctrPrevTes = $('.section-testimonial .btn_ctr.prev'),
                ctrNextTes = $('.section-testimonial .btn_ctr.next');

            ctrPrevTes.on('click', function () {
                $carousel.flickity('previous', true);
            });
            ctrNextTes.on('click', function () {
                $carousel.flickity('next', true);
            });
        }
    }
    testimonialSlider();
})
