import { z } from "zod"

export const zodBookPickupAddress = z.object({
    /** @gotags: dynamodbav:"address_line_1,omitempty" */
   address_line_1: z.string().min(5, "shipper street number is required"),
   /** @gotags: dynamodbav:"address_line_2,omitempty" */
   address_line_2: z.string().optional().nullable(),
   /** @gotags: dynamodbav:"street_name,omitempty" */
   street_name: z.string().min(1, "shipper street name is required"),
   /** @gotags: dynamodbav:"city,omitempty" */
   city: z.string().min(2, "shipper city is required"),
   /** @gotags: dynamodbav:"county,omitempty" */
   county: z.string().optional().nullable(),
   /** @gotags: dynamodbav:"zip_code,omitempty" */
   zip_code: z.string().min(5, "shipper zip code is not valid").max(5, "shipper zip code is not valid"),
   /** @gotags: dynamodbav:"state,omitempty" */
   state: z.string().min(2, "shipper state is required"),
   /** @gotags: dynamodbav:"state_code,omitempty" */
   state_code: z.string().optional().nullable(),
   /** @gotags: dynamodbav:"extended_zip_code,omitempty" */
   extended_zip_code: z.string().optional().nullable(),
   /** @gotags: dynamodbav:"country,omitempty" */
   country: z.string().optional().nullable(),
   /** @gotags: dynamodbav:"country_code,omitempty" */
   country_code: z.string().optional().nullable(),
   /** @gotags: dynamodbav:"free_form_address,omitempty" */
   free_form_address: z.string().optional().nullable(),
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

export type zodBookPickupAddresstype = z.infer<typeof zodBookPickupAddress>

export function newBookPickupAddress():zodBookPickupAddresstype{
    let addres:zodBookPickupAddresstype ={
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
    return addres
}