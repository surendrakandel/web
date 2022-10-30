import type { sign_up } from "$gen/sign_up"
import { handleAxiosError } from "$libs/utils/axios_error"
import { userClient } from "$api/client";
export default async  function createUser(data: sign_up):Promise<any>{
        try{
            let res = await userClient.post("",data)
            debugger
            if(res?.status == 201){
                return res?.data?.body
            }
        }catch(error:any){
            handleAxiosError(error)
            console.log(error)
        }
    
}