import { bolClient } from "$api/client";

export async function createBol(id: string):Promise<any>{
    try {
      let res = await bolClient.delete(`?id=${id}`);
      
      if(res?.data?.success){
        return res?.data?.body
      }
    } catch (error) {
        throw error
    }
  
  }