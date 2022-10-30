/* eslint-disable */
import {
  email_template,
  email_templateFromJSON,
  email_templateToJSON,
} from "./email_template";

export const protobufPackage = "v1";

export interface send_email {
  /** @gotags: dynamodbav:"email_subject,omitempty" */
  email_subject: string;
  /** @gotags: dynamodbav:"receiver_email,omitempty" */
  receiver_email_address: string;
  /** @gotags: dynamodbav:"receiver_name,omitempty" */
  receiver_name: string;
  /** @gotags: dynamodbav:"email_template,omitempty" */
  email_purpose: email_template;
  /** @gotags: dynamodbav:"token,omitempty" */
  token: string;
  /** @gotags: dynamodbav:"success,omitempty" */
  success: boolean;
}

function createBasesend_email(): send_email {
  return {
    email_subject: "",
    receiver_email_address: "",
    receiver_name: "",
    email_purpose: 0,
    token: "",
    success: false,
  };
}

export const send_email = {
  fromJSON(object: any): send_email {
    return {
      email_subject: isSet(object.email_subject)
        ? String(object.email_subject)
        : "",
      receiver_email_address: isSet(object.receiver_email_address)
        ? String(object.receiver_email_address)
        : "",
      receiver_name: isSet(object.receiver_name)
        ? String(object.receiver_name)
        : "",
      email_purpose: isSet(object.email_purpose)
        ? email_templateFromJSON(object.email_purpose)
        : 0,
      token: isSet(object.token) ? String(object.token) : "",
      success: isSet(object.success) ? Boolean(object.success) : false,
    };
  },

  toJSON(message: send_email): unknown {
    const obj: any = {};
    message.email_subject !== undefined &&
      (obj.email_subject = message.email_subject);
    message.receiver_email_address !== undefined &&
      (obj.receiver_email_address = message.receiver_email_address);
    message.receiver_name !== undefined &&
      (obj.receiver_name = message.receiver_name);
    message.email_purpose !== undefined &&
      (obj.email_purpose = email_templateToJSON(message.email_purpose));
    message.token !== undefined && (obj.token = message.token);
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<send_email>, I>>(
    object: I
  ): send_email {
    const message = createBasesend_email();
    message.email_subject = object.email_subject ?? "";
    message.receiver_email_address = object.receiver_email_address ?? "";
    message.receiver_name = object.receiver_name ?? "";
    message.email_purpose = object.email_purpose ?? 0;
    message.token = object.token ?? "";
    message.success = object.success ?? false;
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
