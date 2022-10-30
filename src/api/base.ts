import { userClient } from "./client"

export type storeConf = {
    persist: boolean,
    storeName:string,
}
export async function base(data:any):Promise<any>{
    try {
        let res = await userClient.post("",data)
        if(res?.data?.success == true){
            return res?.data?.body
        }
    } catch (error) {
        throw error
    }
}
  