import type { error_info_type } from "./error_info";


export interface firstshipper_error_type {
    pickup_address_zip_code_error: error_info_type,
    pickup_address_street_error: error_info_type;
    pickup_address_city_error: error_info_type;
    pickup_address_state_error: error_info_type;
    pickup_zipcode_mismatch_error: error_info_type;
    pickup_additional_services_error: error_info_type;
    pickup_by_error: error_info_type;
    pickup_date_error: error_info_type;
    shipper_first_name_error: error_info_type;
    shipper_last_name_error: error_info_type;
    shipper_email_error: error_info_type;
    shipper_phone_number_error: error_info_type;
    shipper_company_name_error: error_info_type;
    delivery_address_zip_code_error: error_info_type,
    delivery_address_street_error: error_info_type;
    delivery_address_city_error: error_info_type;
    delivery_address_state_error: error_info_type;
    delivery_zipcode_mismatch_error: error_info_type;
    delivery_additional_services_error: error_info_type;
    delivery_by_error: error_info_type;
    delivery_date_error: error_info_type;
    receiver_first_name_error: error_info_type;
    receiver_last_name_error: error_info_type;
    receiver_email_error: error_info_type;
    receiver_phone_number_error: error_info_type;
    receiver_company_name_error: error_info_type;
}
