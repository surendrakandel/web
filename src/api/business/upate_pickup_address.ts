
import type { address } from "$gen/address";
import { businessClient } from "$api/client";
import { getBasicInfo } from "./get_basic_info";

export async function updatePickupAddress(data:address):Promise<any>{
        return Promise.all([businessClient.patch("update_pickup_address", data), getBasicInfo()])

}
  
