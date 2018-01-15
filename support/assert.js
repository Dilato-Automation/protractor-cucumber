import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

class Assert {
    constructor(){
        this.expect = chai.expect;
        chai.use(chaiAsPromised);
    }
}

export default Assert;