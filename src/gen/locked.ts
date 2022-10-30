/* eslint-disable */
export const protobufPackage = "v1";

export interface status {
  /** @gotags: dynamodbav:"is_locked,omitempty" */
  is_locked: boolean;
  /** @gotags: dynamodbav:"since,omitempty" */
  since: string;
}

function createBasestatus(): status {
  return { is_locked: false, since: "" };
}

export const status = {
  fromJSON(object: any): status {
    return {
      is_locked: isSet(object.is_locked) ? Boolean(object.is_locked) : false,
      since: isSet(object.since) ? String(object.since) : "",
    };
  },

  toJSON(message: status): unknown {
    const obj: any = {};
    message.is_locked !== undefined && (obj.is_locked = message.is_locked);
    message.since !== undefined && (obj.since = message.since);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<status>, I>>(object: I): status {
    const message = createBasestatus();
    message.is_locked = object.is_locked ?? false;
    message.since = object.since ?? "";
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
