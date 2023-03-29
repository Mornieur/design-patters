export interface ECommerceProductProtocol {
  name: string;
  price: number;
}

export class ECommerceShoppingCart {
  private products: ECommerceProductProtocol[] = [];
  private _discountStrategy: DiscountStrategy = new DiscountStrategy();

  addProduct(...products: ECommerceProductProtocol[]): void {
    products.forEach((product) => this.products.push(product));
  }

  getProduct(): ECommerceProductProtocol[] {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  getTotalWithDiscount(): number {
    return this._discountStrategy.getDiscount(this);
  }

  set discount(discount: DiscountStrategy) {
    this._discountStrategy = discount;
  }
}

export class DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    return cart.getTotal();
  }
}
export class DefaultDiscount extends DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();
    if (total >= 100 && total < 100) {
      this.discount = 10;
    } else if (total >= 200 && total < 300) {
      this.discount = 20;
    } else if (total >= 300) {
      this.discount = 30;
    }
    return total - total * (this.discount / 100);
  }
}
export class NewDiscount extends DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 0) {
      this.discount = 5;
    }

    return total - total * (this.discount / 100);
  }
}

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discount = new DefaultDiscount();
shoppingCart.addProduct({ name: "Produto 1", price: 50 });
shoppingCart.addProduct({ name: "Produto 2", price: 50 });
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
