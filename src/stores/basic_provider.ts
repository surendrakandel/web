import { browser } from "$app/environment";
import type { basic_info } from "$gen/basic_info";
import type { booking_response } from "$gen/book";
import type { business } from "$gen/business";
import type { location } from "$gen/location";
import type { login_response } from "$gen/login";
import type { quote_request } from "$gen/quote";
import type { user } from "$gen/user";
import { newBusiness } from "$libs/types/business";
import { newUser } from "$libs/types/user";
import { isJsonString } from "$libs/utils/is_json";
import { derived, writable, type Readable, type Writable } from "svelte/store";
import { unsubsList } from "$stores/unsubs";
let loc:location = {
    id: "",
    company_name: "",
    address: undefined,
    contact: undefined,
    business_hours: {start: "", end: ""},
    shipper_pickup_ready_by: "",
    shipper_instructions: "",
    receiver_instructions: "",
    delivery_location_services: [],
    pickup_location_services: [],
    business_id: "",
    type: ""
}
export interface businessStoreType{
    basicStore: Writable<basic_info>;
    staffStore: Readable<user[]>;
    businessStore: Readable<business>;
    clientAddressStore: Readable<location[]>;
    businessAddressStore: Readable<location>;
    defaultPickUpLocationStore: Readable<location>;
    defaultDeliveryLocationStore: Readable<location>;
    bookingHistoryStore: Readable<booking_response[]>;
    quoteHistoryStore: Readable<quote_request[]>;
    userStore: Readable<login_response>;
}
let basicInfo: basic_info = {
	token: '',
	business: newBusiness(),
	user: newUser(),
	users: [newUser()],
	valid: false,
	clientAddresses: [],
	business_address: undefined,
	default_pickup_location: undefined,
	default_delivery_location: undefined,
	bookings: [],
	quotes: []
};
export function newBasicInfo(){
    return {
        token: '',
        business: newBusiness(),
        user: newUser(),
        users: [newUser()],
        valid: false,
        clientAddresses: [],
        business_address: undefined,
        default_pickup_location: undefined,
        default_delivery_location: undefined,
        bookings: [],
        quotes: []
    }
}
export let basic_provider: Writable<basic_info> = writable(basicInfo);
if (browser) {
    let old_basic_data = localStorage.getItem('basic_store_data');
    
    if (old_basic_data != undefined && old_basic_data != null && old_basic_data != '' && isJsonString(old_basic_data)) {
        basic_provider = writable(JSON.parse(old_basic_data));
    }
    let basicStoreUnsub = basic_provider.subscribe((value) => {
        if (value != undefined) {
            localStorage.setItem('basic_store_data', JSON.stringify(value));
        }
       
    });
    unsubsList.update((value) => {
        value?.push(basicStoreUnsub)
        return value 
    })
}
export let basic_store_helper = {
    addBusiness: (business: business) => {
        basic_provider.update((value)=>{
            value.business = business
            return value
        })
    },
    removeBusiness: () => {
        basic_provider.update((value)=>{
            value.business = undefined
            return value
        })
    },
    addBusisnessAddress(address: location){
        console.log("adding business address", address)
        basic_provider.update((value)=>{
            value.business_address = address
            return value
        })
    },
    removeBusisnessAddress: () =>{
        basic_provider.update((value)=>{
            value.business_address = undefined
            return value
        })
    },
    addDefaultPickupAddress: (location:location) =>{
        basic_provider.update((value)=>{
            value.default_pickup_location = location
            return value
        })
    },
    removeDefaultPickupAddress: () =>{
        basic_provider.update((value)=>{
            value.default_pickup_location = undefined
            return value
        })
    },
    addDefaultDeliveryAddress: (location:location) =>{
        basic_provider.update((value)=>{
            value.default_delivery_location = location
            return value
        })
    },
    removeDefaultDeliveryAddress: () =>{
        basic_provider.update((value)=>{
            value.default_delivery_location = undefined
            return value
        })
    }
}
export let staff_store: Readable<user[]> = derived(basic_provider, (value) => {
    return value?.users || [];
});
export let business_store: Readable<business> = derived(basic_provider, (value) => {
    return value?.business || newBusiness();
});
export let client_address_store: Readable<location[]> = derived(basic_provider, (value) => {
    return value?.clientAddresses || [];
});
export let business_address_store: Readable<location> = derived(basic_provider, (value) => {
    return value?.business_address || loc;
});

export let default_pickup_location_store: Readable<location> = derived(basic_provider, (value) => {
    return value?.default_pickup_location || loc;
});

export let default_delivery_address_store: Readable<location> = derived(
    basic_provider,
    (value) => {
        return value?.default_delivery_location || loc;
    }
);
export let bookings_history_store: Readable<booking_response[]> = derived(
    basic_provider,
    (value) => {
        return value?.bookings || [];
    }
);
export let quotes_store: Readable<quote_request[]> = derived(basic_provider, (value) => {
    return value?.quotes || [];
});

