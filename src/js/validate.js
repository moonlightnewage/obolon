export default function validateCustom() {
    $('form[name="contact-form"]').validate();
    
    $('form[name="entry-form"]').validate();
    
    $.validator.addMethod("emailphonevalidation",
        function(value, element) {
            return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value) || /^\d+$/.test(value);
        }
   );
}
