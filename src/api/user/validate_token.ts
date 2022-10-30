
import type { basic_info } from "$src/gen/basic_info";
import type { login_response } from "$src/gen/login";
import { basic_provider } from "$src/stores/basic_provider";
import {  user_store } from "$src/stores/user_store";
import jwt_decode from "jwt-decode";

import { userClient } from "../client";
function clear() {
    basic_provider.update(() => {
        let data:basic_info = {
            token: "",
            business: undefined,
            user: undefined,
            users: [],
            valid: false,
            clientAddresses: [],
            business_address: undefined,
            default_pickup_location: undefined,
            default_delivery_location: undefined,
            bookings: [],
            quotes: []
        }
        return data 
    })
    user_store.update(() => {
        let data:login_response= {
            token: "",
            user: undefined
        }
        return data
    })
    return 
}
export async function validateToken(): Promise<any> {
    debugger
    let token = document.cookie.split("login_guard=")[1]
    if (token == undefined || token == "") {
        clear()
        return false
    }
    let cokie = undefined
    try {
        cokie = jwt_decode(token)
    } catch (error) {
        clear()
        return false
    }
    // @ts-ignore
    if (cokie.exp < Date.now() / 1000 || token == undefined || token == null || token == "") {
        if (token != "" && token != undefined) {
            try {
                let res = await userClient.post("validate", { token: token })
                if (res?.data?.success == true) {
                    basic_provider.update((value) => {
                        if(value){
                            value.token = res?.data?.body?.token
                            value.user = res?.data?.body?.user
                            return value
                        }
                       return value
                    })
                    return true
                }
                return false 
            } catch (error) {
                basic_provider.update((value) => {
                    if(value){
                        value.token = ""
                        value.user = undefined
                        return value
                    }
                    return value
                })
                return false
            }
        }
    }
    return true
}
