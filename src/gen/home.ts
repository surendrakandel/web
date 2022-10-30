/* eslint-disable */
export const protobufPackage = "v1";

export interface user_home {
  /** @gotags: dynamodbav:"user_id,omitempty" */
  user_id: string;
  /** @gotags: dynamodbav:"user_email,omitempty" */
  user_email: string;
  /** @gotags: dynamodbav:"business_id,omitempty" */
  business_id: string;
}

function createBaseuser_home(): user_home {
  return { user_id: "", user_email: "", business_id: "" };
}

export const user_home = {
  fromJSON(object: any): user_home {
    return {
      user_id: isSet(object.user_id) ? String(object.user_id) : "",
      user_email: isSet(object.user_email) ? String(object.user_email) : "",
      business_id: isSet(object.business_id) ? String(object.business_id) : "",
    };
  },

  toJSON(message: user_home): unknown {
    const obj: any = {};
    message.user_id !== undefined && (obj.user_id = message.user_id);
    message.user_email !== undefined && (obj.user_email = message.user_email);
    message.business_id !== undefined &&
      (obj.business_id = message.business_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<user_home>, I>>(
    object: I
  ): user_home {
    const message = createBaseuser_home();
    message.user_id = object.user_id ?? "";
    message.user_email = object.user_email ?? "";
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
