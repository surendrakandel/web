import { userClient } from "$api/client";
export type login_type = {
    email: string,
    password: string
}
export default  async function logIn(data:login_type):Promise<any>{
    return await userClient.post("/login",data)
    // try {
    //     let res = await userClient.post("/login",data)
    //     if (res?.data?.success == true) {
    //         user_store.update((value) => {
    //             if (value == undefined) {
    //                 value = {user: undefined, token: ""}
    //             }
    //             value.token = res?.data?.body.token
    //             value.user = res?.data?.body?.user
    //             return value
    //         })
    //         return res?.data?.body
    //     } else {
    //         user_store.update(() => {
    //             return { user: undefined, token: "" }

    //         })
    //         console.log(new Error("could not login user"));
    //         return 
    //     }
    // } catch (error:any) {
    //     console.log(error);
    //     return 
    // }

}
  