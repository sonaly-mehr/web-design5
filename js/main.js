$(document).ready(function(){
    
 /*=======Owl-Carousel========*/
    
    
$('.service-wrap').owlCarousel({
        
        loop:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    
    
    $('.latest-course-wrapper').owlCarousel({
        
        loop:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    
    
});
