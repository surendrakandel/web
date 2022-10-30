
import { z } from "zod"

export let zodBookDeliveryContact = z.object({
    /** @gotags: dynamodbav:"first_name,omitempty" */
    first_name: z.string().min(2, "receiver first name is required"),
    /** @gotags: dynamodbav:"last_name,omitempty" */
    last_name: z.string().min(2, "receiver last name is required"),
    /** @gotags: dynamodbav:"phone_number,omitempty" */
    phone_number: z.string().min(10, "receiver phone number is required").max(10, "receiver phone nubmer can not be longer than 10 digits"),
    /** @gotags: dynamodbav:"phone_number_extension,omitempty" */
    phone_number_extension: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"email_address,omitempty" */
    email_address: z.string().email("receiver email is required"),
    /** @gotags: dynamodbav:"phone_number_display,omitempty" */
    phone_number_display: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"roles,omitempty" */
    roles: z.array(z.number()).optional().nullable(),
    /** @gotags: dynamodbav:"preffered_contact_method,omitempty" */
    preffered_contact_method: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"business_id,omitempty" */
    business_id: z.string().optional().nullable(),
    /** @gotags: dynamodbav:"type,omitempty" */
    type: z.string().optional().nullable(),
 })
 export type zodBookDeliveryContactType = z.infer<typeof zodBookDeliveryContact>
 
export function newBookDeliveryContact(): zodBookDeliveryContactType{
    let contct: zodBookDeliveryContactType = {
        first_name: "",
        last_name: "",
        phone_number: "",
        phone_number_extension: "",
        email_address: "",
        phone_number_display: "",
        roles: [],
        preffered_contact_method: "",
        business_id: "",
        type: ""
    }
    return contct
}