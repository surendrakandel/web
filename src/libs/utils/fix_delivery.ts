// pickup_location_with_dock = 0,
// /** liftgate_pickup - @gotags: dynamodbav:"liftgate_pickup,omitempty" */
// liftgate_pickup = 1,
// /** pickup_appointment - @gotags: dynamodbav:"pickup_appointment,omitempty" */
// pickup_appointment = 2,
// /** inside_pickup - @gotags: dynamodbav:"inside_pickup,omitempty" */
// inside_pickup = 3,
// /** pickup_notification - @gotags: dynamodbav:"pickup_notification,omitempty" */
// pickup_notification = 4,
// /** delivery_location_with_dock - @gotags: dynamodbav:"delivery_location_with_dock,omitempty" */
// delivery_location_with_dock = 5,
// /** liftgate_delivery - @gotags: dynamodbav:"liftgate_delivery,omitempty" */
// liftgate_delivery = 6,
// /** delivery_appointment - @gotags: dynamodbav:"delivery_appointment,omitempty" */
// delivery_appointment = 7,
// /** inside_delivery - @gotags: dynamodbav:"inside_delivery,omitempty" */
// inside_delivery = 8,
// /** delivery_notification - @gotags: dynamodbav:"delivery_notification,omitempty" */
// delivery_notification = 9,
// UNRECOGNIZED = -1,

import { delivery_location_servicesFromJSON, type delivery_location_services } from "$gen/location_services"
import type { Writable } from "svelte/store"
import type { zodQuoteRequestType } from "$libs/types/quote"
export function fixDelivery(quote_store:Writable<zodQuoteRequestType>){
    try{
        quote_store.update((value)=>{
            let services :delivery_location_services[] = []
            if(value.delivery.DELIVERY_APPOINTMENT){
                services.push(delivery_location_servicesFromJSON("DELIVERY_APPOINTMENT"))
            }
            if(value.delivery.DELIVERY_LOCATION_WITH_DOCK){
                services.push(delivery_location_servicesFromJSON("DELIVERY_LOCATION_WITH_DOCK"))
            }
            if(value.delivery.LIFTGATE_DELIVERY){
                services.push(delivery_location_servicesFromJSON("LIFTGATE_DELIVERY"))
            }
            if(value.delivery.DELIVERY_NOTIFICATION){
                services.push(delivery_location_servicesFromJSON("DELIVERY_NOTIFICATION"))
            }
            if(value.delivery.INSIDE_DELIVERY){
                services.push(delivery_location_servicesFromJSON("INSIDE_DELIVERY"))
            }
            value.delivery.delivery_location_services = services
            return value
        })
    }catch(error){
        console.log("error converting delivery location services")
    }
}
