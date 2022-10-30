
import { z } from "zod";

export const zodShipmentDetails = z.object({
    /** @gotags: dynamodbav:"quote_id,omitempty" */
    quote_id: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"requester_id,omitempty" */
    requester_id: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"mode,omitempty" */
    mode: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"liable_party_id,omitempty" */
    liable_party_id: z.string().optional(),
    /** @gotags: dynamodbav:"pickup_date,omitempty" */
    pickup_date: z.string(),
    /** @gotags: dynamodbav:"display_date,omitempty" */
    display_date: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"delivery_date,omitempty" */
    delivery_date: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"vendor_bids,omitempty" */
    total_items: z.number().optional().nullable(),
    /** @gotags: dynamodbav:"total_weight,omitempty" */
    total_weight: z.number().optional().nullable(),
    /** @gotags: dynamodbav:"valid_until,omitempty" */
    valid_until: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"edit_mode,omitempty" */
    edit_mode: z.boolean().optional().nullable(),
    /** @gotags: dynamodbav:"business_id,omitempty" */
    business_id: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"type,omitempty" */
    type: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"shipment_instructions,omitempty" */
    shipment_instructions: z.string().optional().nullable(),
})
export type zopShipmentDetailsType = z.infer<typeof zodShipmentDetails>
export function newShipmentDetails():zopShipmentDetailsType{
    let details:zopShipmentDetailsType = {
        quote_id: "",
        requester_id: "",
        mode: "",
        liable_party_id: "",
        pickup_date: "",
        display_date: "",
        delivery_date: "",
        total_items: 0,
        total_weight: 0,
        valid_until: "",
        edit_mode: false,
        business_id: "",
        type: ""
    }
    return details
}