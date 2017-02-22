import $ from "jquery";
import jQuery from "jquery";
window.$ = $;
window.jQuery = jQuery;

import Dropdown from "./Dropdown";

import "owl.carousel";

$(document).ready(function() {
    let owl = $(".js-owl-carousel").owlCarousel({
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

    if ($(window).width() < 768) {
        new Dropdown({ btn: ".js-btn-burger", list: ".js-dropdown-list" });
    }
});
