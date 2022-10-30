
import type { add_staff } from "$gen/add_staff";
import { businessClient } from "$api/client";
import { getBasicInfo } from "./get_basic_info";

export let add_staff_data: add_staff = {
    token: "",
    new_staff_email: "",
    first_name: "", 
    last_name: "",
    roles: [],
    password: "",
    phone_number: '',
    business_id: "null"
}

export async function addStaff(data: add_staff): Promise<any>{
  return Promise.all([businessClient.post("add_staff", data), getBasicInfo()])
}

