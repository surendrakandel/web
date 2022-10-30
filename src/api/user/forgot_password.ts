import type { forgot_password } from "$gen/password"
import { userClient } from "../client"
export default async function ForgotPassword(data: forgot_password): Promise<any>{
    return await userClient.post("forgot_password",data)
}
          