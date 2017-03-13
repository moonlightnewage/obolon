export default function dropdown () {   
    $('.js-btn-burger').click(function(e) {
        e.preventDefault();
        $('.js-dropdown-list').slideToggle();
    });
}