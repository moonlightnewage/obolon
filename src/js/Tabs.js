export default class Tabs {
    constructor(opt) {
        this.opt = opt;
        this.currentSection = $(opt.section);
        this.currentRoomsNumb = $(opt.rooms);

        this._defaultSection(this.currentSection, this.currentRoomsNumb);
        this._onClick();
    }

    _defaultSection(currentSection, currentRoomsNumb) {
        // default section and rooms
        let section = currentSection[0];
        let rooms = currentRoomsNumb[0];

        $(".js-tab-link").each(function() {
            let first = $(this).data("section") == section;
            let second = $(this).data("rooms") == rooms;

            if (first || second) {
                $(this).addClass("is-active");
            }
        });
        this._open();
        this._defaultType();
        this._click();
    }

    _defaultType() {
        // default type and inner content
        $(".js-tab-content.is-active .js-tab-link-in")
            .first()
            .addClass("is-active");
        $(".js-tab-content.is-active .js-tab-desc")
            .first()
            .addClass("is-active");
        $(".js-tab-content.is-active .js-tab-img")
            .first()
            .addClass("is-active");
        $(".js-tab-content.is-active .js-tab-metrics")
            .first()
            .addClass("is-active");
    }

    _onClick() {
        var self = this;
        $(".js-tab-link").click(function(e) {
            e.preventDefault();

            $(this).addClass("is-active").siblings().removeClass("is-active");

            self._open();
            self._close();
            self._defaultType();
            self._click();
        });
    }

    _click() {
        $(".js-tab-content.is-active .js-tab-link-in").click(function() {
            $(this).addClass("is-active").siblings().removeClass("is-active");

            let n = $(this).data("type");

            let desc = $(".js-tab-content.is-active").find(".js-tab-desc");
            $(desc[n - 1])
                .addClass("is-active")
                .siblings()
                .removeClass("is-active");

            let img = $(".js-tab-content.is-active").find(".js-tab-img");
            $(img[n - 1])
                .addClass("is-active")
                .siblings()
                .removeClass("is-active");

            let metrics = $(".js-tab-content.is-active").find(
                ".js-tab-metrics"
            );
            $(metrics[n - 1])
                .addClass("is-active")
                .siblings()
                .removeClass("is-active");
        });
    }

    _open() {
        let section = $(".js-tab-link.is-active[data-section]").data("section");
        let rooms = $(".js-tab-link.is-active[data-rooms]").data("rooms");

        $(".js-tab-content").each(function() {
            let first = $(this).data("section") == section;
            let second = $(this).data("rooms") == rooms;

            if (first && second) {
                $(this)
                    .addClass("is-active")
                    .siblings()
                    .removeClass("is-active");
            }
        });
    }

    _close() {
        $(".js-tab-content.is-active").each(function() {
            $(this).siblings().find(".is-active").removeClass("is-active");
        });
    }
}
