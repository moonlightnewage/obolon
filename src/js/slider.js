var owl = $(".js-owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    navigation: false,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 800
});

$(".js-owl-prev").click(function(e) {
    owl.trigger("prev.owl.carousel");
});

$(".js-owl-next").click(function(e) {
    owl.trigger("next.owl.carousel");
});

var gallery = $(".js-owl-gallery").owlCarousel({
    loop: true,
    items: 1,
    navigation: false,
    smartSpeed: 800
});

$(".js-owl-prev").click(function(e) {
    gallery.trigger("prev.owl.carousel");
});

$(".js-owl-next").click(function(e) {
    gallery.trigger("next.owl.carousel");
});
