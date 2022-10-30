
import { quoteClient } from "$api/client"
export async function getQuoteById(id:string):Promise<any>{
  try{
    let res = await quoteClient.get(`?id=${id}`)
    if(res?.data?.success){
      return res?.data?.body
    }
  }catch(error:any){
    console.log("error occured",JSON.stringify(error.request), error.message)
    return error 
  }
}