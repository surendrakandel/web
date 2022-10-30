export type commodity_services = {
    value: string,
    label: string,
    id: string,
}

export function getCommodityServices():commodity_services[]{
    return [
        {    
            value: "PROTECT_FROM_FREEZE",
            id: "protect_from_freeze",
            label: "Protect From Freeze"
        },
        {
            value: "SORT_AND_SEGREGATE",
            id: "sort_and_segregate",
            label: "Sort And Segregate"
        },
        {
            value: "GUARANTEED",
            id: "guaranteed",
            label: "Guaranteed"
        },
        {
            value: "HAZARDOUS",
            id: "hazardous",
            label: "Hazardous"
        },
        {
            value: "STACKABLE",
            id: "stackable",
            label: "Stackable"
        },
       
    ]
}