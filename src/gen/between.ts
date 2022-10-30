/* eslint-disable */
export const protobufPackage = "v1";

export interface between {
  /** @gotags: dynamodbav:"starts_from,omitempty" */
  starts_from: string;
  /** @gotags: dynamodbav:"ends_on,omitempty" */
  end_on: string;
}

function createBasebetween(): between {
  return { starts_from: "", end_on: "" };
}

export const between = {
  fromJSON(object: any): between {
    return {
      starts_from: isSet(object.starts_from) ? String(object.starts_from) : "",
      end_on: isSet(object.end_on) ? String(object.end_on) : "",
    };
  },

  toJSON(message: between): unknown {
    const obj: any = {};
    message.starts_from !== undefined &&
      (obj.starts_from = message.starts_from);
    message.end_on !== undefined && (obj.end_on = message.end_on);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<between>, I>>(object: I): between {
    const message = createBasebetween();
    message.starts_from = object.starts_from ?? "";
    message.end_on = object.end_on ?? "";
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
