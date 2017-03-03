import sayHello from './lib/sayHello.js';

import $ from 'jquery';
import jQuery from 'jquery';
window.$ = $;
window.jQuery = jQuery;

import './lib/jquery.validate.min.js';

import validateCustom from './validate.js';
import Dropdown from "./Dropdown";
import Popup from "./Popup";
import Tabs from "./Tabs";
import modal from "./modal.js";
import "./sliders.js"

$(document).ready(function() {
   validateCustom();
    
    new Dropdown({ btn: ".js-btn-burger", list: ".js-dropdown-list" });
    
//    if ($(window).width() < 768) {
//        new Dropdown({ btn: ".js-btn-burger", list: ".js-dropdown-list" });
//    }
    
    new Popup({ el: ".js-popup-open" });
    
    new Tabs({ section: 2, rooms: 4, type: 1 });
    
    modal();
});