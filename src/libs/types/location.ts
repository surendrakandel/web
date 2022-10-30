
import { newDeliveryLocation, type zodDeliveryLocationType } from "./delivery_location";
import { newPickupLocation, type zodPickupLocationType } from "./pickup_location";
export enum locationType {
    pickup,
    delivery
}

export function newLocation(type: locationType): zodPickupLocationType | zodDeliveryLocationType {
    if (type.toString() == "0") {
        return newPickupLocation()
    }
    return newDeliveryLocation()
}
    
