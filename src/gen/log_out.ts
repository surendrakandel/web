/* eslint-disable */
export const protobufPackage = "v1";

export interface log_out {
  /** @gotags: dynamodbav:"user_id,omitempty" */
  user_id: string;
}

function createBaselog_out(): log_out {
  return { user_id: "" };
}

export const log_out = {
  fromJSON(object: any): log_out {
    return {
      user_id: isSet(object.user_id) ? String(object.user_id) : "",
    };
  },

  toJSON(message: log_out): unknown {
    const obj: any = {};
    message.user_id !== undefined && (obj.user_id = message.user_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<log_out>, I>>(object: I): log_out {
    const message = createBaselog_out();
    message.user_id = object.user_id ?? "";
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
