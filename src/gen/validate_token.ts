/* eslint-disable */
export const protobufPackage = "v1";

export interface validate_token {
  /** @gotags: dynamodbav:"token,omitempty" */
  token: string;
}

function createBasevalidate_token(): validate_token {
  return { token: "" };
}

export const validate_token = {
  fromJSON(object: any): validate_token {
    return {
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: validate_token): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<validate_token>, I>>(
    object: I
  ): validate_token {
    const message = createBasevalidate_token();
    message.token = object.token ?? "";
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
