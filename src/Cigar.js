import TaxItem from './TaxItem';

export default class Cigar extends TaxItem {
    constructor(description, price) {
        super('Cigar', description, price);
    }

    getTax() {
        return 0.25;
    }
}
