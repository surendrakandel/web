import type { remove_staff } from "$gen/remove_staff"
import { businessClient } from "$api/client"
import { getBasicInfo } from "./get_basic_info"

export async function deleteUser(data: remove_staff):Promise<any>{
   return Promise.all([businessClient.post("delete_staff", data), getBasicInfo()])  
}