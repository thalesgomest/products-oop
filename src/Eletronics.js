import TaxItem from './TaxItem';

export default class Eletronics extends TaxItem {
    constructor(description, price) {
        super('Eletronics', description, price);
    }

    getTax() {
        return 0.3;
    }
}
