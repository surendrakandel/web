/* eslint-disable */
export const protobufPackage = "v1";

export interface refresh_token {
  /** @gotags: dynamodbav:"refresh_token,omitempty" */
  refresh_token: string;
}

export interface token {
  /** @gotags: dynamodbav:"token,omitempty" */
  token: string;
}

function createBaserefresh_token(): refresh_token {
  return { refresh_token: "" };
}

export const refresh_token = {
  fromJSON(object: any): refresh_token {
    return {
      refresh_token: isSet(object.refresh_token)
        ? String(object.refresh_token)
        : "",
    };
  },

  toJSON(message: refresh_token): unknown {
    const obj: any = {};
    message.refresh_token !== undefined &&
      (obj.refresh_token = message.refresh_token);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<refresh_token>, I>>(
    object: I
  ): refresh_token {
    const message = createBaserefresh_token();
    message.refresh_token = object.refresh_token ?? "";
    return message;
  },
};

function createBasetoken(): token {
  return { token: "" };
}

export const token = {
  fromJSON(object: any): token {
    return {
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: token): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<token>, I>>(object: I): token {
    const message = createBasetoken();
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
