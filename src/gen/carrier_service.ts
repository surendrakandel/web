/* eslint-disable */
export const protobufPackage = "v1";

export interface Ping {
  /** @gotags: dynamodbav:"hi,omitempty" */
  hi: string;
}

export interface id {
  /** @gotags: dynamodbav:"id,omitempty" */
  id: string;
  /** @gotags: dynamodbav:"business_id,omitempty" */
  businessId: string;
}

export interface ids {
  /** @gotags: dynamodbav:"ids,omitempty" */
  ids: id[];
}

function createBasePing(): Ping {
  return { hi: "" };
}

export const Ping = {
  fromJSON(object: any): Ping {
    return {
      hi: isSet(object.hi) ? String(object.hi) : "",
    };
  },

  toJSON(message: Ping): unknown {
    const obj: any = {};
    message.hi !== undefined && (obj.hi = message.hi);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Ping>, I>>(object: I): Ping {
    const message = createBasePing();
    message.hi = object.hi ?? "";
    return message;
  },
};

function createBaseid(): id {
  return { id: "", businessId: "" };
}

export const id = {
  fromJSON(object: any): id {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      businessId: isSet(object.businessId) ? String(object.businessId) : "",
    };
  },

  toJSON(message: id): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.businessId !== undefined && (obj.businessId = message.businessId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<id>, I>>(object: I): id {
    const message = createBaseid();
    message.id = object.id ?? "";
    message.businessId = object.businessId ?? "";
    return message;
  },
};

function createBaseids(): ids {
  return { ids: [] };
}

export const ids = {
  fromJSON(object: any): ids {
    return {
      ids: Array.isArray(object?.ids)
        ? object.ids.map((e: any) => id.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ids): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => (e ? id.toJSON(e) : undefined));
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ids>, I>>(object: I): ids {
    const message = createBaseids();
    message.ids = object.ids?.map((e) => id.fromPartial(e)) || [];
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
