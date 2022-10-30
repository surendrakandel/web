import type { booking_response } from "$gen/book";
import { bolClient } from "$api/client";

export async function getBol(id: string):Promise<booking_response>{
  let res = undefined;
    try {
      res = await bolClient.get(`/${id}`);
      
      if(res?.data?.success){
        return res?.data?.body
      }
    } catch (error) {
        throw error
    }
    return res?.data
  
}