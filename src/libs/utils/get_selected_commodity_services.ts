
import type { zodCommodityType } from "$libs/types/commodity"


type commodity_services = {
    value: string,
    label: string,
    id: string ,
}

export function getSelectedCommodityServices(commodity:zodCommodityType){
    let  services:commodity_services[] = []
    if(commodity.protect_from_freeze){
        services.push({
            value: "PROTECT_FROM_FREEZE",
            id: "PROTECT_FROM_FREEZE",
            label: "Protect From Freeze"
        })
    }
    if(commodity.sort_and_segregate){
        services.push({
            value: "SORT_AND_SEGREGATE",
            id: "SORT_AND_SEGREGATE",
            label: "Sort And Segregate"
        })
    }
    if(commodity.guaranteed){
        services.push({
            value: "GUARANTEED",
            id: "GUARANTEED",
            label: "Guaranteed"
        })
    }
    if(commodity.hazardous){
        services.push({
            value: "HAZARDOUS",
            id: "HAZARDOUS",
            label: "Hazardous"
        })
    }
    if(commodity.stackable){
        services.push({
            value: "STACKABLE",
            id: "STACKABLE",
            label: "Stackable"
        })
    }
    return services
}