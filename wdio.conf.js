exports.config = {

    /**
     * server configurations
     */
    host: 'hub',
    port: 4444,

    /**
     * specify test files
     */
    specs: [
        './test/specs/*.js'
    ],
    exclude: [],

    /**
     * capabilities
     */
    capabilities: [{
        browserName: 'chrome'
    }, {
        browserName: 'firefox'
    }],

    /**
     * test configurations
     */
    logLevel: 'silent', // verbose
    coloredLogs: true,
    screenshotPath: 'shots',
    baseUrl: 'http://127.0.0.1',
    waitforTimeout: 10000,
    framework: 'jasmine',

    reporters: ['spec'],
    reporterOptions: {
        outputDir: './'
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 99999
    },

    /**
     * hooks
     */
    beforeSession: function (config, capabilities, specs) {
    },
    onPrepare: function () {
        console.log('let\'s go');
    },
    onComplete: function () {
        console.log('that\'s it');
    }
};