var mainPage = require('../pageobjects/example');

/*
	This is a BDD test using Jasmine JavaScript framework
*/


describe('navigating to main page', function () {
    it('should allow user to navigating main page ', function () {
        mainPage.open();     // navigating to main page
        mainPage.waitForMainToLoad();
        expect(mainPage.getPageTitle()).toContain('Электронная очередь" (Талон)');
    });
});