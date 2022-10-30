import { bolClient } from "$api/client";

export async function updateBol(id: string):Promise<any>{
    try {
      let res = await bolClient.patch("", {id: id});
      
      if(res?.data?.success){
        return res?.data?.body
      }
    } catch (error) {
        throw error
    }
  
  }