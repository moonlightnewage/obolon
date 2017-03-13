export default class Popup {
    constructor(opt) {
        this.el = $(opt.el);

        this._open();
        this._close();
    }

    _open() {
        var el = this.el;

        el.each(function() {
            $(this).on("click.popup", function(e) {
                e.preventDefault();
                e.stopPropagation();

                let popup = $(".js-popup[data-popup='" + $(this).attr("data-target-popup") + "']");

                $(popup).parent().addClass("is-active");

                $(popup).show();
                $("body").css({ overflow: "hidden" });

                var first = $(popup).is('[data-popup="apart"]');
                console.log(first);
                var second = $(window).width() < 768;

                if (first && second) {
                    $(popup).parent().removeClass("is-active");
                    $(popup).hide();
                    $("body").css({ overflow: "auto" });
                }
            });
        });
    }

    _close() {
        $(".js-popup-close").on("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            $(".js-popup").hide();
            $(".js-popup").parent().removeClass("is-active");
            $("body").css({ overflow: "auto" });
        });
    }
}
