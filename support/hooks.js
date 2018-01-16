"use strict";
import {setDefaultTimeout} from "cucumber";
const Cucumber = require("cucumber");
const { BeforeAll, After, Status } = require("cucumber");
const conf = require("../config/config").config;
setDefaultTimeout(30 * 1000);

BeforeAll(function() {
  return browser.get(conf.baseUrl);
});

After(function(scenario) {
    const attach = this.attach;
    return browser.takeScreenshot().then(function(png) {
      const decodedImage = new Buffer(png, "base64");
      return attach(decodedImage, "image/png");
    });
});

