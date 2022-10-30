import type { booking_response } from "$gen/book";
import type { quote_request } from "$gen/quote";
import { handleAxiosError } from "$libs/utils/axios_error";
import { bookingClient } from "$api/client";

export async function createBooking(booking_request: quote_request):Promise<booking_response>{
  let res = undefined;
  try{
    res = await bookingClient.post("", booking_request)
    if(res.status == 200){
      return  res?.data?.body
    }
  }catch(error:any){
    console.log("error occured",JSON.stringify(error.request), error.message)
    handleAxiosError(error)
  }
  return  res?.data?.body || res?.data
}