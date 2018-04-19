var Page = require('./page');

class Example extends Page {

    /**
     * define elements
     */

    get greetingText() {
        return browser.element('h1');
    }

    /**
     * define or overwrite page methods
     */
    open() {
        super.open('http://10.10.10.250:8060/');
        browser.pause(2000);
    }

    waitForMainToLoad() {
        if (!this.greetingText.isVisible()) {
            this.greetingText.waitForVisible(3000);
        }
    }

    getPageTitle() {
        return this.greetingText.getText();
    }
}

module.exports = new Example();