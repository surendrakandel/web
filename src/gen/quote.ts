/* eslint-disable */
import { shipment_details } from "./shipment_details";
import { commodity } from "./commodity";
import { location } from "./location";
import { bid } from "./bid";

export const protobufPackage = "v1";

export interface quote_request {
  /** @gotags: dynamodbav:"shipment_details,omitempty" */
  shipment_details: shipment_details | undefined;
  /** @gotags: dynamodbav:"commodities,omitempty" */
  commodities: commodity[];
  /** @gotags: dynamodbav:"pickup,omitempty" */
  pickup: location | undefined;
  /** @gotags: dynamodbav:"delivery,omitempty" */
  delivery: location | undefined;
  /** @gotags: dynamodbav:"bid,omitempty" */
  bid: bid | undefined;
  /** @gotags: dynamodbav:"bids,omitempty" */
  bids: bid[];
  /** @gotags: dynamodbav:"business_id,omitempty" */
  business_id: string;
  /** @gotags: dynamodbav:"type,omitempty" */
  type: string;
  /** @gotags: dynamodbav:"quote_id,omitempty" */
  quote_id: string;
  /** @gotags: dynamodbav:"booking_success,omitempty" */
  booking_success: boolean;
  /** @gotags: dynamodbav:"special_instruction,omitempty" */
  special_instruction: string;
}

export interface quotes_response {
  /** @gotags: dynamodbav:"quote_request,omitempty" */
  quote_requests: quote_request[];
}

function createBasequote_request(): quote_request {
  return {
    shipment_details: undefined,
    commodities: [],
    pickup: undefined,
    delivery: undefined,
    bid: undefined,
    bids: [],
    business_id: "",
    type: "",
    quote_id: "",
    booking_success: false,
    special_instruction: "",
  };
}

export const quote_request = {
  fromJSON(object: any): quote_request {
    return {
      shipment_details: isSet(object.shipment_details)
        ? shipment_details.fromJSON(object.shipment_details)
        : undefined,
      commodities: Array.isArray(object?.commodities)
        ? object.commodities.map((e: any) => commodity.fromJSON(e))
        : [],
      pickup: isSet(object.pickup)
        ? location.fromJSON(object.pickup)
        : undefined,
      delivery: isSet(object.delivery)
        ? location.fromJSON(object.delivery)
        : undefined,
      bid: isSet(object.bid) ? bid.fromJSON(object.bid) : undefined,
      bids: Array.isArray(object?.bids)
        ? object.bids.map((e: any) => bid.fromJSON(e))
        : [],
      business_id: isSet(object.business_id) ? String(object.business_id) : "",
      type: isSet(object.type) ? String(object.type) : "",
      quote_id: isSet(object.quote_id) ? String(object.quote_id) : "",
      booking_success: isSet(object.booking_success)
        ? Boolean(object.booking_success)
        : false,
      special_instruction: isSet(object.special_instruction)
        ? String(object.special_instruction)
        : "",
    };
  },

  toJSON(message: quote_request): unknown {
    const obj: any = {};
    message.shipment_details !== undefined &&
      (obj.shipment_details = message.shipment_details
        ? shipment_details.toJSON(message.shipment_details)
        : undefined);
    if (message.commodities) {
      obj.commodities = message.commodities.map((e) =>
        e ? commodity.toJSON(e) : undefined
      );
    } else {
      obj.commodities = [];
    }
    message.pickup !== undefined &&
      (obj.pickup = message.pickup
        ? location.toJSON(message.pickup)
        : undefined);
    message.delivery !== undefined &&
      (obj.delivery = message.delivery
        ? location.toJSON(message.delivery)
        : undefined);
    message.bid !== undefined &&
      (obj.bid = message.bid ? bid.toJSON(message.bid) : undefined);
    if (message.bids) {
      obj.bids = message.bids.map((e) => (e ? bid.toJSON(e) : undefined));
    } else {
      obj.bids = [];
    }
    message.business_id !== undefined &&
      (obj.business_id = message.business_id);
    message.type !== undefined && (obj.type = message.type);
    message.quote_id !== undefined && (obj.quote_id = message.quote_id);
    message.booking_success !== undefined &&
      (obj.booking_success = message.booking_success);
    message.special_instruction !== undefined &&
      (obj.special_instruction = message.special_instruction);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<quote_request>, I>>(
    object: I
  ): quote_request {
    const message = createBasequote_request();
    message.shipment_details =
      object.shipment_details !== undefined && object.shipment_details !== null
        ? shipment_details.fromPartial(object.shipment_details)
        : undefined;
    message.commodities =
      object.commodities?.map((e) => commodity.fromPartial(e)) || [];
    message.pickup =
      object.pickup !== undefined && object.pickup !== null
        ? location.fromPartial(object.pickup)
        : undefined;
    message.delivery =
      object.delivery !== undefined && object.delivery !== null
        ? location.fromPartial(object.delivery)
        : undefined;
    message.bid =
      object.bid !== undefined && object.bid !== null
        ? bid.fromPartial(object.bid)
        : undefined;
    message.bids = object.bids?.map((e) => bid.fromPartial(e)) || [];
    message.business_id = object.business_id ?? "";
    message.type = object.type ?? "";
    message.quote_id = object.quote_id ?? "";
    message.booking_success = object.booking_success ?? false;
    message.special_instruction = object.special_instruction ?? "";
    return message;
  },
};

function createBasequotes_response(): quotes_response {
  return { quote_requests: [] };
}

export const quotes_response = {
  fromJSON(object: any): quotes_response {
    return {
      quote_requests: Array.isArray(object?.quote_requests)
        ? object.quote_requests.map((e: any) => quote_request.fromJSON(e))
        : [],
    };
  },

  toJSON(message: quotes_response): unknown {
    const obj: any = {};
    if (message.quote_requests) {
      obj.quote_requests = message.quote_requests.map((e) =>
        e ? quote_request.toJSON(e) : undefined
      );
    } else {
      obj.quote_requests = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<quotes_response>, I>>(
    object: I
  ): quotes_response {
    const message = createBasequotes_response();
    message.quote_requests =
      object.quote_requests?.map((e) => quote_request.fromPartial(e)) || [];
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
