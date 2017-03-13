import sayHello from './lib/sayHello.js';

import $ from 'jquery';
import jQuery from 'jquery';
window.$ = $;
window.jQuery = jQuery;

import './lib/jquery.validate.min.js';

import validateCustom from './validate.js';
import dropdown from "./dropdown.js";
import Popup from "./Popup";
import Tabs from "./Tabs";
import modal from "./modal.js";
import "./sliders.js"

$(document).ready(function() {
    validateCustom();
    
    dropdown();
    
    new Popup({ el: ".js-popup-open" });
    
    new Tabs({ section: 2, rooms: 4, type: 1 });
    
    modal();
});