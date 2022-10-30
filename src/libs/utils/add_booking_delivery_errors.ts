import type { zodBookDeliveryLocationType } from "$types/book_delivery_location";
import { makeInfo } from "$types/error_info";

export function addBookingDeliveryErrors(value: zodBookDeliveryLocationType): zodBookDeliveryLocationType{
    value.receiver_first_name_error = makeInfo({
        valid: true,
        id: 'receiver_first_name_error',
        error_message: 'receiver first name is not valid or is empty.',
        clas: "firstshipper_errors",
        path: ''
    }),
    value.receiver_last_name_error = makeInfo({
        valid: true,
        id: 'receiver_last_name_error',
        error_message: 'receiver last name is not valid or is empty.',
        clas: "firstshipper_errors",
        path: ''
    }),
    value.receiver_email_error = makeInfo({
        valid: true,
        id: 'receiver_email_error',
        error_message: 'receiver email address is not valid or is empty.',
        clas: "firstshipper_errors",
        path: ''
    }),
    value.receiver_phone_number_error = makeInfo({
        valid: true,
        id: 'receiver_phone_number_error',
        error_message: 'receiver phone number is not valid or is empty.',
        clas: "firstshipper_errors",
        path: ''
    }),
    value.receiver_company_name_error = makeInfo({
        valid: true,
        id: 'receiver_company_name_error',
        error_message: 'receiver company name is not valid or is empty.',
        clas: "firstshipper_errors",
        path: ''
    }),
    value.delivery_address_zip_code_error = makeInfo({
        valid: true,
        id: 'delivery_address_zip_code',
        error_message: 'delivery zipcode is not valid or is empty.',
        clas: "firstshipper_errors",
        path: 'pick'
    }),
    value.delivery_address_street_error = makeInfo({
        valid: true,
        id: 'delivery_street_error',
        error_message: 'delivery street is not valid or is empty. Please make sure delivery address is same as stated in quote.',
        clas: "firstshipper_errors",
        path: ''
    }),
    value.delivery_address_city_error = makeInfo({
        valid: true,
        id: 'delivery_city_error',
        error_message: 'delivery city is not valid or is empty.',
        clas: "firstshipper_errors",
        path: ''
    }),
    value.delivery_address_state_error = makeInfo({
        valid: true,
        id: 'delivery_state_error',
        error_message: 'delivery state is not valid or is empty.',
        clas: "firstshipper_errors",
        path: ''
    }),
    value.delivery_zipcode_mismatch_error = makeInfo({
        valid: true,
        id: 'delivery_zipcode_mismatch_err',
        error_message:
            'quote pickup zipcode and current zipcode does not match. please verify pickup zipcode or update the quote.',
        clas: "firstshipper_errors",
        path: ''
    }),
    value.delivery_additional_services_error = makeInfo({
        valid: true,
        id: 'delivery_location_services',
        error_message:
            'please choose if liftgate is not valid or is empty at pickup or choose if business with liftgate.',
        clas: "firstshipper_errors",
        path: ''
    }),
    value.delivery_by_error = makeInfo({
        valid: true,
        id: 'delivery_by_error',
        error_message: 'delivery by time is not valid or is empty.',
        clas: "firstshipper_errors",
        path: ''
    }),
    value.delivery_date_error = makeInfo({
        valid: true,
        id: 'delivery_date_error',
        error_message:
            'pickup date is not valid or is empty or falls on weekend or holiday. Please choose another date.',
        clas: "firstshipper_errors",
        path: ''
    })
    return value
}