class Page {
    open(path) {
        //http://www.phptravels.net/login
        browser.url(path)
    }
}

module.exports = Page;