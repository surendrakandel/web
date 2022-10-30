import { browser } from "$app/environment";
import { newQuote, type zodQuoteRequestType } from "$libs/types/quote";
import { writable, type Writable } from "svelte/store";
import { unsubsList } from "$stores/unsubs";
import { newShipmentDetails } from "$src/libs/types/shipment_details";
import { newPickupLocation } from "$src/libs/types/pickup_location";
import { newDeliveryLocation } from "$src/libs/types/delivery_location";

let data:zodQuoteRequestType  = newQuote()
export let quote_store: Writable<zodQuoteRequestType> = writable(data)

if(browser){
    let quote_req_data = localStorage.getItem("quote_store_data")
    if(quote_req_data != null && quote_req_data != "" && quote_req_data != undefined && quote_req_data != 'undefined'){
        let quote_object = JSON.parse(quote_req_data)
        if (quote_object.shipment_details == undefined || quote_object.shipment_details == null) {
            quote_object.shipment_details = newShipmentDetails()
        }
        if (quote_object.pickup == undefined || quote_object.pickup == null) {
            quote_object.pickup = newPickupLocation()
        }
        if (quote_object.delivery == undefined || quote_object.delivery == null) {
            quote_object.delivery = newDeliveryLocation()
        }
        quote_store = writable(quote_object)
    }
    let quote_request_unsub = quote_store.subscribe((value) => {
        localStorage.setItem("quote_store_data", JSON.stringify(value))
    }) 
    unsubsList.update((value) => {
        value.push(quote_request_unsub)
        return value
    })
}

