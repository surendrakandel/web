
import { z } from "zod";

export const zodAddress = z.object({
    /** @gotags: dynamodbav:"address_line_1,omitempty" */
   address_line_1: z.string().optional().nullable(),
   /** @gotags: dynamodbav:"address_line_2,omitempty" */
   address_line_2: z.string().optional(),
   /** @gotags: dynamodbav:"street_name,omitempty" */
   street_name: z.string().optional().nullable(),
   /** @gotags: dynamodbav:"city,omitempty" */
   city: z.string().optional().nullable(),
   /** @gotags: dynamodbav:"county,omitempty" */
   county: z.string().optional().nullable(),
   /** @gotags: dynamodbav:"zip_code,omitempty" */
   zip_code: z.string().min(5, "zip code is not valid").max(5, "zip code is not valid"),
   /** @gotags: dynamodbav:"state,omitempty" */
   state: z.string().optional().nullable(),
   /** @gotags: dynamodbav:"state_code,omitempty" */
   state_code: z.string().optional().nullable(),
   /** @gotags: dynamodbav:"extended_zip_code,omitempty" */
   extended_zip_code: z.string().optional().nullable(),
   /** @gotags: dynamodbav:"country,omitempty" */
   country: z.string().optional().nullable(),
   /** @gotags: dynamodbav:"country_code,omitempty" */
   country_code: z.string().optional().nullable(),
   /** @gotags: dynamodbav:"free_form_address,omitempty" */
   free_form_address: z.string(),
   /** @gotags: dynamodbav:"local_name,omitempty" */
   local_name: z.string().optional().nullable(),
   /** @gotags: dynamodbav:"lat,omitempty" */
   lat: z.number().optional().nullable(),
   /** @gotags: dynamodbav:"long,omitempty" */
   long: z.number().optional().nullable(),
   /** @gotags: dynamodbav:"business_id,omitempty" */
   business_id: z.string().optional().nullable(),
   /** @gotags: dynamodbav:"type,omitempty" */
   type: z.string().optional().nullable(),
})
export type zodAddresstype = z.infer<typeof zodAddress>
export enum addressType {
    pickup,
    delivery,
    any,
}
export function newAddress(addressType: addressType): zodAddresstype{
    if (addressType.toString() == "0" && import.meta.env.VITE_ENV === 'dev') {
        return {
            address_line_1: "",
            address_line_2: "",
            street_name: "",
            city: "",
            county: "",
            zip_code: "90650",
            state: "",
            state_code: "",
            extended_zip_code: "",
            country: "",
            country_code: "",
            free_form_address: "",
            local_name: "",
            lat: 0,
            long: 0,
            business_id: "",
            type: ""
        }
    }
    if (addressType.toString() == "1" && import.meta.env.VITE_ENV === 'dev') {
        return {
            address_line_1: "",
            address_line_2: "",
            street_name: "",
            city: "",
            county: "",
            zip_code: "77081",
            state: "",
            state_code: "",
            extended_zip_code: "",
            country: "",
            country_code: "",
            free_form_address: "",
            local_name: "",
            lat: 0,
            long: 0,
            business_id: "",
            type: ""
        }
    }
    return {
            address_line_1: "",
            address_line_2: "",
            street_name: "",
            city: "",
            county: "",
            zip_code: "",
            state: "",
            state_code: "",
            extended_zip_code: "",
            country: "",
            country_code: "",
            free_form_address: "",
            local_name: "",
            lat: 0,
            long: 0,
            business_id: "",
            type: ""
    }
}
    