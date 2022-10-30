
import type { location } from '$src/gen/location';
import { z } from 'zod';
import { newBookPickupAddress, zodBookPickupAddress } from './book_pickup_address';
import { newBookPickupContact, zodBookPickupContact } from './book_pickup_contact';
import { error_info, makeInfo } from './error_info';

export const zodBookPickupLocation = z.object({
	/** @gotags: dynamodbav:"id,omitempty" */
	id: z.string().optional().nullable(),
	/** @gotags: dynamodbav:"company_name,omitempty" */
	company_name: z.string().optional().nullable(),
	/** @gotags: dynamodbav:"address,omitempty" */
	address: zodBookPickupAddress,
	/** @gotags: dynamodbav:"contact,omitempty" */
	contact: zodBookPickupContact,
	/** @gotags: dynamodbav:"business_hours,omitempty", */
	business_hours: z.object({}),
	/** @gotags: dynamodbav:"location_none,omitempty" */
	PICKUP_LOCATION_NONE: z.boolean().optional().nullable(),
	/** @gotags: dynamodbav:"pickup_location_with_dock,omitempty" */
	PICKUP_LOCATION_WITH_DOCK: z.boolean(),
	/** @gotags: dynamodbav:"shipper_liftgate_delivery,omitempty" */
	LIFTGATE_PICKUP: z.boolean(),
	/** @gotags: dynamodbav:"shipper_pickup_appointment,omitempty" */
	PICKUP_APPOINTMENT: z.boolean(),
	/** @gotags: dynamodbav:"shipper_inside_pickup,omitempty" */
	INSIDE_PICKUP: z.boolean(),
	/** @gotags: dynamodbav:"shipper_pickup_notification,omitempty" */
	PICKUP_NOTIFICATION: z.boolean(),
	/** @gotags: dynamodbav:"shipper_instructions,omitempty" */
	shipper_instructions: z.string().optional().nullable(),
	/** @gotags: dynamodbav:"location_services,omitempty" */
	pickup_location_services: z.array(z.number()).min(1),
	/** @gotags: dynamodbav:"type,omitempty" */
	type: z.string().optional().nullable(),
	shipper_first_name_error: error_info,
	shipper_last_name_error: error_info,
	shipper_email_error: error_info,
	shipper_phone_number_error: error_info,
    shipper_company_name_error: error_info,
    shipper_additional_services_error: error_info,
    pickup_address_zip_code_error: error_info,
    pickup_address_street_error: error_info,
    pickup_address_city_error: error_info,
    pickup_address_state_error: error_info,
    pickup_zipcode_mismatch_error: error_info,
});
export type zodBookPickupLocationType = z.infer<typeof zodBookPickupLocation>;

export function newBookPickupLocation(): zodBookPickupLocationType {
	let data: zodBookPickupLocationType = {
		id: '',
		type: '',
		company_name: '',
		address: newBookPickupAddress(),
		contact: newBookPickupContact(),
		pickup_location_services: [],
		business_hours: { start: '', end: '' },
		PICKUP_LOCATION_NONE: false,
		PICKUP_LOCATION_WITH_DOCK: false,
		LIFTGATE_PICKUP: false,
		PICKUP_APPOINTMENT: false,
		INSIDE_PICKUP: false,
		PICKUP_NOTIFICATION: false,
		shipper_first_name_error: makeInfo({
			valid: true,
			id: 'shipper_first_name_error',
			error_message: 'shipper first name is required.',
			clas: "firstshipper_errors",
			path: ''
		}),
		shipper_last_name_error: makeInfo({
			valid: true,
			id: 'shipper_last_name_error',
			error_message: 'shipper last name is required.',
			clas: "firstshipper_errors",
			path: ''
		}),
		shipper_email_error: makeInfo({
			valid: true,
			id: 'shipper_email_error',
			error_message: 'shipper email address is required.',
			clas: "firstshipper_errors",
			path: ''
		}),
		shipper_phone_number_error: makeInfo({
			valid: true,
			id: 'shipper_phone_number_error',
			error_message: 'shipper phone number is required.',
			clas: "firstshipper_errors",
			path: ''
		}),
		shipper_company_name_error: makeInfo({
			valid: true,
			id: 'shipper_company_name_error',
			error_message: 'shipper company name is required.',
			clas: "firstshipper_errors",
			path: ''
		}),
		pickup_address_zip_code_error: makeInfo({
			valid: true,
			id: 'pickup_address_zip_code',
			error_message: 'pickup zipcode is not valid or empty.',
			clas: "firstshipper_errors",
			path: 'pick'
		}),
		pickup_address_street_error: makeInfo({
			valid: true,
			id: 'pickup_street_error',
			error_message: 'pickup street is required.',
			clas: "firstshipper_errors",
			path: ''
		}),
		pickup_address_city_error: makeInfo({
			valid: true,
			id: 'pickup_city_error',
			error_message: 'pickup city is required.',
			clas: "firstshipper_errors",
			path: ''
		}),
		pickup_address_state_error: makeInfo({
			valid: true,
			id: 'pickup_state_error',
			error_message: 'pickup state is required.',
			clas: "firstshipper_errors",
			path: ''
		}),
		pickup_zipcode_mismatch_error: makeInfo({
			valid: true,
			id: 'pickup_zipcode_mismatch_err',
			error_message: 'quote pickup zipcode and current zipcode does not match. please verify pickup zipcode or update the quote.',
			clas: "firstshipper_errors",
			path: ''
		}),
	
		shipper_additional_services_error: makeInfo({
			valid: true,
			id: 'pickup_location_services',
			error_message:
				'please choose if liftgate is required at pickup or choose if business with liftgate.',
			clas: "firstshipper_errors",
			path: ''
		})
	};
	return data;
}
