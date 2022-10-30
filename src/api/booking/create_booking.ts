
import type { booking_response } from "$gen/book"
import type { zodBookRequestType } from "$libs/types/zod_book_request"
import { handleAxiosError } from "$libs/utils/axios_error"
import { bookingClient } from "$api/client"

export async function createBooking(data: zodBookRequestType):Promise<booking_response>{
  let res = undefined;
    try{
      res = await bookingClient.post("", data)
      if(res?.data?.success){
        return res?.data?.body || res?.data
      }
    }catch(error){
      handleAxiosError(error)
    }
    return res?.data?.body || res?.data
}