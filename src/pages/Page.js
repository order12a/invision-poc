export default class Page {
  open (path) {
    if (path !== null) {
      browser.url(path);
    } else {
      browser.url();
    }
  }
}
