import Page from './Page';

export default class ProjectsPage extends Page {
  get projectsHeader () {
    return $('.projects-header');
  }

  get userMenuLink () {
    return $('.user-menu a.text');
  }

  open () {
    super.open('/d/main#/projects');
  }

  expectUserLoggedIn (username) {
    this.projectsHeader.waitForVisible();
    expect(this.projectsHeader.selector).to.be.visible();
    expect(this.userMenuLink.selector).to.have.text(username);
  }
}
