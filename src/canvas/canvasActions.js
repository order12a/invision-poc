export const drawLine = function (canvasLocator, xoffset, yoffset) {
  $(canvasLocator).waitForVisible();
  // Pause required for correct canvas manipulation
  browser.pause();

  browser.moveToObject(canvasLocator);
  browser.buttonDown(0);
  browser.moveToObject(canvasLocator, xoffset, yoffset);
  browser.buttonUp(0);
};

export const typeText = function (canvasLocator, xoffset, yoffset) {
  $(canvasLocator).waitForVisible();

  // Pause required for correct canvas manipulation
  browser.pause();

  // in case we don't want starting type from default position(center of object)
  if (xoffset !== null && yoffset !== null) {
    browser.moveToObject(canvasLocator, xoffset, yoffset);
  }

  // starting input
  $(canvasLocator).click();
  $(canvasLocator).keys('NEW TEXT');

  // release input by clicking somewhere else(should be updated)
  browser.moveToObject(canvasLocator, 20, 20);
  $(canvasLocator).click();
};
