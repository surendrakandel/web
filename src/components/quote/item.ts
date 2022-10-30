import { quote_store } from "$src/routes/(admin)/admin/quote/quote_store";

export function ValidateItem() {
    quote_store.update((value) => {
        value.commodities.forEach((item) => {
            if (item.length > 10 && item.length < 90) {
                item.length_error.valid = true
            } else {
                item.length_error.valid = false
            }
            if (item.width > 10 && item.width < 90) {
                item.width_error.valid = true
            }else {
                item.width_error.valid = false
            }
            if (item.height > 10 && item.width < 90) {
                item.height_error.valid = true
            }else {
                item.height_error.valid = false
            }
            if (item.weight > 50 && item.weight < 10000) {
                item.weight_error.valid = true
            }else {
                item.weight_error.valid = false
            }
            if (item.shipment_description.length > 3) {
                item.shipment_description_error.valid = true
            }else {
                item.shipment_description_error.valid = false
            }
            if (item.quantity > 0) {
                item.quantity_error.valid = true
            }else {
                item.quantity_error.valid = false
            }
        })
        return value
    })
}