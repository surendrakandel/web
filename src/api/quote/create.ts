import type { zodQuoteRequestType } from "$libs/types/quote";
import type { zodBookRequestType } from "$libs/types/zod_book_request";
import { handleAxiosError } from "$libs/utils/axios_error";
import { quoteClient } from "$api/client";

export async function createQuote(quote:zodQuoteRequestType):Promise<zodBookRequestType>{
  let res = undefined;
  try{
    res = await quoteClient.post("", quote)
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