/* eslint-disable */
export const protobufPackage = "v1";

export interface shipment_details {
  /** @gotags: dynamodbav:"quote_id,omitempty" */
  quote_id: string;
  /** @gotags: dynamodbav:"requester_id,omitempty" */
  requester_id: string;
  /** @gotags: dynamodbav:"mode,omitempty" */
  mode: string;
  /** @gotags: dynamodbav:"liable_party_id,omitempty" */
  liable_party_id: string;
  /** @gotags: dynamodbav:"pickup_date,omitempty" */
  pickup_date: string;
  /** @gotags: dynamodbav:"display_date,omitempty" */
  display_date: string;
  /** @gotags: dynamodbav:"delivery_date,omitempty" */
  delivery_date: string;
  /** @gotags: dynamodbav:"vendor_bids,omitempty" */
  total_items: number;
  /** @gotags: dynamodbav:"total_weight,omitempty" */
  total_weight: number;
  /** @gotags: dynamodbav:"valid_until,omitempty" */
  valid_until: string;
  /** @gotags: dynamodbav:"edit_mode,omitempty" */
  edit_mode: boolean;
  /** @gotags: dynamodbav:"business_id,omitempty" */
  business_id: string;
  /** @gotags: dynamodbav:"type,omitempty" */
  type: string;
}

function createBaseshipment_details(): shipment_details {
  return {
    quote_id: "",
    requester_id: "",
    mode: "",
    liable_party_id: "",
    pickup_date: "",
    display_date: "",
    delivery_date: "",
    total_items: 0,
    total_weight: 0,
    valid_until: "",
    edit_mode: false,
    business_id: "",
    type: "",
  };
}

export const shipment_details = {
  fromJSON(object: any): shipment_details {
    return {
      quote_id: isSet(object.quote_id) ? String(object.quote_id) : "",
      requester_id: isSet(object.requester_id)
        ? String(object.requester_id)
        : "",
      mode: isSet(object.mode) ? String(object.mode) : "",
      liable_party_id: isSet(object.liable_party_id)
        ? String(object.liable_party_id)
        : "",
      pickup_date: isSet(object.pickup_date) ? String(object.pickup_date) : "",
      display_date: isSet(object.display_date)
        ? String(object.display_date)
        : "",
      delivery_date: isSet(object.delivery_date)
        ? String(object.delivery_date)
        : "",
      total_items: isSet(object.total_items) ? Number(object.total_items) : 0,
      total_weight: isSet(object.total_weight)
        ? Number(object.total_weight)
        : 0,
      valid_until: isSet(object.valid_until) ? String(object.valid_until) : "",
      edit_mode: isSet(object.edit_mode) ? Boolean(object.edit_mode) : false,
      business_id: isSet(object.business_id) ? String(object.business_id) : "",
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: shipment_details): unknown {
    const obj: any = {};
    message.quote_id !== undefined && (obj.quote_id = message.quote_id);
    message.requester_id !== undefined &&
      (obj.requester_id = message.requester_id);
    message.mode !== undefined && (obj.mode = message.mode);
    message.liable_party_id !== undefined &&
      (obj.liable_party_id = message.liable_party_id);
    message.pickup_date !== undefined &&
      (obj.pickup_date = message.pickup_date);
    message.display_date !== undefined &&
      (obj.display_date = message.display_date);
    message.delivery_date !== undefined &&
      (obj.delivery_date = message.delivery_date);
    message.total_items !== undefined &&
      (obj.total_items = Math.round(message.total_items));
    message.total_weight !== undefined &&
      (obj.total_weight = message.total_weight);
    message.valid_until !== undefined &&
      (obj.valid_until = message.valid_until);
    message.edit_mode !== undefined && (obj.edit_mode = message.edit_mode);
    message.business_id !== undefined &&
      (obj.business_id = message.business_id);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<shipment_details>, I>>(
    object: I
  ): shipment_details {
    const message = createBaseshipment_details();
    message.quote_id = object.quote_id ?? "";
    message.requester_id = object.requester_id ?? "";
    message.mode = object.mode ?? "";
    message.liable_party_id = object.liable_party_id ?? "";
    message.pickup_date = object.pickup_date ?? "";
    message.display_date = object.display_date ?? "";
    message.delivery_date = object.delivery_date ?? "";
    message.total_items = object.total_items ?? 0;
    message.total_weight = object.total_weight ?? 0;
    message.valid_until = object.valid_until ?? "";
    message.edit_mode = object.edit_mode ?? false;
    message.business_id = object.business_id ?? "";
    message.type = object.type ?? "";
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
