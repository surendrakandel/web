import { handleAxiosError } from "$libs/utils/axios_error";
import { nodeClient } from "$api/client";
export async function simulateGoToDynamicBookPage(id:string):Promise<string>{
  let res = undefined;
  try{
    res = await nodeClient.get(`bol/${id}`)
    if(res.status == 200){
      return  id
    }
  }catch(error:any){
    console.log("error occured",JSON.stringify(error.request), error.message)
    handleAxiosError(error)
  }
  return res?.data?.body || res?.data
}