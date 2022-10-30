/* eslint-disable */
export const protobufPackage = "v1";

export interface confirm_email {
  /** @gotags: dynamodbav:"email,omitempty" */
  email: string;
  /** @gotags: dynamodbav:"user_name,omitempty" */
  user_name: string;
  /** @gotags: dynamodbav:"confirmation_code,omitempty" */
  confirmation_code: string;
  /** @gotags: dynamodbav:"token,omitempty" */
  token: string;
  /** @gotags: dynamodbav:"business_id,omitempty" */
  business_id: string;
}

function createBaseconfirm_email(): confirm_email {
  return {
    email: "",
    user_name: "",
    confirmation_code: "",
    token: "",
    business_id: "",
  };
}

export const confirm_email = {
  fromJSON(object: any): confirm_email {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      user_name: isSet(object.user_name) ? String(object.user_name) : "",
      confirmation_code: isSet(object.confirmation_code)
        ? String(object.confirmation_code)
        : "",
      token: isSet(object.token) ? String(object.token) : "",
      business_id: isSet(object.business_id) ? String(object.business_id) : "",
    };
  },

  toJSON(message: confirm_email): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.user_name !== undefined && (obj.user_name = message.user_name);
    message.confirmation_code !== undefined &&
      (obj.confirmation_code = message.confirmation_code);
    message.token !== undefined && (obj.token = message.token);
    message.business_id !== undefined &&
      (obj.business_id = message.business_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<confirm_email>, I>>(
    object: I
  ): confirm_email {
    const message = createBaseconfirm_email();
    message.email = object.email ?? "";
    message.user_name = object.user_name ?? "";
    message.confirmation_code = object.confirmation_code ?? "";
    message.token = object.token ?? "";
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
