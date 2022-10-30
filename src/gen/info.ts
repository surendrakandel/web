/* eslint-disable */
export const protobufPackage = "v1";

export interface info {
  valid: boolean;
  id: string;
  error_message: string;
  clas: string;
  path: string;
}

function createBaseinfo(): info {
  return { valid: false, id: "", error_message: "", clas: "", path: "" };
}

export const info = {
  fromJSON(object: any): info {
    return {
      valid: isSet(object.valid) ? Boolean(object.valid) : false,
      id: isSet(object.id) ? String(object.id) : "",
      error_message: isSet(object.error_message)
        ? String(object.error_message)
        : "",
      clas: isSet(object.clas) ? String(object.clas) : "",
      path: isSet(object.path) ? String(object.path) : "",
    };
  },

  toJSON(message: info): unknown {
    const obj: any = {};
    message.valid !== undefined && (obj.valid = message.valid);
    message.id !== undefined && (obj.id = message.id);
    message.error_message !== undefined &&
      (obj.error_message = message.error_message);
    message.clas !== undefined && (obj.clas = message.clas);
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<info>, I>>(object: I): info {
    const message = createBaseinfo();
    message.valid = object.valid ?? false;
    message.id = object.id ?? "";
    message.error_message = object.error_message ?? "";
    message.clas = object.clas ?? "";
    message.path = object.path ?? "";
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
