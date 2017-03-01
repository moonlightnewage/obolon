export default function modal() {
    var content = $(".js-tab-content.is-active"),
        rooms = $(content).find(
            '.js-tab-metrics.is-active [data-modal="js-modal-rooms"]'
        ),
        sizes = $(content).find(
            '.js-tab-metrics.is-active [data-modal="js-modal-sizes"]'
        ),
        totalKey = $(content).find(
            '.js-tab-metrics.is-active [data-modal="js-modal-total-key"]'
        ),
        totalValue = $(content).find(
            '.js-tab-metrics.is-active [data-modal="js-modal-total-value"]'
        ),
        image = $(content).find(
            '.js-tab-img.is-active[data-modal="js-modal-image"]'
        ),
        title = $(content).find('[data-modal="js-modal-title"]'),
        type = $(content).find(
            '.js-tab-link-in.is-active[data-modal="js-modal-type"]'
        ),
        link = $(content).find('[data-modal="js-modal-link"]');

    function move(el) {
        $(el).each(function() {
            let t = $(el).data("modal");

            $("." + t).append($(el).html());

            if ($(el).is("[href]")) {
                let href = $(el).attr("href");
                $("." + t).attr("href", href);
            }
        });
    }

    move(rooms);
    move(sizes);
    move(totalKey);
    move(totalValue);
    move(image);
    move(title);
    move(type);
    move(link);
}
