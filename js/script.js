//Navbar change background color
let servicesOffset = $('#services').offset().top; 

$(window).scroll(()=>{
    let wScroll = $(window).scrollTop();
    if(wScroll >= servicesOffset -  630){
        $('#main-nav').css('backgroundColor', 'white');
        $('#btnUp').slideDown(500);
    }
    else{
        $('#main-nav').css('backgroundColor', 'transparent');
        $('#btnUp').css('display', 'none');
    }
})
//fixed button
$('#btnUp').click(()=>{
    $('html, body').animate({ scrollTop: '0px' },1000);
})


//Navbar links
// $('.navbar .navbar-nav .nav-link[href^="#"]').click((e)=>{
//     let linkHref = $(e.target).attr('href');
//     let linkOffset = $(linkHref).offset().top;
//      $('html, body').animate({scrollTop: `${linkOffset}px`},1000);
//  })