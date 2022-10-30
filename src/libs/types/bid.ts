
import { z } from "zod";

export const zodBid = z.object({
    /** @gotags: dynamodbav:"quote_id,omitempty" */
    quote_id: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"bid_id,omitempty" */
    bid_id: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"carrier,omitempty" */
    carrier: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"amount,omitempty" */
    amount: z.object({
        /** @gotags: dynamodbav:"full_amount,omitempty" */
        full_amount: z.number().optional().nullable(),
        /** @gotags: dynamodbav:"discount_applied,omitempty" */
        discount_applied: z.number().optional().nullable(),
        /** @gotags: dynamodbav:"net_amount,omitempty" */
        net_amount: z.number(),
    }).optional().nullable(),
    /** @gotags: dynamodbav:"transit_time,omitempty" */
    transit_time: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"guranteed,omitempty" */
    guranteed: z.boolean().optional().nullable(),
    /** @gotags: dynamodbav:"business_id,omitempty" */
    business_id: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"company_large_logo_url,omitempty" */
    company_large_logo_url: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"company_small_logo_url,omitempty" */
    company_small_logo_url:  z.string().optional().nullable(),
    /** @gotags: dynamodbav:"delivery_date,omitempty" */
    delivery_date:  z.string().optional().nullable(),
    /** @gotags: dynamodbav:"vendor_quote_id,omitempty" */
    vendor_quote_id:  z.string().optional().nullable(),
    /** @gotags: dynamodbav:"capacity_provider_quote_id,omitempty" */
    capacity_provider_quote_id:  z.string().optional().nullable(),
    /** @gotags: dynamodbav:"vendor_name,omitempty" */
    vendor_name:  z.string().optional().nullable(),
    /** @gotags: dynamodbav:"carrier_name,omitempty" */
    carrier_name:  z.string().optional().nullable(),
    /** @gotags: dynamodbav:"carrier_code,omitempty" */
    carrier_code:  z.string().optional().nullable(),
    /** @gotags: dynamodbav:"type,omitempty" */
    type: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"carrier_quote_id,omitempty" */
    carrier_quote_id:  z.string(),
})

export type zodBidType = z.infer<typeof zodBid>

export function newZodBid(): zodBidType{
    let data:zodBidType = {
        quote_id: "",
        bid_id: "",
        carrier: "",
        amount: null,
        transit_time: "",
        guranteed: false,
        business_id: "",
        company_large_logo_url: "",
        company_small_logo_url: "",
        delivery_date: "",
        vendor_quote_id: "",
        capacity_provider_quote_id: "",
        vendor_name: "",
        carrier_name: "",
        carrier_code: "",
        type: "",
        carrier_quote_id: ""
    }
    return data
}