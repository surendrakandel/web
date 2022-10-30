/* eslint-disable */
import { role, roleFromJSON, roleToJSON } from "./role";
import { status } from "./locked";

export const protobufPackage = "v1";

export interface user {
  /** @gotags: dynamodbav:"type,omitempty" */
  type: string;
  /** @gotags: dynamodbav:"cognito_id,omitempty" */
  cognito_id: string;
  /** @gotags: dynamodbav:"user_name,omitempty" */
  user_name: string;
  /** @gotags: dynamodbav:"user_id,omitempty" */
  user_id: string;
  /** @gotags: dynamodbav:"first_name,omitempty" */
  first_name: string;
  /** @gotags: dynamodbav:"middle_name,omitempty" */
  middle_name: string;
  /** @gotags: dynamodbav:"last_name,omitempty" */
  last_name: string;
  /** @gotags: dynamodbav:"email,omitempty" */
  email: string;
  /** @gotags: dynamodbav:"hashed_password,omitempty" */
  hashed_password: string;
  /** @gotags: dynamodbav:"avatar_url,omitempty" */
  avatar_url: string;
  /** @gotags: dynamodbav:"roles,omitempty" */
  roles: role[];
  /** @gotags: dynamodbav:"new_password_required,omitempty" */
  new_password_required: boolean;
  /** @gotags: dynamodbav:"password_changed_on,omitempty" */
  password_changed_on: string;
  /** @gotags: dynamodbav:"created_on,omitempty" */
  created_at: string;
  /** @gotags: dynamodbav:"updated_on,omitempty" */
  updated_at: string;
  /** @gotags: dynamodbav:"deleted_on,omitempty" */
  deleted_at: string;
  /** @gotags: dynamodbav:"phone_number,omitempty" */
  phone_numbers: string[];
  /** @gotags: dynamodbav:"email_verified" */
  email_verified: boolean;
  /** @gotags: dynamodbav:"reset_password_tokens,omitempty" */
  reset_password_tokens: string[];
  /** @gotags: dynamodbav:"sessions,omitempty" */
  sessions: string[];
  /** @gotags: dynamodbav:"business_ids,omitempty" */
  business_ids: string[];
  /** @gotags: dynamodbav:"unsuscribed_to_marketing_email,omitempty" */
  unsuscribed_to_marketing_email: boolean;
  /** @gotags: dynamodbav:"status" */
  status: status | undefined;
  /** @gotags: dynamodbav:"last_login_on,omitempty" */
  last_login_on: string;
  /** @gotags: dynamodbav:"business_id" */
  business_id: string;
}

function createBaseuser(): user {
  return {
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
    business_id: "",
  };
}

