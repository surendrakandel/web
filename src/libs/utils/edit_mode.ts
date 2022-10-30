import { quote_store } from "$src/routes/(admin)/admin/quote/quote_store";

export function toogleQuoteEditMode(){
    setTimeout(() => {
        quote_store.update((value) => {
            value.shipment_details.edit_mode = false 
            return value
        })
    }, 3000);
}
