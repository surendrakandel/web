
import type { address } from "$gen/address";
import { businessClient } from "$api/client";

export async function addBusinessAddress(data: address): Promise<any>{
    return businessClient.post("add_business_address", data)
}

  
