import { z } from 'zod';
import { newBookDeliveryAddress, zodBookDeliveryAddress } from './book_delivery_address';
import { newBookDeliveryContact, zodBookDeliveryContact } from './book_delivery_contact';
import { error_info, makeInfo } from './error_info';

export const zodBookDeliveryLocation = z.object({
	/** @gotags: dynamodbav:"id,omitempty" */
	id: z.string().optional().nullable(),
	/** @gotags: dynamodbav:"company_name,omitempty" */
	company_name: z.string().optional().nullable(),
	/** @gotags: dynamodbav:"address,omitempty" */
	address: zodBookDeliveryAddress,
	/** @gotags: dynamodbav:"contact,omitempty" */
	contact: zodBookDeliveryContact,
	/** @gotags: dynamodbav:"business_hours,omitempty", */
	business_hours: z.object({}),
	/** @gotags: dynamodbav:"location_none,omitempty" */
	LOCATION_NONE: z.boolean().optional().nullable(),
	/** @gotags: dynamodbav:"delivery_location_with_dock,omitempty" */
	DELIVERY_LOCATION_WITH_DOCK: z.boolean(),
	/** @gotags: dynamodbav:"receiver_liftgate_delivery,omitempty" */
	LIFTGATE_DELIVERY: z.boolean(),
	/** @gotags: dynamodbav:"receiver_delivery_appointment,omitempty" */
	DELIVERY_APPOINTMENT: z.boolean(),
	/** @gotags: dynamodbav:"receiver_inside_delivery,omitempty" */
	INSIDE_DELIVERY: z.boolean(),
	/** @gotags: dynamodbav:"receiver_delivery_notification,omitempty" */
	DELIVERY_NOTIFICATION: z.boolean(),
	/** @gotags: dynamodbav:"receiver_instructions,omitempty" */
	receiver_instructions: z.string().optional().nullable(),
	/** @gotags: dynamodbav:"location_services,omitempty" */
	delivery_location_services: z.array(z.number()).min(1),
	/** @gotags: dynamodbav:"type,omitempty" */
	type: z.string().optional().nullable(),
	delivery_address_zip_code_error: error_info,
	delivery_address_street_error: error_info,
	delivery_address_city_error: error_info,
	delivery_address_state_error: error_info,
	delivery_zipcode_mismatch_error: error_info,
	delivery_additional_services_error: error_info,
	delivery_by_error: error_info,
	delivery_date_error: error_info,
	receiver_first_name_error: error_info,
	receiver_last_name_error: error_info,
	receiver_email_error: error_info,
	receiver_phone_number_error: error_info,
	receiver_company_name_error: error_info
});
export type zodBookDeliveryLocationType = z.infer<typeof zodBookDeliveryLocation>;

export function newBookDeliveryLocation(): zodBookDeliveryLocationType {
	let data: zodBookDeliveryLocationType = { 
		id: '',
		type: '',
		company_name: '',
		address: newBookDeliveryAddress(),
		contact: newBookDeliveryContact(),
		business_hours: { start: '', end: '' },
		LOCATION_NONE: false,
		DELIVERY_LOCATION_WITH_DOCK: true,
		LIFTGATE_DELIVERY: false,
		DELIVERY_APPOINTMENT: false,
		INSIDE_DELIVERY: false,
		DELIVERY_NOTIFICATION: false,
		receiver_instructions: '',
        delivery_location_services: [],
        receiver_first_name_error: makeInfo({
			valid: true,
			id: 'receiver_first_name_error',
			error_message: 'receiver first name is required.',
			clas: "firstshipper_errors",
			path: ''
		}),
		receiver_last_name_error: makeInfo({
			valid: true,
			id: 'receiver_last_name_error',
			error_message: 'receiver last name is required.',
			clas: "firstshipper_errors",
			path: ''
		}),
		receiver_email_error: makeInfo({
			valid: true,
			id: 'receiver_email_error',
			error_message: 'receiver email address is required.',
			clas: "firstshipper_errors",
			path: ''
		}),
		receiver_phone_number_error: makeInfo({
			valid: true,
			id: 'receiver_phone_number_error',
			error_message: 'receiver phone number is required.',
			clas: "firstshipper_errors",
			path: ''
		}),
		receiver_company_name_error: makeInfo({
			valid: true,
			id: 'receiver_company_name_error',
			error_message: 'receiver company name is required.',
			clas: "firstshipper_errors",
			path: ''
        }),
		delivery_address_zip_code_error: makeInfo({
			valid: true,
			id: 'delivery_address_zip_code',
			error_message: 'delivery zipcode is not valid or empty.',
			clas: "firstshipper_errors",
			path: 'pick'
		}),
		delivery_address_street_error: makeInfo({
			valid: true,
			id: 'delivery_street_error',
			error_message: 'delivery street is required.',
			clas: "firstshipper_errors",
			path: ''
		}),
		delivery_address_city_error: makeInfo({
			valid: true,
			id: 'delivery_city_error',
			error_message: 'delivery city is required.',
			clas: "firstshipper_errors",
			path: ''
		}),
		delivery_address_state_error: makeInfo({
			valid: true,
			id: 'delivery_state_error',
			error_message: 'delivery state is required.',
			clas: "firstshipper_errors",
			path: ''
		}),
		delivery_zipcode_mismatch_error: makeInfo({
			valid: true,
			id: 'delivery_zipcode_mismatch_err',
			error_message:
				'quote pickup zipcode and current zipcode does not match. please verify pickup zipcode or update the quote.',
			clas: "firstshipper_errors",
			path: ''
		}),
		delivery_additional_services_error: makeInfo({
			valid: true,
			id: 'delivery_location_services',
			error_message:
				'please choose if liftgate is required at delivery or choose if business with liftgate.',
			clas: "firstshipper_errors",
			path: ''
		}),
		delivery_by_error: makeInfo({
			valid: true,
			id: 'delivery_by_error',
			error_message: 'delivery by time is required.',
			clas: "firstshipper_errors",
			path: ''
		}),
		delivery_date_error: makeInfo({
			valid: true,
			id: 'delivery_date_error',
			error_message:
				'pickup date is not valid or falls on weekend or holiday. Please choose another date.',
			clas: "firstshipper_errors",
			path: ''
		})
	};
	return data;
}
