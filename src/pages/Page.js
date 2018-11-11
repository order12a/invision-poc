export default class Page {

    constructor() {
        //TODO add something
    }

    open(path) {
        if (path !== null) {
            browser.url(path);
        } else {
            browser.url();
        }
    }
}