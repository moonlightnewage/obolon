export default function validateCustom() {
    $('form[name="contact-form"]').validate({
           rules: {
               name: {
                   required: true, 
                   minlength: 2
               },
               emailphone: {
                   required: true,
                   phonevalidation: true
               },
               comment: {
                   required: true
               }
           }, 
           messages: {
               name: {
                   required: "Это поле обязательное для заполнения",
                   minlength: "Имя должно содержать более 2-х символов"
               },
               emailphone: {
                   required: "Это поле обязательное для заполнения"
               },
               comment: {
                   required: "Это поле обязательное для заполнения"
               }
           },
           submitHandler: function(form) {
               form.ajaxSubmit();
           }
    });
    
    $('form[name="entry-form"]').validate({
           rules: {
               name: {
                   required: true
               },
               emailphone: {
                   required: true
               },
               datetime: {
                   required: true
               }
           }, 
           messages: {
               name: {
                   required: "Это поле обязательное для заполнения"
               },
               emailphone: {
                   required: "Это поле обязательное для заполнения"
               },
               datetime: {
                   required: "Это поле обязательное для заполнения"
               }
           },
           submitHandler: function(form) {
               form.submit();
           }
    });
    
    $.validator.addMethod("phonevalidation",
        function(value, element) {
            return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value) || /^\d+$/.test(value);
        },
    "Введите e-mail или телефон"
   );
}