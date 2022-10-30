import { browser } from "$app/environment";
import type { login_response } from "$gen/login";
import { isJsonString } from "$libs/utils/is_json";
import { derived, writable, type Readable, type Writable } from "svelte/store";
import { unsubsList } from "./unsubs";

export let user_store: Writable<login_response | null> = writable({token: "", user: undefined});
if (browser) {
    let old_user_data = localStorage.getItem('user_store_data');
    if (old_user_data != undefined && old_user_data != null && old_user_data != '' && isJsonString(old_user_data)) {
        user_store = writable(JSON.parse(old_user_data));
    }
    let userStoreUnsub = user_store.subscribe((value) => {
        if (value != undefined) {
            localStorage.setItem('user_store_data', JSON.stringify(value));
        }
       
    });
    unsubsList.update((value) => {
        value.push(userStoreUnsub)
        return value 
    })
}

export let user_store_derived: Readable<login_response | null> = derived([user_store], (value) => {
    return value[0]
})