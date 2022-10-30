/* eslint-disable */
import { role, roleFromJSON, roleToJSON } from "./role";

export const protobufPackage = "v1";

export interface sign_up {
  /** @gotags: dynamodbav:"first_name,omitempty" */
  first_name: string;
  /** @gotags: dynamodbav:"middle_name,omitempty" */
  middle_name: string;
  /** @gotags: dynamodbav:"last_name,omitempty" */
  last_name: string;
  /** @gotags: dynamodbav:"email,omitempty" */
  email: string;
  /** @gotags: dynamodbav:"password,omitempty" */
  password: string;
  /** @gotags: dynamodbav:"phone_number,omitempty" */
  phone_number: string;
  /** @gotags: dynamodbav:"role,omitempty" */
  role: role[];
  /** @gotags: dynamodbav:"terms_aggrement,omitempty" */
  terms_aggrement: boolean;
  /** @gotags: dynamodbav:"company_name,omitempty" */
  company_name: string;
}

function createBasesign_up(): sign_up {
  return {
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
    role: [],
    terms_aggrement: false,
    company_name: "",
  };
}

export const sign_up = {
  fromJSON(object: any): sign_up {
    return {
      first_name: isSet(object.first_name) ? String(object.first_name) : "",
      middle_name: isSet(object.middle_name) ? String(object.middle_name) : "",
      last_name: isSet(object.last_name) ? String(object.last_name) : "",
      email: isSet(object.email) ? String(object.email) : "",
      password: isSet(object.password) ? String(object.password) : "",
      phone_number: isSet(object.phone_number)
        ? String(object.phone_number)
        : "",
      role: Array.isArray(object?.role)
        ? object.role.map((e: any) => roleFromJSON(e))
        : [],
      terms_aggrement: isSet(object.terms_aggrement)
        ? Boolean(object.terms_aggrement)
        : false,
      company_name: isSet(object.company_name)
        ? String(object.company_name)
        : "",
    };
  },

  toJSON(message: sign_up): unknown {
    const obj: any = {};
    message.first_name !== undefined && (obj.first_name = message.first_name);
    message.middle_name !== undefined &&
      (obj.middle_name = message.middle_name);
    message.last_name !== undefined && (obj.last_name = message.last_name);
    message.email !== undefined && (obj.email = message.email);
    message.password !== undefined && (obj.password = message.password);
    message.phone_number !== undefined &&
      (obj.phone_number = message.phone_number);
    if (message.role) {
      obj.role = message.role.map((e) => roleToJSON(e));
    } else {
      obj.role = [];
    }
    message.terms_aggrement !== undefined &&
      (obj.terms_aggrement = message.terms_aggrement);
    message.company_name !== undefined &&
      (obj.company_name = message.company_name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<sign_up>, I>>(object: I): sign_up {
    const message = createBasesign_up();
    message.first_name = object.first_name ?? "";
    message.middle_name = object.middle_name ?? "";
    message.last_name = object.last_name ?? "";
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    message.phone_number = object.phone_number ?? "";
    message.role = object.role?.map((e) => e) || [];
    message.terms_aggrement = object.terms_aggrement ?? false;
    message.company_name = object.company_name ?? "";
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
