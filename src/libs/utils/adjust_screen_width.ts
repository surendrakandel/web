
import { browser } from "$app/environment";
import { toggle_state_provider } from "$stores/nav_state_provider";

export function adjustScreenWitdth(){
    if(browser){
        let width = screen.width;
        if(width> 767){
            toggle_state_provider.update((value)=>{
                if(value == true){
                    return false
                }
                return value
            })
        }
    }
}