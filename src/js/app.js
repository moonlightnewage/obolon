import $ from "jquery";
import jQuery from "jquery";
window.$ = $;
window.jQuery = jQuery;

import Dropdown from "./Dropdown";
import Popup from "./Popup";
import Tabs from "./Tabs";

import "owl.carousel";
import "./lib/jquery.validate.min.js";

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

    new Popup({ el: ".js-popup-open" });

    new Tabs({ section: 2, rooms: 4, type: 1 });
});
