/* eslint-disable */
export const protobufPackage = "v1";

export interface business_hours {
  /** @gotags: dynamodbav:"start,omitempty" */
  start: string;
  /** @gotags: dynamodbav:"end,omitempty" */
  end: string;
}

function createBasebusiness_hours(): business_hours {
  return { start: "", end: "" };
}

export const business_hours = {
  fromJSON(object: any): business_hours {
    return {
      start: isSet(object.start) ? String(object.start) : "",
      end: isSet(object.end) ? String(object.end) : "",
    };
  },

  toJSON(message: business_hours): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = message.start);
    message.end !== undefined && (obj.end = message.end);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<business_hours>, I>>(
    object: I
  ): business_hours {
    const message = createBasebusiness_hours();
    message.start = object.start ?? "";
    message.end = object.end ?? "";
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
