export default class Validator {
    constructor(opt) {
        this.form = $(opt.form);
        this.submit = this.form.find(".js-btn-submit");

        this._empty();
        this._check();
        this._onClick();
    }

    _empty() {
        this.form.find(".js-field").addClass("empty");
    }

    _check() {
        var self = this;

        let form = this.form;
        let submit = this.submit;

        setInterval(
            function() {
                self._checkEmpty();

                let sizeEmpty = form.find(".empty").length;
                console.log(sizeEmpty);

                if (sizeEmpty > 0) {
                    if (submit.hasClass("disabled")) {
                        return false;
                    } else {
                        submit.addClass("disabled");
                    }
                } else {
                    submit.removeClass("disabled");
                }
            },
            500
        );
    }

    _onClick() {
        var self = this;
        this.submit.click(function() {
            if ($(this).hasClass("disabled")) {
                self._highlight();
                return false;
            } else {
                self.form.submit();
            }
        });
    }

    _checkEmpty() {
        this.form.find(".js-field").each(function() {
            if ($(this).val() != "") {
                $(this).removeClass("empty");
            } else {
                $(this).addClass("empty");
            }
        });
    }

    _highlight() {
        let form = this.form;
        this.form.find(".empty").css({ "border-color": "#af1a1a" });
        //        setTimeout(function() {
        //            form.find(".empty").removeAttr("style"), 500;
        //        });
    }
}
