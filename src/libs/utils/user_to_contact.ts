import type { contact } from "$gen/contact"
import type { user } from "$gen/user"



export function UserToContact(user:user): contact{
    try {
        let contact:contact = {
            first_name: user?.first_name,
            last_name: user?.last_name,
            phone_number: user?.phone_numbers[0],
            phone_number_extension: "",
            email_address: user?.email,
            phone_number_display: user?.phone_numbers[0],
            roles: user?.roles,
            preffered_contact_method: "",
            business_id: user.business_id,
            type: "contact"
        }
        return contact
    } catch (error) {
        console.log('could not create User to Contact', error)
    }
}