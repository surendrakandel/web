import type { zodBookPickupLocationType } from "$types/book_pickup_location";
import { makeInfo } from "$types/error_info";

export function addBookingPickupErrors(value: zodBookPickupLocationType): zodBookPickupLocationType{
    value.shipper_first_name_error = makeInfo({
        valid: true,
        id: 'shipper_first_name_error',
        error_message: 'shipper first name is not valid or is empty.',
        clas: "firstshipper_errors",
        path: ''
    }),
        value.shipper_additional_services_error = makeInfo({
            valid: true,
            id: "shipper_additional_services_error",
            error_message: "please select business with dock or choose liftgate pickup required",
            clas: "firstshipper_errors",
            path: '',
    })
    value.shipper_last_name_error = makeInfo({
        valid: true,
        id: 'shipper_last_name_error',
        error_message: 'shipper last name is not valid or is empty.',
        clas: "firstshipper_errors",
        path: ''
    }),
    value.shipper_email_error = makeInfo({
        valid: true,
        id: 'shipper_email_error',
        error_message: 'shipper email address is not valid or is empty.',
        clas: "firstshipper_errors",
        path: ''
    }),
    value.shipper_phone_number_error = makeInfo({
        valid: true,
        id: 'shipper_phone_number_error',
        error_message: 'shipper phone number is not valid or is empty.',
        clas: "firstshipper_errors",
        path: ''
    }),
    value.shipper_company_name_error = makeInfo({
        valid: true,
        id: 'shipper_company_name_error',
        error_message: 'shipper company name is not valid or is empty.',
        clas: "firstshipper_errors",
        path: ''
    }),
    value.pickup_address_zip_code_error = makeInfo({
        valid: true,
        id: 'pickup_address_zip_code',
        error_message: 'pickup zipcode is not valid or is empty or empty.',
        clas: "firstshipper_errors",
        path: 'pick'
    }),
    value.pickup_address_street_error = makeInfo({
        valid: true,
        id: 'pickup_street_error',
        error_message: 'pickup street is not valid or is empty.Please make sure pickup address is same as stated in quote.',
        clas: "firstshipper_errors",
        path: ''
    }),
    value.pickup_address_city_error = makeInfo({
        valid: true,
        id: 'pickup_city_error',
        error_message: 'pickup city is not valid or is empty.',
        clas: "firstshipper_errors",
        path: ''
    }),
    value.pickup_address_state_error = makeInfo({
        valid: true,
        id: 'pickup_state_error',
        error_message: 'pickup state is not valid or is empty.',
        clas: "firstshipper_errors",
        path: ''
    }),
    value.pickup_zipcode_mismatch_error = makeInfo({
        valid: true,
        id: 'pickup_zipcode_mismatch_err',
        error_message:
            'quote pickup zipcode and current zipcode does not match. please verify pickup zipcode or update the quote.',
        clas: "firstshipper_errors",
        path: ''
    })
    return value
}