import type { reset_password } from "$gen/password"
import { userClient } from "$api/client";
export default async function ResetPassword(data: reset_password): Promise<any>{
    return  await userClient.post("reset_password",data)
}
  