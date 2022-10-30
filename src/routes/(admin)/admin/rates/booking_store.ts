import { browser } from "$app/environment";
import { newBooking, type zodBookRequestType } from "$libs/types/zod_book_request";
import {  writable, type Writable } from "svelte/store";
import { unsubsList } from "$stores/unsubs";
let booking_store_data : zodBookRequestType = newBooking()
export let booking_store: Writable<zodBookRequestType> = writable(booking_store_data)

if(browser){
    let old_data_data = localStorage.getItem("booking_store_data")
    if(old_data_data != null && old_data_data!= "" && old_data_data != 'null' && old_data_data!= undefined){
        let oldObject = JSON.parse(old_data_data)
        booking_store = writable(oldObject)
    }
    let bookingUnsub = booking_store.subscribe((value)=>{
        localStorage.setItem("booking_store_data", JSON.stringify(value))
    })
    unsubsList.update((value) => {
        value.push(bookingUnsub)
        return value 
    })
}
