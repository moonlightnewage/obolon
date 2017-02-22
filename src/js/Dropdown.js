export default class Dropdown {
    constructor(opt) {
        this.opt = opt;
        this.btn = $(opt.btn);
        this.list = $(opt.list);

        this.list.hide();

        this._onClick();
    }

    _onClick() {
        let btn = this.btn;
        let list = this.list;

        $(btn).click(function(e) {
            e.preventDefault();
            $(list).slideToggle();
        });
    }
}
