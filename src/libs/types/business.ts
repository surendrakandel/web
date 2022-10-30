import type { business } from "$gen/business";

export function newBusiness():business{
    let bis:business = {
        type: "",
        business_name: "",
        business_id: "",
        business_email: "",
        accounting_email: "",
        customer_service_email: "",
        high_priority_email: "",
        avatar_url: "",
        admin_email: "",
        create_at: "",
        updated_at: "",
        deleted_at: "",
        phone_number: "",
        needs_address_update: false,
        needs_default_pickup_address_update: false,
        needs_default_delivery_address_update: false
    }
    return bis
}