import LoginPage from '../src/pages/LoginPage';
import ProjectsPage from '../src/pages/ProjectsPage';
import testdata from '../src/testdata/testdata';

describe('Verify simple auth positive and negative flow', function () {
    const loginPage = new LoginPage();
    const projectsPage = new ProjectsPage();

    it('Positive authentication', function () {
        loginPage.open();
        loginPage.login(testdata.email, testdata.password);
        projectsPage.expectUserLoggedIn(testdata.username);

        //Uncomment to start visual regression testing
        // let results = browser.checkDocument();
        //
        // results.forEach(function (result) {
        //     expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
        // });
    });
});