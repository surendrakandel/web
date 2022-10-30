
import { pickup_location_servicesFromJSON, type pickup_location_services } from "$gen/location_services"
import type  { Writable } from "svelte/store"
import type { zodQuoteRequestType } from "$libs/types/quote"
export function fixPickup(quote_request:Writable<zodQuoteRequestType>){
    try{
        quote_request.update((value)=>{
            let services :pickup_location_services[] = []
            if(value.pickup.PICKUP_APPOINTMENT){
                services.push(pickup_location_servicesFromJSON("PICKUP_APPOINTMENT"))
            }
            if(value.pickup.PICKUP_LOCATION_WITH_DOCK){
                services.push(pickup_location_servicesFromJSON("PICKUP_LOCATION_WITH_DOCK"))
            }
            if(value.pickup.LIFTGATE_PICKUP){
                services.push(pickup_location_servicesFromJSON("LIFTGATE_PICKUP"))
            }
            if(value.pickup.PICKUP_NOTIFICATION){
                services.push(pickup_location_servicesFromJSON("PICKUP_NOTIFICATION"))
            }
            if(value.pickup.INSIDE_PICKUP){
                services.push(pickup_location_servicesFromJSON("INSIDE_PICKUP"))
            }
            value.pickup.pickup_location_services = services
            return value 
        })
    }catch(error){
        console.log("error converting pickup location services")
    }
}