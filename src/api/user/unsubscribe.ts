import type { login_response } from "$gen/login"
import { userClient } from "../client"
export default async function Unsubscribe (email: string) :Promise<login_response>{
    return  await userClient.post(`unsubscribe?email=${email}`)
}