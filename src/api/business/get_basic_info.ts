
import { businessClient } from "$api/client";
import { basic_provider } from "$src/stores/basic_provider";
// token: string;
// business: business | undefined;
// user: user | undefined;
// users: user[];
// valid: boolean;
// clientAddresses: location[];
// business_address: location | undefined;
// default_pickup_location: location | undefined;
// default_delivery_location: location | undefined;
// bookings: booking_response[];
// quotes: quote_request[];
export  function getBasicInfo() {
    businessClient?.get("/get_basic_info").then((response:any) =>{
      console.log("responose object for get basic info", response)
        basic_provider.update((value)=>{
            value.business = response?.data?.body?.business
            value.user = response?.data?.body?.user
            value.users = response?.data?.body?.users
            value.clientAddresses = response?.data?.body?.clientAddresses
            value.business_address = response?.data?.body?.business_address
            value.default_pickup_location = response?.data?.body?.default_pickup_location
            value.default_delivery_location = response?.data?.body?.default_delivery_location
            value.bookings = response?.data?.body?.bookings
            value.quotes = response?.data?.body?.quotes
            value.token = response?.data?.body?.token
            value.valid = true
            return value
        })
    }).catch((error:any)=>{
      console.log(error)
      basic_provider.update((value)=>{
        value.business = undefined
        value.user = undefined
        value.users = []
        value.clientAddresses = []
        value.business_address = undefined
        value.default_pickup_location = undefined
        value.default_delivery_location = undefined
        value.bookings = []
        value.quotes = []
        value.token = ""
        value.valid = false
        return value
      })
    })
}

