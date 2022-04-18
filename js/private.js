$('#file-upload').change(function() {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename').text(filename);
}); 

$('.slider-for-video').slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true, 
    asNavFor: '.slider-nav-video',
});
$('.slider-nav-video').slick({
    autoplay:false,
    arrow:false,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    responsive: [
        {
            breakpoint: 1200, 
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: false,
            }
        },
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: false,
            }
        },
    ],
    asNavFor: '.slider-for-video',
    dots: false,
    focusOnSelect: true,
    prevArrow: '<a href="javascript:void(0)" class="arr-top"><i class="fa fa-chevron-up"></i></a>', 
    nextArrow: '<a href="javascript:void(0)" class="arr-bot"><i class="fa fa-chevron-down"></i></a>', 
});
$('.slider-nav').slick({
    autoplay:false,
    arrow:false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 3.5,
                slidesToScroll: 2,
                infinite: false,
            }
        },
    ],
    asNavFor: '.slider-for-video',
    dots: false,
    focusOnSelect: true,
    prevArrow: '', 
    nextArrow: '', 
});