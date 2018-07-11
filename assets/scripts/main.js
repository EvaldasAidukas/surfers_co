$(document).ready(function(){


    // $(".owl-carousel").owlCarousel();
    var owl = $('.team-mates').owlCarousel({
        loop:false,
        //margin:200,
        autowidth:false,
        nav:false,
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

    var boards = $('.board-gallery').owlCarousel({
        loop:false,
        autowidth:true,
        nav:false,
        dots:true,
        singleItem: true,
        pagination: true,
        dotData: true,
        dotsData: true,
        responsive:{
            0:{
                items:1
            }
        }
    });

});

// function myFunction() {
//     var x = document.getElementsByClassName("nav-bar")[0];
//     if (x.className === "nav-bar flex") {
//         console.log("called");
//         x.className += " responsive";
//     } else {
//         x.className = "nav-bar flex";
//     }
// }
