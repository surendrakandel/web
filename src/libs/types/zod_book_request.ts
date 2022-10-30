import { z } from "zod";
import { newZodBid, zodBid } from "./bid";
import { newBookDeliveryLocation, zodBookDeliveryLocation } from "./book_delivery_location";
import { newBookPickupLocation, zodBookPickupLocation } from "./book_pickup_location";
import { newCommodity, zodCommodity } from "./commodity";
import { newShipmentDetails, zodShipmentDetails } from "./shipment_details";

export let zodBookRequestSchema = z.object({
    /** @gotags: dynamodbav:"shipment_details,omitempty" */
    shipment_details: zodShipmentDetails,
    /** @gotags: dynamodbav:"commodities,omitempty" */
    commodities: z.array(zodCommodity).min(1),
    /** @gotags: dynamodbav:"pickup,omitempty" */
    pickup: zodBookPickupLocation,
    /** @gotags: dynamodbav:"delivery,omitempty" */
    delivery: zodBookDeliveryLocation,
    /** @gotags: dynamodbav:"bid,omitempty" */
    bid: zodBid,
    /** @gotags: dynamodbav:"bids,omitempty" */
    bids: z.array(zodBid).min(1),
    /** @gotags: dynamodbav:"business_id,omitempty" */
    business_id: z.string(),
    /** @gotags: dynamodbav:"type,omitempty" */
    type: z.string(),
    /** @gotags: dynamodbav:"quote_id,omitempty" */
    quote_id: z.string(),
    /** @gotags: dynamodbav:"booking_success,omitempty" */
    booking_success: z.boolean().optional().nullable(),
    /** @gotags: dynamodbav:"special_instruction,omitempty" */
    special_instruction: z.string().optional().nullable(),
})
export type zodBookRequestType = z.infer<typeof zodBookRequestSchema>;

export function newBooking(): zodBookRequestType{
    let booking: zodBookRequestType = {
         /** @gotags: dynamodbav:"shipment_details,omitempty" */
        shipment_details: newShipmentDetails(),
        /** @gotags: dynamodbav:"commodities,omitempty" */
        commodities: [newCommodity(0)],
        /** @gotags: dynamodbav:"pickup,omitempty" */
        pickup: newBookPickupLocation(),
        /** @gotags: dynamodbav:"delivery,omitempty" */
        delivery: newBookDeliveryLocation(),
        /** @gotags: dynamodbav:"bid,omitempty" */
        bid: newZodBid(),
        /** @gotags: dynamodbav:"bids,omitempty" */
        bids: [newZodBid()],
        /** @gotags: dynamodbav:"business_id,omitempty" */
        business_id: "",
        /** @gotags: dynamodbav:"type,omitempty" */
        type: "bid",
        /** @gotags: dynamodbav:"quote_id,omitempty" */
        quote_id: "",
        /** @gotags: dynamodbav:"booking_success,omitempty" */
        booking_success: false,
        /** @gotags: dynamodbav:"special_instruction,omitempty" */
        special_instruction: ""
    }
    return booking
}

