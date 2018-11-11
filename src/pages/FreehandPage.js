import Page from './Page';

export default class FreehandPage extends Page {
    get addNewFreehandButton() {
        return $('a.add');
    }

    get createNewFreehandButton() {
        return browser.element('//button[contains(text(), "Create new freehand")]');
    }

    get textInstrument() {
        return $('button[data-tooltip="Text (T or 3)"]');
    }

    constructor() {
        super();
    }

    open() {
        super.open('/d/main#/projects/freehands');
    }

    addNewFreehand() {
        this.addNewFreehandButton.waitForVisible();
        this.addNewFreehandButton.click();
        this.createNewFreehandButton.waitForVisible();
        this.createNewFreehandButton.click();
    }

    selectTextInstrument() {
        this.textInstrument.waitForVisible();
        this.textInstrument.click();
    }
}