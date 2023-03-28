import { DeliveryFactory } from "./delivery-factory";

export const DeliveryContext = function(
  factory: DeliveryFactory,
  name: string,
  number: string,
  city: string,
  street: string
): void {
  const location = factory.makeLocation({ street, city })
  location.deliver(name, number)

}