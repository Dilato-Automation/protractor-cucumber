class identification{
    constructor(){
        this.confirmInfomation = element.all(by.xpath('//bc-progress-header[@title="Please provide your identification"]/..//h1'));
        this.uploadPassportButton = element(by.xpath('//button[text()="Upload a passport"]'));
        this.selectUploadFile = element(by.xpath('//*[@id="selectFile"]'));
        this.uploadBtn = element(by.xpath('//button[text()="Upload"]'));
        this.confirmUploadInfo = element(by.xpath('//bc-progress-header[@title="Please review your information"]/..//h1'));
        this.nextButtonForReviewPage = element(by.xpath('//button[text()="Next"]'));
        this.countryOfBirth = element(by.xpath('//*[@id="countryOfBirth"]'));
        this.placeOfBirth = element(by.xpath('//*[@id="place-of-birth"]'));
        this.nextBtnForAdditionalDetails = element(by.xpath('//button[text()="Next"]'));
        this.postalCode = element(by.xpath('//*[@id="postal-code"]'));
        this.houseNo = element(by.xpath('//*[@id="house-number"]'));
        this.street = element(by.xpath('//*[@id="line-1"]'));
        this.city = element(by.xpath('//*[@id="city"]'));
        this.country = element(by.xpath('//*[@id="country"]'));
        this.nextBtnForAdditionalDetails2 = element(by.xpath('//button[text()="Next"]'));
        this.bankAccount = element(by.xpath('//*[@id="bank-account"]'));
        this.taxIdentificationNo = element(by.xpath('//input[@formcontrolname="taxIdentificationNumber"]'));
        this.submitDetailsBtn = element(by.xpath('//button[text()="Submit details"]'));
        this.registrationInfo = element(by.xpath('//bc-progress-header[@title="Registration complete"]/..//h1'));
        this.firstNameForPassport = element(by.xpath('//input[@formcontrolname="firstName"]'));
    }
    setFirstNameForPassport(){
        this.firstNameForPassport.click();
    };

    getConfirmInformation(){
        return this.confirmInfomation.getText();
    };

    uploadPassport(uploadFile){
        this.uploadPassportButton.click();
        this.selectUploadFile.sendKeys(uploadFile);
        this.uploadBtn.click();
    };

    getConfirmUploadInfo(){
        return this.confirmUploadInfo.getText();
    };

    clickNextButtonForReviewPage(){
        browser.wait(browser.ExpectedConditions.visibilityOf(this.nextButtonForReviewPage));
        this.nextButtonForReviewPage.click();
    };

    setCountryOfBirth(countryOfBirth){
        this.countryOfBirth.sendKeys(countryOfBirth);
    };

    setPlaceOfBirth(placeOfBirth){
        this.placeOfBirth.sendKeys(placeOfBirth);
    };

    clickNextBtnForAdditionalDetails(){
        this.nextBtnForAdditionalDetails.click();
    };

    setPostalCode(postalCode){
        this.postalCode.sendKeys(postalCode);
    };

    setHouseNo(houseNo){
        this.houseNo.sendKeys(houseNo);
    };

    setStreet(street){
        this.street.sendKeys(street);
    };

    setCity(city){
        this.city.sendKeys(city);
    };

    setCountry(country){
        this.country.clear();
        this.country.sendKeys(country);
    };

    clickNextBtnForAdditionalDetails2(){
        this.nextBtnForAdditionalDetails2.click();
    };

    setBankAccount(bankAccount){
        this.bankAccount.sendKeys(bankAccount);
    };

    setTaxIdentificationNo(taxIdentificationNo){
        this.taxIdentificationNo.sendKeys(taxIdentificationNo);
    };

    clickSubmitDetailsBtn(){
        this.submitDetailsBtn.click();
    };

    getRegistrationInfo(){
        return this.registrationInfo.getText();
    };

    fillAdditionalDetails(){
        this.setCountryOfBirth('China');
        this.setPlaceOfBirth('Nanjing');
        this.clickNextBtnForAdditionalDetails();
        this.setCountry('China');
        this.setPostalCode('123123');
        this.setHouseNo('12');
        this.setStreet('12');
        this.setCity('Nanjing');
        this.clickNextBtnForAdditionalDetails2();
        this.setBankAccount('DE44 5001 0517 5407 3249 31');
        this.setTaxIdentificationNo('12331223');
        this.clickSubmitDetailsBtn();
    };
}
export default identification;