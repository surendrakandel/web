import type { login_response } from "$gen/login"
import type { user } from "$gen/user"
import { userClient } from "$api/client"

export default async function updateUser (user: user) : Promise<login_response>{
    return await userClient.patch("",user)
}
    