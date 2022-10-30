import { newBookDeliveryAddress, type zodBookDeliveryAddressType } from "./book_delivery_address";
import { newBookDeliveryContact, type zodBookDeliveryContactType } from "./book_delivery_contact";
import { newBookDeliveryLocation, type zodBookDeliveryLocationType } from "./book_delivery_location";
import { newBookPickupAddress, type zodBookPickupAddresstype } from "./book_pickup_address";
import { newBookPickupContact, type zodBookPickupContactType } from "./book_pickup_contact";
import { newBookPickupLocation, type zodBookPickupLocationType } from "./book_pickup_location";

export enum bookInputType {
    pickup,
    delivery,
        
}
export function newBookAddress(type: bookInputType): zodBookPickupAddresstype | zodBookDeliveryAddressType{
    if (type.toString() == "0") {
        return newBookPickupAddress()
    }
    return newBookDeliveryAddress()
}
export function newBookContact(type:bookInputType): zodBookPickupContactType | zodBookDeliveryContactType{
    if (type.toString() == "0") {
        return newBookPickupContact()
    }
    return newBookDeliveryContact()
}
export function newBookLocation(type:bookInputType): zodBookPickupLocationType | zodBookDeliveryLocationType{
    if (type.toString() == "0") {
        return newBookPickupLocation()
    }
    return newBookDeliveryLocation()
}