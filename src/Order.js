import Item from './Item';
import TaxItem from './TaxItem';

export default class Order {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    getTaxes() {
        return this.items.reduce((taxes, item) => {
            if (item instanceof TaxItem) {
                return taxes + item.calculateTax();
            }

            return taxes;
        }, 0);
    }
}
