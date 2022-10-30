import type { confirm_email } from "$gen/confirm_email"
import type { login_response } from "$gen/login"
import { userClient } from "../client"


export default async function ConfirmEmail (data: confirm_email):Promise<login_response>{
    return await userClient.post("confirm_email",data)
}