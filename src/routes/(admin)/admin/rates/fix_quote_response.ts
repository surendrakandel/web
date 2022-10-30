
import type { zodBookRequestType } from "$src/libs/types/zod_book_request";

export function fixQuoteResponse(res: zodBookRequestType): zodBookRequestType{
    for (let index = 0; index < res.commodities.length; index++){
        res.commodities[index].stackable = res.commodities[index].stackable == undefined ? false : true;
        res.commodities[index].protect_from_freeze = res.commodities[index].protect_from_freeze == undefined ? false : true;
        res.commodities[index].hazardous = res.commodities[index].hazardous == undefined ? false : true;
        res.commodities[index].sort_and_segregate = res.commodities[index].sort_and_segregate == undefined ? false : true;
        res.commodities[index].guaranteed = res.commodities[index].guaranteed == undefined ? false : true;
            
    }
    res.pickup.LIFTGATE_PICKUP = res.pickup.LIFTGATE_PICKUP == undefined ? false : true;
    res.pickup.PICKUP_APPOINTMENT = res.pickup.PICKUP_APPOINTMENT == undefined ? false : true;
    res.pickup.PICKUP_LOCATION_WITH_DOCK = res.pickup.PICKUP_LOCATION_WITH_DOCK == undefined ? false : true;
    res.pickup.PICKUP_NOTIFICATION = res.pickup.PICKUP_NOTIFICATION == undefined ? false : true;
    res.pickup.INSIDE_PICKUP = res.pickup.INSIDE_PICKUP == undefined ? false : true;

    res.delivery.LIFTGATE_DELIVERY = res.delivery.LIFTGATE_DELIVERY == undefined ? false : true;
    res.delivery.DELIVERY_APPOINTMENT = res.delivery.DELIVERY_APPOINTMENT == undefined ? false : true;
    res.delivery.DELIVERY_LOCATION_WITH_DOCK = res.delivery.DELIVERY_LOCATION_WITH_DOCK == undefined ? false : true;
    res.delivery.DELIVERY_NOTIFICATION = res.delivery.DELIVERY_NOTIFICATION == undefined ? false : true;
    res.delivery.INSIDE_DELIVERY = res.delivery.INSIDE_DELIVERY == undefined ? false : true;

    return res
}