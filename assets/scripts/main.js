$(document).ready(function(){


    // $(".owl-carousel").owlCarousel();
    var owl = $('.team-mates').owlCarousel({
        loop:false,
        //margin:200,
        autowidth:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:3
            },
            1070:{
                items:4
            }
        }
    });

    $('.owl-prev').click(function(){
        console.log("fired");
        owl.trigger('prev.owl.carousel');
    });

    $('.owl-next').click(function(){
        console.log("fired");
        owl.trigger('next.owl.carousel');
    });

    $('.burger').click(function(){
        $('.nav-list').toggleClass('show');
        //$('.social-icons').toggleClass('show');
    });

    $('.section li').click(function(){
        $('.section li').removeClass('show');
        $('.description,.features,.dimensions').removeClass('visible');
        $(this).addClass('show');
        var temp = $(this).text().toLowerCase();
        $('.'+temp).addClass('visible');
    });

    var boards = $('.board-gallery').owlCarousel({
        loop:false,
        autowidth:true,
        nav:false,
        dots:true,
        items:1,
        singleItem: true,
        //dotsData: true,
        responsive:{
            0:{
                items:1
            }
        }
    });
    
    // adds images to thumbnails
    $('.owl-dot').each(function(ind) {
        var imgs = [];
        for(var i=0; i<$('.store .owl-item img').length;i++){
            imgs[i]=$('.store .owl-item img')[i].src;
        }
        //console.log(imgs);
        $(this).css('background-image',"url('"+imgs[ind]+"')");
    });

    //corrects height of youtube video, after apge refresh
    if(document.getElementById('video')!=null){
        var video = document.getElementById('video').offsetWidth;
        document.getElementById("video").style.height = video*0.55 + "px";
    };

});





