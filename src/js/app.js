import $ from "jquery";
import jQuery from "jquery";
window.$ = $;
window.jQuery = jQuery;

import "owl.carousel";
import "./lib/jquery.validate.min.js";

import "./slider.js";
import Dropdown from "./Dropdown";
import Popup from "./Popup";
import Tabs from "./Tabs";
import modal from "./modal.js";

$(document).ready(function() {
    if ($(window).width() < 768) {
        new Dropdown({ btn: ".js-btn-burger", list: ".js-dropdown-list" });
    }

    new Popup({ el: ".js-popup-open" });

    new Tabs({ section: 2, rooms: 4, type: 1 });

    modal();
});
