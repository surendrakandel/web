import { goto } from "$app/navigation"

export function handleAxiosError(err:any): void{
    let err_code = err?.response?.status
    if(err_code < 500){
        console.log("handleAxiosError: ", err)
        //goto("/login")
    }else{
        console.log("handleAxiosError: ", err)
        //goto("/login")
    }
}