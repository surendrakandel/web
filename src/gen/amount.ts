/* eslint-disable */
export const protobufPackage = "v1";

/** @gotags: dynamodbav:"amount,omitempty" */
export interface amount {
  /** @gotags: dynamodbav:"full_amount,omitempty" */
  full_amount: number;
  /** @gotags: dynamodbav:"discount_applied,omitempty" */
  discount_applied: number;
  /** @gotags: dynamodbav:"net_amount,omitempty" */
  net_amount: number;
}

function createBaseamount(): amount {
  return { full_amount: 0, discount_applied: 0, net_amount: 0 };
}

export const amount = {
  fromJSON(object: any): amount {
    return {
      full_amount: isSet(object.full_amount) ? Number(object.full_amount) : 0,
      discount_applied: isSet(object.discount_applied)
        ? Number(object.discount_applied)
        : 0,
      net_amount: isSet(object.net_amount) ? Number(object.net_amount) : 0,
    };
  },

  toJSON(message: amount): unknown {
    const obj: any = {};
    message.full_amount !== undefined &&
      (obj.full_amount = message.full_amount);
    message.discount_applied !== undefined &&
      (obj.discount_applied = message.discount_applied);
    message.net_amount !== undefined && (obj.net_amount = message.net_amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<amount>, I>>(object: I): amount {
    const message = createBaseamount();
    message.full_amount = object.full_amount ?? 0;
    message.discount_applied = object.discount_applied ?? 0;
    message.net_amount = object.net_amount ?? 0;
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
