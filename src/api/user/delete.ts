import type { login_response } from "$gen/login"
import { userClient } from "$api/client"
export default async function DeleteUser(id:string): Promise<(id: string) => Promise<login_response>>{
    return  await userClient.delete(`?id=${id}`)
}