import type { booking_response } from "$gen/book"
import { handleAxiosError } from "$libs/utils/axios_error"
import { bookingClient } from "$api/client"

export async function getBookings():Promise<booking_response[]>{
    try{
        let res = await bookingClient.get("")
        if(res?.data?.success){
           return res?.data?.body
        }
    }catch(error){
        handleAxiosError(error)
        console.log("error is", error)
    }
    return []
}
  