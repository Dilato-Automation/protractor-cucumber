import Assert from '../support/assert';
import {Given, When, Then } from "cucumber";
import TypeOfAccount from '../pageObject/typeOfAccount';
import Identification from '../pageObject/identification';

//POM init
const path = require("path");
const typeofAccount = new TypeOfAccount();
const identification = new Identification();

//Chai init
const assert = new Assert();
const expect = assert.expect;

Given(/^choose personal account for myself$/, () => {
    return typeofAccount.clickMyselfPersonalAccount();
});

When(/^I enter the first name "([^"]*)"$/, (arg1) => {
    return typeofAccount.setFirstName(arg1);
});

When(/^last name "([^"]*)"$/, (arg1) => {
    return typeofAccount.setLastName(arg1);
});

When(/^email address "([^"]*)"$/, (arg1) => {
    return typeofAccount.setEmail(arg1);
});

When(/^phone number "([^"]*)"$/, (arg1) => {
    return typeofAccount.setPhone(arg1);
});

When(/^I upload the passport$/, () => {
    return identification.uploadPassport(path.resolve(process.cwd(),'resource/Passport.jpg'));
});

Then(/^site will collect my information and show on the screen$/, () => {
    return identification.clickNextButtonForReviewPage();
});

When(/^I fill in additional details$/, () => {
    return identification.fillAdditionalDetails();
});

Then(/^server will received the information successfully$/, () => {
    return expect(identification.getRegistrationInfo()).to.eventually.contains("We have received your information successfully");
});
