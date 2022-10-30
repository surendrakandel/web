import type { user } from "$gen/user";

export function newUser():user{
    let usr:user = {
        type: "",
        cognito_id: "",
        user_name: "",
        user_id: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        hashed_password: "",
        avatar_url: "",
        roles: [],
        new_password_required: false,
        password_changed_on: "",
        created_at: "",
        updated_at: "",
        deleted_at: "",
        phone_numbers: [],
        email_verified: false,
        reset_password_tokens: [],
        sessions: [],
        business_ids: [],
        unsuscribed_to_marketing_email: false,
        status: undefined,
        last_login_on: "",
        business_id: ""
    }
    return usr
}