import Item from "./Item";

export class TaxItem extends Item {
  constructor(category, description, price) {
    super(category, description, price);
  }

  getTax()

  calculateTax() {
    return this.price * this.getTax();
  }
}
