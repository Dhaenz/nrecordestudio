// carusel con auto play, stage padding y autowidht
$('.owl-carousel').owlCarousel({
    loop:true,
    merge:true,
    // margin:40,
    // nav:true,
    // autowidht:false,
    // center:false,
    // items:4,
    // stagePadding: 100,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:0
        },
        576:{
            items:1,
            margin:50,
            nav:true,
            center:true,
            mergefit:true,
        },
        768:{
            items:1,
            margin:10,
            nav:true,
            center:true,
            mergefit:true,
        },
        992:{
            items:3,
            margin:10,
            nav:true,
            center:true,
            mergefit:true,
        },
        1200:{
            items:2,
            margin:10,
            nav:true,
            center:true,
            mergefit:true,
        }
    }
})


// Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

