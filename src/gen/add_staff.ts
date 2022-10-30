/* eslint-disable */
import { role, roleFromJSON, roleToJSON } from "./role";

export const protobufPackage = "v1";

export interface add_staff {
  token: string;
  roles: role[];
  new_staff_email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  business_id: string;
}

function createBaseadd_staff(): add_staff {
  return {
    token: "",
    roles: [],
    new_staff_email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    business_id: "",
  };
}

export const add_staff = {
  fromJSON(object: any): add_staff {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      roles: Array.isArray(object?.roles)
        ? object.roles.map((e: any) => roleFromJSON(e))
        : [],
      new_staff_email: isSet(object.new_staff_email)
        ? String(object.new_staff_email)
        : "",
      password: isSet(object.password) ? String(object.password) : "",
      first_name: isSet(object.first_name) ? String(object.first_name) : "",
      last_name: isSet(object.last_name) ? String(object.last_name) : "",
      phone_number: isSet(object.phone_number)
        ? String(object.phone_number)
        : "",
      business_id: isSet(object.business_id) ? String(object.business_id) : "",
    };
  },

  toJSON(message: add_staff): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    if (message.roles) {
      obj.roles = message.roles.map((e) => roleToJSON(e));
    } else {
      obj.roles = [];
    }
    message.new_staff_email !== undefined &&
      (obj.new_staff_email = message.new_staff_email);
    message.password !== undefined && (obj.password = message.password);
    message.first_name !== undefined && (obj.first_name = message.first_name);
    message.last_name !== undefined && (obj.last_name = message.last_name);
    message.phone_number !== undefined &&
      (obj.phone_number = message.phone_number);
    message.business_id !== undefined &&
      (obj.business_id = message.business_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<add_staff>, I>>(
    object: I
  ): add_staff {
    const message = createBaseadd_staff();
    message.token = object.token ?? "";
    message.roles = object.roles?.map((e) => e) || [];
    message.new_staff_email = object.new_staff_email ?? "";
    message.password = object.password ?? "";
    message.first_name = object.first_name ?? "";
    message.last_name = object.last_name ?? "";
    message.phone_number = object.phone_number ?? "";
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
