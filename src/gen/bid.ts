/* eslint-disable */
import { amount } from "./amount";

export const protobufPackage = "v1";

export interface bid {
  /** @gotags: dynamodbav:"quote_id,omitempty" */
  quote_id: string;
  /** @gotags: dynamodbav:"bid_id,omitempty" */
  bid_id: string;
  /** @gotags: dynamodbav:"carrier,omitempty" */
  carrier: string;
  /** @gotags: dynamodbav:"amount,omitempty" */
  amount: amount | undefined;
  /** @gotags: dynamodbav:"transit_time,omitempty" */
  transit_time: string;
  /** @gotags: dynamodbav:"guranteed,omitempty" */
  guranteed: boolean;
  /** @gotags: dynamodbav:"business_id,omitempty" */
  business_id: string;
  /** @gotags: dynamodbav:"company_large_logo_url,omitempty" */
  company_large_logo_url: string;
  /** @gotags: dynamodbav:"company_small_logo_url,omitempty" */
  company_small_logo_url: string;
  /** @gotags: dynamodbav:"delivery_date,omitempty" */
  delivery_date: string;
  /** @gotags: dynamodbav:"vendor_quote_id,omitempty" */
  vendor_quote_id: string;
  /** @gotags: dynamodbav:"capacity_provider_quote_id,omitempty" */
  capacity_provider_quote_id: string;
  /** @gotags: dynamodbav:"vendor_name,omitempty" */
  vendor_name: string;
  /** @gotags: dynamodbav:"carrier_name,omitempty" */
  carrier_name: string;
  /** @gotags: dynamodbav:"carrier_code,omitempty" */
  carrier_code: string;
  /** @gotags: dynamodbav:"type,omitempty" */
  type: string;
  /** @gotags: dynamodbav:"carrier_quote_id,omitempty" */
  carrier_quote_id: string;
}

export interface bids {
  /** @gotags: dynamodbav:"bids,omitempty" */
  bids: bid[];
}

function createBasebid(): bid {
  return {
    quote_id: "",
    bid_id: "",
    carrier: "",
    amount: undefined,
    transit_time: "",
    guranteed: false,
    business_id: "",
    company_large_logo_url: "",
    company_small_logo_url: "",
    delivery_date: "",
    vendor_quote_id: "",
    capacity_provider_quote_id: "",
    vendor_name: "",
    carrier_name: "",
    carrier_code: "",
    type: "",
    carrier_quote_id: "",
  };
}

export const bid = {
  fromJSON(object: any): bid {
    return {
      quote_id: isSet(object.quote_id) ? String(object.quote_id) : "",
      bid_id: isSet(object.bid_id) ? String(object.bid_id) : "",
      carrier: isSet(object.carrier) ? String(object.carrier) : "",
      amount: isSet(object.amount) ? amount.fromJSON(object.amount) : undefined,
      transit_time: isSet(object.transit_time)
        ? String(object.transit_time)
        : "",
      guranteed: isSet(object.guranteed) ? Boolean(object.guranteed) : false,
      business_id: isSet(object.business_id) ? String(object.business_id) : "",
      company_large_logo_url: isSet(object.company_large_logo_url)
        ? String(object.company_large_logo_url)
        : "",
      company_small_logo_url: isSet(object.company_small_logo_url)
        ? String(object.company_small_logo_url)
        : "",
      delivery_date: isSet(object.delivery_date)
        ? String(object.delivery_date)
        : "",
      vendor_quote_id: isSet(object.vendor_quote_id)
        ? String(object.vendor_quote_id)
        : "",
      capacity_provider_quote_id: isSet(object.capacity_provider_quote_id)
        ? String(object.capacity_provider_quote_id)
        : "",
      vendor_name: isSet(object.vendor_name) ? String(object.vendor_name) : "",
      carrier_name: isSet(object.carrier_name)
        ? String(object.carrier_name)
        : "",
      carrier_code: isSet(object.carrier_code)
        ? String(object.carrier_code)
        : "",
      type: isSet(object.type) ? String(object.type) : "",
      carrier_quote_id: isSet(object.carrier_quote_id)
        ? String(object.carrier_quote_id)
        : "",
    };
  },

  toJSON(message: bid): unknown {
    const obj: any = {};
    message.quote_id !== undefined && (obj.quote_id = message.quote_id);
    message.bid_id !== undefined && (obj.bid_id = message.bid_id);
    message.carrier !== undefined && (obj.carrier = message.carrier);
    message.amount !== undefined &&
      (obj.amount = message.amount ? amount.toJSON(message.amount) : undefined);
    message.transit_time !== undefined &&
      (obj.transit_time = message.transit_time);
    message.guranteed !== undefined && (obj.guranteed = message.guranteed);
    message.business_id !== undefined &&
      (obj.business_id = message.business_id);
    message.company_large_logo_url !== undefined &&
      (obj.company_large_logo_url = message.company_large_logo_url);
    message.company_small_logo_url !== undefined &&
      (obj.company_small_logo_url = message.company_small_logo_url);
    message.delivery_date !== undefined &&
      (obj.delivery_date = message.delivery_date);
    message.vendor_quote_id !== undefined &&
      (obj.vendor_quote_id = message.vendor_quote_id);
    message.capacity_provider_quote_id !== undefined &&
      (obj.capacity_provider_quote_id = message.capacity_provider_quote_id);
    message.vendor_name !== undefined &&
      (obj.vendor_name = message.vendor_name);
    message.carrier_name !== undefined &&
      (obj.carrier_name = message.carrier_name);
    message.carrier_code !== undefined &&
      (obj.carrier_code = message.carrier_code);
    message.type !== undefined && (obj.type = message.type);
    message.carrier_quote_id !== undefined &&
      (obj.carrier_quote_id = message.carrier_quote_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<bid>, I>>(object: I): bid {
    const message = createBasebid();
    message.quote_id = object.quote_id ?? "";
    message.bid_id = object.bid_id ?? "";
    message.carrier = object.carrier ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? amount.fromPartial(object.amount)
        : undefined;
    message.transit_time = object.transit_time ?? "";
    message.guranteed = object.guranteed ?? false;
    message.business_id = object.business_id ?? "";
    message.company_large_logo_url = object.company_large_logo_url ?? "";
    message.company_small_logo_url = object.company_small_logo_url ?? "";
    message.delivery_date = object.delivery_date ?? "";
    message.vendor_quote_id = object.vendor_quote_id ?? "";
    message.capacity_provider_quote_id =
      object.capacity_provider_quote_id ?? "";
    message.vendor_name = object.vendor_name ?? "";
    message.carrier_name = object.carrier_name ?? "";
    message.carrier_code = object.carrier_code ?? "";
    message.type = object.type ?? "";
    message.carrier_quote_id = object.carrier_quote_id ?? "";
    return message;
  },
};

function createBasebids(): bids {
  return { bids: [] };
}

export const bids = {
  fromJSON(object: any): bids {
    return {
      bids: Array.isArray(object?.bids)
        ? object.bids.map((e: any) => bid.fromJSON(e))
        : [],
    };
  },

  toJSON(message: bids): unknown {
    const obj: any = {};
    if (message.bids) {
      obj.bids = message.bids.map((e) => (e ? bid.toJSON(e) : undefined));
    } else {
      obj.bids = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<bids>, I>>(object: I): bids {
    const message = createBasebids();
    message.bids = object.bids?.map((e) => bid.fromPartial(e)) || [];
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
