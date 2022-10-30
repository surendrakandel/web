
import type { booking_response } from "$gen/book";
import type { id } from "$gen/carrier_service";
import { bolClient } from "$api/client";
export async function createBol(bolId: string):Promise<booking_response>{
  let res = undefined;
    try {
      let reqData:id  = {
        id: bolId,
        businessId: ""
      }
      res = await bolClient.post("", reqData);
      if(res?.data?.success){
        return res?.data?.body
      }
    } catch (error) {
        throw error
    }
    return res?.data?.body
  }