/* eslint-disable */
export const protobufPackage = "v1";

export interface ok {
  /** @gotags: dynamodbav:"success,omitempty" */
  success: boolean;
  /** @gotags: dynamodbav:"status_code,omitempty" */
  status_code: number;
  /** @gotags: dynamodbav:"message,omitempty" */
  message: string;
}

function createBaseok(): ok {
  return { success: false, status_code: 0, message: "" };
}

export const ok = {
  fromJSON(object: any): ok {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      status_code: isSet(object.status_code) ? Number(object.status_code) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: ok): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.status_code !== undefined &&
      (obj.status_code = Math.round(message.status_code));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ok>, I>>(object: I): ok {
    const message = createBaseok();
    message.success = object.success ?? false;
    message.status_code = object.status_code ?? 0;
    message.message = object.message ?? "";
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
