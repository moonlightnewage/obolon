import $ from "jquery";
import jQuery from "jquery";
window.$ = $;
window.jQuery = jQuery;

import "owl.carousel";

import "./slider.js";
import Dropdown from "./Dropdown";
import Popup from "./Popup";
import Tabs from "./Tabs";
import modal from "./modal.js";
import Validator from "./Validator";

$(document).ready(function() {
    if ($(window).width() < 768) {
        new Dropdown({ btn: ".js-btn-burger", list: ".js-dropdown-list" });
    }

    new Popup({ el: ".js-popup-open" });

    new Tabs({ section: 2, rooms: 4, type: 1 });

    modal();

    new Validator({ form: ".js-form" });
});
