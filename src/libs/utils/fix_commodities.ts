import   { commodity_servicesFromJSON, dimension_uomFromJSON, weight_uomFromJSON } from "$gen/commodity"
import { freight_classFromJSON } from "$gen/freight_class"
import { package_typeFromJSON } from "$gen/package"
import type { zodQuoteRequestType } from "$libs/types/quote"
import type { Writable } from "svelte/store"

export function fixCommodities(quote_store:Writable<zodQuoteRequestType>){
    let total_items = 0
    let total_weight = 0
    try{
        quote_store.update((value) => {
            for (let idx = 0; idx < value.commodities.length; idx++){
                let item = value.commodities[idx]
                value.shipment_details.total_items += item.quantity
                value.shipment_details.total_weight += item.weight
                total_items += item.quantity
                total_weight += item.weight
                item.commodity_services = []
                if(item.stackable){
                    item.commodity_services.push(commodity_servicesFromJSON("stackable"))
                }
                if( item.protect_from_freeze){
                    item.commodity_services.push(commodity_servicesFromJSON("protect_from_freeze"))
                }
                if(item.sort_and_segregate){
                    item.commodity_services.push(commodity_servicesFromJSON("sort_and_segregate"))
                }
                if(item.guaranteed){
                    item.commodity_services.push(commodity_servicesFromJSON("guaranteed"))
                }
                if(item.hazardous){
                    item.commodity_services.push(commodity_servicesFromJSON("hazardous"))
                }
                
                item.freight_class = freight_classFromJSON(item.frontend_freight_class)
                item.dimension_uom = dimension_uomFromJSON(item.frontend_dimension_uom)
                item.weight_uom = weight_uomFromJSON(item.frontend_weight_uom)
                item.package_type = package_typeFromJSON(item.frontend_package_type)
                value[idx] = item
            }
            return value
        })
    } catch (error) {
        
        console.log("error converting formCommodities to quoteCommodities")
    }
}
