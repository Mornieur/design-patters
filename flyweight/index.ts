import { DeliveryContext } from "./delivery/delivery-context";
import { DeliveryFactory } from "./delivery/delivery-factory";

const factory = new DeliveryFactory();
DeliveryContext(factory, "Maria", "645", "Rua João Fugulin", "SP");
DeliveryContext(factory, "Maria", "645", "Rua João Fugulin", "SP");
DeliveryContext(factory, "Maria", "645", "Rua João Fugulin", "SP");
DeliveryContext(factory, "Maria", "645", "Rua João Fugulin", "SP");

console.log(factory.getLocations());
