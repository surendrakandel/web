/* eslint-disable */
export const protobufPackage = "v1";

export interface carrier {
  /** @gotags: dynamodbav:"name,omitempty" */
  name: string;
  /** @gotags: dynamodbav:"auth_url,omitempty" */
  auth_url: string;
  /** @gotags: dynamodbav:"rate_url,omitempty" */
  rate_url: string;
  /** @gotags: dynamodbav:"add_address_url,omitempty" */
  add_address_url: string;
  /** @gotags: dynamodbav:"get_address_url,omitempty" */
  get_address_url: string;
  /** @gotags: dynamodbav:"quote_history_url,omitempty" */
  quote_history_url: string;
}

function createBasecarrier(): carrier {
  return {
    name: "",
    auth_url: "",
    rate_url: "",
    add_address_url: "",
    get_address_url: "",
    quote_history_url: "",
  };
}

export const carrier = {
  fromJSON(object: any): carrier {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      auth_url: isSet(object.auth_url) ? String(object.auth_url) : "",
      rate_url: isSet(object.rate_url) ? String(object.rate_url) : "",
      add_address_url: isSet(object.add_address_url)
        ? String(object.add_address_url)
        : "",
      get_address_url: isSet(object.get_address_url)
        ? String(object.get_address_url)
        : "",
      quote_history_url: isSet(object.quote_history_url)
        ? String(object.quote_history_url)
        : "",
    };
  },

  toJSON(message: carrier): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.auth_url !== undefined && (obj.auth_url = message.auth_url);
    message.rate_url !== undefined && (obj.rate_url = message.rate_url);
    message.add_address_url !== undefined &&
      (obj.add_address_url = message.add_address_url);
    message.get_address_url !== undefined &&
      (obj.get_address_url = message.get_address_url);
    message.quote_history_url !== undefined &&
      (obj.quote_history_url = message.quote_history_url);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<carrier>, I>>(object: I): carrier {
    const message = createBasecarrier();
    message.name = object.name ?? "";
    message.auth_url = object.auth_url ?? "";
    message.rate_url = object.rate_url ?? "";
    message.add_address_url = object.add_address_url ?? "";
    message.get_address_url = object.get_address_url ?? "";
    message.quote_history_url = object.quote_history_url ?? "";
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
