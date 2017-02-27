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

                console.log(popup);

                $(popup).wrap('<div class="popup-overlay"></div>');

                $(popup).show();
                $("body").css({ overflow: "hidden" });
            });
        });
    }

    _close() {
        $(".js-popup-close").click(function(e) {
            $(".popup").hide();
            $(".popup").unwrap();
            $("body").css({ overflow: "auto" });
        });
    }
}
