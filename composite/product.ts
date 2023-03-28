interface ProductInterface {
  getPrice(): number;
  addProduct(product: ProductInterface): void;
}

export class IndividualProduct implements ProductInterface {
  constructor(public name: string, private price: number) {}

  getPrice(): number {
    return this.price;
  }

  addProduct(product: ProductInterface): void {
    return;
  }
}

export class CompositeProduct implements ProductInterface {
  private products: ProductInterface[] = [];

  getPrice(): number {
    let total = 0;

    for (let i = 0; i < this.products.length; i++) {
      total += this.products[i].getPrice();
    }
    return total;
  }

  addProduct(product: ProductInterface): void {
    this.products.push(product);
  }
}
