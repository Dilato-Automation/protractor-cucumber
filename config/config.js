const path = require("path");
const reporter = require("../support/reporter");
const jsonPath = path.resolve(process.cwd(),'output/cucumber_report.json');
const htmlPath = path.resolve(process.cwd(),'output');

exports.config = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    capabilities: {
        browserName: process.env.TEST_BROWSER_NAME || "chrome"
    },
    baseUrl: "https://frontend.blanco-tst.cloud/en/?tenant_id=0001",
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: ["../features/*.feature"],
    cucumberOpts: {
        strict: true,
        format: 'json:'+jsonPath,
        require: ["../stepDefinitions/*.js", "../support/*.js"],
    },
    onPrepare: function() {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(30000);
        reporter.createDirectory(htmlPath);
        require('babel-register');
    },
    onComplete: function () {
        reporter.createHTMLReport(jsonPath,htmlPath);
    }
};