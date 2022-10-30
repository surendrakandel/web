
import type{ address } from "$gen/address"
export function parseAddress(address:any):address{
    function findShortNames(place: any, name: string) {
        // @ts-ignore
        const component = place.address_components.find(c => c.types.includes(name))
        return component ? component.short_name : ''
    }
    function findLongNames (place:any, name:string) {
        try {
            const component = place.address_components.find((c: { types: string | any[] }): any => {
                return c.types.includes(name)
            })
            return component ? component.long_name : ''
        } catch (error) {
            console.log(error)
        }
    }
    
    let data:address = {
        address_line_1: findLongNames(address, 'street_number') + " " + findLongNames(address, 'route').trim(),
        address_line_2: "",
        city: findLongNames(address, 'locality').trim(),
        county: findLongNames(address, 'administrative_area_level_2').trim(),
        state: findLongNames(address, 'administrative_area_level_1').trim(),
        state_code: findShortNames(address, 'administrative_area_level_1').trim(),
        country: findLongNames(address, 'country').trim(),
        country_code: findShortNames(address, 'country').trim(),
        zip_code: findLongNames(address, 'postal_code').trim(),
        street_name: findLongNames(address, 'route').trim(),
        extended_zip_code: findLongNames(address, 'postal_code').trim(),
        free_form_address: (findLongNames(address, 'postal_code') + ", " +  findShortNames(address, 'locality') +", " +  findShortNames(address, 'administrative_area_level_1')).trim(),
        local_name: "",
        lat: address.geometry.location.lat(),
        long: address.geometry.location.lng(),
        business_id: "",
        type: ""
    }
    return data 
}
