import type { login_response } from "$gen/login"
import { userClient } from "$api/client";
export default async function getUser (user_id: string): Promise<login_response>{
    return  await userClient.get(`?id=${user_id}`)
}