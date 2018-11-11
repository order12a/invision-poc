import Page from './Page';

export default class LoginPage extends Page {
  get emailInput () {
    return $('#emailAddress');
  }

  get passwordInput () {
    return $('#password');
  }

  get signinButton () {
    return $('.form__button');
  }

  open () {
    super.open('/d/login');
  }

  login (email, password) {
    this.emailInput.setValue(email);
    this.passwordInput.setValue(password);
    this.signinButton.click();
  }
}
