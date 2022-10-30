/* eslint-disable */
import { role, roleFromJSON, roleToJSON } from "./role";

export const protobufPackage = "v1";

export interface contact {
  /** @gotags: dynamodbav:"first_name,omitempty" */
  first_name: string;
  /** @gotags: dynamodbav:"last_name,omitempty" */
  last_name: string;
  /** @gotags: dynamodbav:"phone_number,omitempty" */
  phone_number: string;
  /** @gotags: dynamodbav:"phone_number_extension,omitempty" */
  phone_number_extension: string;
  /** @gotags: dynamodbav:"email_address,omitempty" */
  email_address: string;
  /** @gotags: dynamodbav:"phone_number_display,omitempty" */
  phone_number_display: string;
  /** @gotags: dynamodbav:"roles,omitempty" */
  roles: role[];
  /** @gotags: dynamodbav:"preffered_contact_method,omitempty" */
  preffered_contact_method: string;
  /** @gotags: dynamodbav:"business_id,omitempty" */
  business_id: string;
  /** @gotags: dynamodbav:"type,omitempty" */
  type: string;
}

function createBasecontact(): contact {
  return {
    first_name: "",
    last_name: "",
    phone_number: "",
    phone_number_extension: "",
    email_address: "",
    phone_number_display: "",
    roles: [],
    preffered_contact_method: "",
    business_id: "",
    type: "",
  };
}

export const contact = {
  fromJSON(object: any): contact {
    return {
      first_name: isSet(object.first_name) ? String(object.first_name) : "",
      last_name: isSet(object.last_name) ? String(object.last_name) : "",
      phone_number: isSet(object.phone_number)
        ? String(object.phone_number)
        : "",
      phone_number_extension: isSet(object.phone_number_extension)
        ? String(object.phone_number_extension)
        : "",
      email_address: isSet(object.email_address)
        ? String(object.email_address)
        : "",
      phone_number_display: isSet(object.phone_number_display)
        ? String(object.phone_number_display)
        : "",
      roles: Array.isArray(object?.roles)
        ? object.roles.map((e: any) => roleFromJSON(e))
        : [],
      preffered_contact_method: isSet(object.preffered_contact_method)
        ? String(object.preffered_contact_method)
        : "",
      business_id: isSet(object.business_id) ? String(object.business_id) : "",
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: contact): unknown {
    const obj: any = {};
    message.first_name !== undefined && (obj.first_name = message.first_name);
    message.last_name !== undefined && (obj.last_name = message.last_name);
    message.phone_number !== undefined &&
      (obj.phone_number = message.phone_number);
    message.phone_number_extension !== undefined &&
      (obj.phone_number_extension = message.phone_number_extension);
    message.email_address !== undefined &&
      (obj.email_address = message.email_address);
    message.phone_number_display !== undefined &&
      (obj.phone_number_display = message.phone_number_display);
    if (message.roles) {
      obj.roles = message.roles.map((e) => roleToJSON(e));
    } else {
      obj.roles = [];
    }
    message.preffered_contact_method !== undefined &&
      (obj.preffered_contact_method = message.preffered_contact_method);
    message.business_id !== undefined &&
      (obj.business_id = message.business_id);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<contact>, I>>(object: I): contact {
    const message = createBasecontact();
    message.first_name = object.first_name ?? "";
    message.last_name = object.last_name ?? "";
    message.phone_number = object.phone_number ?? "";
    message.phone_number_extension = object.phone_number_extension ?? "";
    message.email_address = object.email_address ?? "";
    message.phone_number_display = object.phone_number_display ?? "";
    message.roles = object.roles?.map((e) => e) || [];
    message.preffered_contact_method = object.preffered_contact_method ?? "";
    message.business_id = object.business_id ?? "";
    message.type = object.type ?? "";
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
