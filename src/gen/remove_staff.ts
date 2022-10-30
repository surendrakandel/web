/* eslint-disable */
export const protobufPackage = "v1";

export interface remove_staff {
  token: string;
  remove_staff_email: string;
  business_id: string;
}

function createBaseremove_staff(): remove_staff {
  return { token: "", remove_staff_email: "", business_id: "" };
}

export const remove_staff = {
  fromJSON(object: any): remove_staff {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      remove_staff_email: isSet(object.remove_staff_email)
        ? String(object.remove_staff_email)
        : "",
      business_id: isSet(object.business_id) ? String(object.business_id) : "",
    };
  },

  toJSON(message: remove_staff): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.remove_staff_email !== undefined &&
      (obj.remove_staff_email = message.remove_staff_email);
    message.business_id !== undefined &&
      (obj.business_id = message.business_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<remove_staff>, I>>(
    object: I
  ): remove_staff {
    const message = createBaseremove_staff();
    message.token = object.token ?? "";
    message.remove_staff_email = object.remove_staff_email ?? "";
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
