
import type { quotes_response } from "$gen/quote";
import { handleAxiosError } from "$libs/utils/axios_error";
import { quoteClient } from "$api/client";

export async function getQuotes():Promise<quotes_response[]>{
  let res = undefined;
  try{
    res = await quoteClient.get("/")
    if(res?.data){
      
      return res?.data?.body
    }
  }catch(error:any){
    console.log("error occured",JSON.stringify(error.request), error.message)
    handleAxiosError(error)
    return error 
  }
  return res?.data?.body || res?.data
}