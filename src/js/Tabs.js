export default class Tabs {
    constructor(opt) {
        this.opt = opt;
        this.currentSection = $(opt.section);
        this.currentRoomNumb = $(opt.rooms);
        this.currentType = $(opt.type);

        this._default();
    }

    _default() {
    }
}
