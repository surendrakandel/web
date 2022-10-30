import { toggle_state_provider } from "$stores/nav_state_provider";

export function CloseToggler(){
    toggle_state_provider.update((value)=>{
        if(value == true){
            return false
        }
    })
}