
import type { log_out } from "$src/gen/log_out"
import { userClient } from "$api/client";

export default async function logOut():Promise<log_out>{
    return await userClient.post("logout")
}
    
   

  