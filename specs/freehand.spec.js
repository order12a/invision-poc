import LoginPage from '../src/pages/LoginPage';
import FreehandPage from '../src/pages/FreehandPage';
import testdata from '../src/testdata/testdata';
import {drawLine, typeText} from '../src/canvas/canvasActions';

describe('Freehand flow', function () {
    const loginPage = new LoginPage();
    const freehandPage = new FreehandPage();

    beforeEach('Authentication of user before each test', function () {
        loginPage.open();
        loginPage.login(testdata.email, testdata.password);
    });

    it('Draw test', function () {

        freehandPage.open();
        freehandPage.addNewFreehand();

        drawLine('canvas.surface-canvas', 100, 100);
        freehandPage.selectTextInstrument();
        typeText('canvas.surface-canvas');

        let results = browser.checkDocument();
        //TODO use function from helper
        results.forEach(function (result) {
            expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
        });
    });
});