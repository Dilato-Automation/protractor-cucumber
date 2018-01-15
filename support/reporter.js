const fs = require("fs");
const reporter = require("cucumber-html-reporter");
const mkdirp = require("mkdirp");
const path = require("path");
const moment = require("moment");

class Reporter {

    static createDirectory(dirName) {
        if (!fs.existsSync(dirName)) {
            mkdirp.sync(dirName);
        }
    }

    static createHTMLReport(targetJson,htmlReports) {
        var options = {
            theme: "bootstrap",
            jsonFile: targetJson,
            output: htmlReports+"/cucumber_report.html",
            reportSuiteAsScenarios: true
        };
        reporter.generate(options);
    }
}
module.exports = Reporter;