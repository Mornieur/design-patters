interface IPaymentProcessor {
  processPayment(payment: string): void;
}

class TraPaymentProcessor {
  processPayment(payment: string) {
    console.log("PROCESSING PAYMENT");
    console.log(payment);
    console.log("payment processed!");
  }
}

class StripePaymentProcessor {
  processPayment(payment: string) {
    console.log("payment being processed by stripe");
    console.log(payment);
  }
}

class Company1 {
  name: string = "Company 1";
  private paymentProcessor: IPaymentProcessor;
  constructor(paymentProcessor: IPaymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }
  processPayment() {
    console.log("company 1 processing payment!");
    this.paymentProcessor.processPayment("my first payment");
  }
}

class Company2 {
  name: string = "Company2";
  private paymentProcessor: IPaymentProcessor;
  constructor(paymentProcessor: IPaymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }
  processPayment() {
    console.log("company 2 processing payment!");
    this.paymentProcessor.processPayment("my second payment");
  }
}

const company1 = new Company1(new TraPaymentProcessor());
company1.processPayment();
const company2 = new Company2(new StripePaymentProcessor());
company2.processPayment();
