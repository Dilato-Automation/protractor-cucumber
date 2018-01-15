class typeOfAccount{
    constructor(){
        this.myselfPersonalAccount = element(by.xpath('//html/body/app-root/button[1]'));
        this.firstName = element(by.xpath('//input[@id="firstName"]'));
        this.nextButtonForFirstName = element(by.xpath('//button[@name="submit"]'));
        this.lastName = element(by.xpath('//*[@id="lastName"]'));
        this.nextButtonForLastName = element(by.xpath('//button[@name="submit"]'));
        this.email = element(by.xpath('//*[@id="email"]'));
        this.nextButtonForEmail = element(by.xpath('//button[@name="submit"]'));
        this.phone = element(by.xpath('//input[@class="form-control input_field"]'));
        this.nextButtonForPhoneNo = element(by.xpath('//button[@name="submit"]'));
    }
    clickMyselfPersonalAccount(){
        this.myselfPersonalAccount.click();
    };

    setFirstName(firstName){
        this.firstName.sendKeys(firstName);
        this.nextButtonForFirstName.click();
    };

    setLastName(lastName){
        this.lastName.sendKeys(lastName);
        this.nextButtonForLastName.click();
    };

    setEmail(emailAddress){
        this.email.sendKeys(emailAddress);
        this.nextButtonForEmail.click();
    };

    setPhone(phoneNo){
        this.phone.clear();
        this.phone.sendKeys(phoneNo);
        this.nextButtonForPhoneNo.click();
    };
}
export default typeOfAccount;