export const user = {
  fromJSON(object: any): user {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      cognito_id: isSet(object.cognito_id) ? String(object.cognito_id) : "",
      user_name: isSet(object.user_name) ? String(object.user_name) : "",
      user_id: isSet(object.user_id) ? String(object.user_id) : "",
      first_name: isSet(object.first_name) ? String(object.first_name) : "",
      middle_name: isSet(object.middle_name) ? String(object.middle_name) : "",
      last_name: isSet(object.last_name) ? String(object.last_name) : "",
      email: isSet(object.email) ? String(object.email) : "",
      hashed_password: isSet(object.hashed_password)
        ? String(object.hashed_password)
        : "",
      avatar_url: isSet(object.avatar_url) ? String(object.avatar_url) : "",
      roles: Array.isArray(object?.roles)
        ? object.roles.map((e: any) => roleFromJSON(e))
        : [],
      new_password_required: isSet(object.new_password_required)
        ? Boolean(object.new_password_required)
        : false,
      password_changed_on: isSet(object.password_changed_on)
        ? String(object.password_changed_on)
        : "",
      created_at: isSet(object.created_at) ? String(object.created_at) : "",
      updated_at: isSet(object.updated_at) ? String(object.updated_at) : "",
      deleted_at: isSet(object.deleted_at) ? String(object.deleted_at) : "",
      phone_numbers: Array.isArray(object?.phone_numbers)
        ? object.phone_numbers.map((e: any) => String(e))
        : [],
      email_verified: isSet(object.email_verified)
        ? Boolean(object.email_verified)
        : false,
      reset_password_tokens: Array.isArray(object?.reset_password_tokens)
        ? object.reset_password_tokens.map((e: any) => String(e))
        : [],
      sessions: Array.isArray(object?.sessions)
        ? object.sessions.map((e: any) => String(e))
        : [],
      business_ids: Array.isArray(object?.business_ids)
        ? object.business_ids.map((e: any) => String(e))
        : [],
      unsuscribed_to_marketing_email: isSet(
        object.unsuscribed_to_marketing_email
      )
        ? Boolean(object.unsuscribed_to_marketing_email)
        : false,
      status: isSet(object.status) ? status.fromJSON(object.status) : undefined,
      last_login_on: isSet(object.last_login_on)
        ? String(object.last_login_on)
        : "",
      business_id: isSet(object.business_id) ? String(object.business_id) : "",
    };
  },

  toJSON(message: user): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.cognito_id !== undefined && (obj.cognito_id = message.cognito_id);
    message.user_name !== undefined && (obj.user_name = message.user_name);
    message.user_id !== undefined && (obj.user_id = message.user_id);
    message.first_name !== undefined && (obj.first_name = message.first_name);
    message.middle_name !== undefined &&
      (obj.middle_name = message.middle_name);
    message.last_name !== undefined && (obj.last_name = message.last_name);
    message.email !== undefined && (obj.email = message.email);
    message.hashed_password !== undefined &&
      (obj.hashed_password = message.hashed_password);
    message.avatar_url !== undefined && (obj.avatar_url = message.avatar_url);
    if (message.roles) {
      obj.roles = message.roles.map((e) => roleToJSON(e));
    } else {
      obj.roles = [];
    }
    message.new_password_required !== undefined &&
      (obj.new_password_required = message.new_password_required);
    message.password_changed_on !== undefined &&
      (obj.password_changed_on = message.password_changed_on);
    message.created_at !== undefined && (obj.created_at = message.created_at);
    message.updated_at !== undefined && (obj.updated_at = message.updated_at);
    message.deleted_at !== undefined && (obj.deleted_at = message.deleted_at);
    if (message.phone_numbers) {
      obj.phone_numbers = message.phone_numbers.map((e) => e);
    } else {
      obj.phone_numbers = [];
    }
    message.email_verified !== undefined &&
      (obj.email_verified = message.email_verified);
    if (message.reset_password_tokens) {
      obj.reset_password_tokens = message.reset_password_tokens.map((e) => e);
    } else {
      obj.reset_password_tokens = [];
    }
    if (message.sessions) {
      obj.sessions = message.sessions.map((e) => e);
    } else {
      obj.sessions = [];
    }
    if (message.business_ids) {
      obj.business_ids = message.business_ids.map((e) => e);
    } else {
      obj.business_ids = [];
    }
    message.unsuscribed_to_marketing_email !== undefined &&
      (obj.unsuscribed_to_marketing_email =
        message.unsuscribed_to_marketing_email);
    message.status !== undefined &&
      (obj.status = message.status ? status.toJSON(message.status) : undefined);
    message.last_login_on !== undefined &&
      (obj.last_login_on = message.last_login_on);
    message.business_id !== undefined &&
      (obj.business_id = message.business_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<user>, I>>(object: I): user {
    const message = createBaseuser();
    message.type = object.type ?? "";
    message.cognito_id = object.cognito_id ?? "";
    message.user_name = object.user_name ?? "";
    message.user_id = object.user_id ?? "";
    message.first_name = object.first_name ?? "";
    message.middle_name = object.middle_name ?? "";
    message.last_name = object.last_name ?? "";
    message.email = object.email ?? "";
    message.hashed_password = object.hashed_password ?? "";
    message.avatar_url = object.avatar_url ?? "";
    message.roles = object.roles?.map((e) => e) || [];
    message.new_password_required = object.new_password_required ?? false;
    message.password_changed_on = object.password_changed_on ?? "";
    message.created_at = object.created_at ?? "";
    message.updated_at = object.updated_at ?? "";
    message.deleted_at = object.deleted_at ?? "";
    message.phone_numbers = object.phone_numbers?.map((e) => e) || [];
    message.email_verified = object.email_verified ?? false;
    message.reset_password_tokens =
      object.reset_password_tokens?.map((e) => e) || [];
    message.sessions = object.sessions?.map((e) => e) || [];
    message.business_ids = object.business_ids?.map((e) => e) || [];
    message.unsuscribed_to_marketing_email =
      object.unsuscribed_to_marketing_email ?? false;
    message.status =
      object.status !== undefined && object.status !== null
        ? status.fromPartial(object.status)
        : undefined;
    message.last_login_on = object.last_login_on ?? "";
    message.business_id = object.business_id ?? "";
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
