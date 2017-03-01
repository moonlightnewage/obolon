export default class Popup {
    constructor(opt) {
        this.el = $(opt.el);

        this._open();
        this._close();
    }

    _open() {
        this.el.each(function() {
            $(this).click(function(e) {
                e.preventDefault();

                let popup = $("." + $(this).attr("data-target"));

                $(popup).parent().addClass("is-active");

                $(popup).show();
                $("body").css({ overflow: "hidden" });
            });
        });
    }

    _close() {
        $(".js-popup-close").click(function(e) {
            $(".popup").hide();
            $(".popup").parent().removeClass("is-active");
            $("body").css({ overflow: "auto" });
        });
    }
}
