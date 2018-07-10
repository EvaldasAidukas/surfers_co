$(document).ready(function(){


    console.log("js working");
    // $(".owl-carousel").owlCarousel();
    var owl = $('.owl-carousel').owlCarousel({
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

});

function myFunction() {
    var x = document.getElementsByClassName("nav-bar")[0];
    if (x.className === "nav-bar flex") {
        console.log("called");
        x.className += " responsive";
    } else {
        x.className = "nav-bar flex";
    }
}