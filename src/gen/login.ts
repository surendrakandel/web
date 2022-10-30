/* eslint-disable */
import { user } from "./user";

export const protobufPackage = "v1";

export interface login_response {
  token: string;
  user: user | undefined;
}

export interface login {
  /** @gotags: dynamodbav:"email,omitempty" */
  email: string;
  /** @gotags: dynamodbav:"password,omitempty" */
  password: string;
}

function createBaselogin_response(): login_response {
  return { token: "", user: undefined };
}

export const login_response = {
  fromJSON(object: any): login_response {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      user: isSet(object.user) ? user.fromJSON(object.user) : undefined,
    };
  },

  toJSON(message: login_response): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.user !== undefined &&
      (obj.user = message.user ? user.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<login_response>, I>>(
    object: I
  ): login_response {
    const message = createBaselogin_response();
    message.token = object.token ?? "";
    message.user =
      object.user !== undefined && object.user !== null
        ? user.fromPartial(object.user)
        : undefined;
    return message;
  },
};

function createBaselogin(): login {
  return { email: "", password: "" };
}

export const login = {
  fromJSON(object: any): login {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: login): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<login>, I>>(object: I): login {
    const message = createBaselogin();
    message.email = object.email ?? "";
    message.password = object.password ?? "";
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
