import { z } from 'zod';
import { newCommodity, zodCommodity } from './commodity';
import { newDeliveryLocation, zodDeliveryLocation } from './delivery_location';
import { newPickupLocation, zodPickupLocation } from './pickup_location';
import { newShipmentDetails, zodShipmentDetails } from './shipment_details';

export let zodQuoteRequest = z.object({
	/** @gotags: dynamodbav:"shipment_details,omitempty" */
    shipment_details: zodShipmentDetails,
    /** @gotags: dynamodbav:"commodities,omitempty" */
    commodities: z.array(zodCommodity).min(1),
    /** @gotags: dynamodbav:"pickup,omitempty" */
    pickup: zodPickupLocation,
    /** @gotags: dynamodbav:"delivery,omitempty" */
    delivery: zodDeliveryLocation,
    /** @gotags: dynamodbav:"business_id,omitempty" */
    business_id: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"type,omitempty" */
    type: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"quote_id,omitempty" */
    quote_id: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"booking_success,omitempty" */
    booking_success: z.boolean().optional().nullable(),
    /** @gotags: dynamodbav:"special_instruction,omitempty" */
    special_instruction: z.string().optional().nullable(),
});
export type zodQuoteRequestType = z.infer<typeof zodQuoteRequest>;

export function newQuote(): zodQuoteRequestType {
	let quote: zodQuoteRequestType = {
		/** @gotags: dynamodbav:"shipment_details,omitempty" */
		shipment_details: newShipmentDetails(),
		/** @gotags: dynamodbav:"commodities,omitempty" */
		commodities: [newCommodity(0)],
		/** @gotags: dynamodbav:"pickup,omitempty" */
		pickup: newPickupLocation(),
		/** @gotags: dynamodbav:"delivery,omitempty" */
		delivery: newDeliveryLocation(),
		/** @gotags: dynamodbav:"business_id,omitempty" */
		business_id: '',
		/** @gotags: dynamodbav:"type,omitempty" */
		type: 'bid',
		/** @gotags: dynamodbav:"quote_id,omitempty" */
		quote_id: '',
		/** @gotags: dynamodbav:"booking_success,omitempty" */
		booking_success: false,
		/** @gotags: dynamodbav:"special_instruction,omitempty" */
		special_instruction: ''
	};
	return quote;
}
