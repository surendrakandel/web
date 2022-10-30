/* eslint-disable */
export const protobufPackage = "v1";

export enum shipment_status_option {
  None = 0,
  quote_generated = 1,
  booked = 2,
  pickup_driver_assigned = 3,
  pickup_driver_dispatched = 4,
  piked_up = 5,
  arrived_at_shipping_warehouse = 6,
  arrived_at_transit_warehouse = 7,
  arrived_at_delivery_warehouse = 8,
  document_needed = 9,
  shippers_information_needed = 10,
  receiver_infomration_needed = 11,
  arrived_at_custom = 12,
  released_from_custom = 13,
  on_hold = 14,
  delivery_driver_assigned = 15,
  delivery_driver_despatched = 16,
  arrived_at_delivery_location = 17,
  delivery_refused_by_receiver = 18,
  delivery_rescheduled_by_receiver = 19,
  unable_to_deliver = 20,
  contact_to_schedule_delivery = 21,
  delivery_retried = 22,
  delivered = 23,
  wrong_delivery_address = 24,
  delivery_rescheduled_by_shipper = 25,
  delivery_rescheduled_by_carrier = 26,
  UNRECOGNIZED = -1,
}

export function shipment_status_optionFromJSON(
  object: any
): shipment_status_option {
  switch (object) {
    case 0:
    case "None":
      return shipment_status_option.None;
    case 1:
    case "quote_generated":
      return shipment_status_option.quote_generated;
    case 2:
    case "booked":
      return shipment_status_option.booked;
    case 3:
    case "pickup_driver_assigned":
      return shipment_status_option.pickup_driver_assigned;
    case 4:
    case "pickup_driver_dispatched":
      return shipment_status_option.pickup_driver_dispatched;
    case 5:
    case "piked_up":
      return shipment_status_option.piked_up;
    case 6:
    case "arrived_at_shipping_warehouse":
      return shipment_status_option.arrived_at_shipping_warehouse;
    case 7:
    case "arrived_at_transit_warehouse":
      return shipment_status_option.arrived_at_transit_warehouse;
    case 8:
    case "arrived_at_delivery_warehouse":
      return shipment_status_option.arrived_at_delivery_warehouse;
    case 9:
    case "document_needed":
      return shipment_status_option.document_needed;
    case 10:
    case "shippers_information_needed":
      return shipment_status_option.shippers_information_needed;
    case 11:
    case "receiver_infomration_needed":
      return shipment_status_option.receiver_infomration_needed;
    case 12:
    case "arrived_at_custom":
      return shipment_status_option.arrived_at_custom;
    case 13:
    case "released_from_custom":
      return shipment_status_option.released_from_custom;
    case 14:
    case "on_hold":
      return shipment_status_option.on_hold;
    case 15:
    case "delivery_driver_assigned":
      return shipment_status_option.delivery_driver_assigned;
    case 16:
    case "delivery_driver_despatched":
      return shipment_status_option.delivery_driver_despatched;
    case 17:
    case "arrived_at_delivery_location":
      return shipment_status_option.arrived_at_delivery_location;
    case 18:
    case "delivery_refused_by_receiver":
      return shipment_status_option.delivery_refused_by_receiver;
    case 19:
    case "delivery_rescheduled_by_receiver":
      return shipment_status_option.delivery_rescheduled_by_receiver;
    case 20:
    case "unable_to_deliver":
      return shipment_status_option.unable_to_deliver;
    case 21:
    case "contact_to_schedule_delivery":
      return shipment_status_option.contact_to_schedule_delivery;
    case 22:
    case "delivery_retried":
      return shipment_status_option.delivery_retried;
    case 23:
    case "delivered":
      return shipment_status_option.delivered;
    case 24:
    case "wrong_delivery_address":
      return shipment_status_option.wrong_delivery_address;
    case 25:
    case "delivery_rescheduled_by_shipper":
      return shipment_status_option.delivery_rescheduled_by_shipper;
    case 26:
    case "delivery_rescheduled_by_carrier":
      return shipment_status_option.delivery_rescheduled_by_carrier;
    case -1:
    case "UNRECOGNIZED":
    default:
      return shipment_status_option.UNRECOGNIZED;
  }
}

export function shipment_status_optionToJSON(
  object: shipment_status_option
): string {
  switch (object) {
    case shipment_status_option.None:
      return "None";
    case shipment_status_option.quote_generated:
      return "quote_generated";
    case shipment_status_option.booked:
      return "booked";
    case shipment_status_option.pickup_driver_assigned:
      return "pickup_driver_assigned";
    case shipment_status_option.pickup_driver_dispatched:
      return "pickup_driver_dispatched";
    case shipment_status_option.piked_up:
      return "piked_up";
    case shipment_status_option.arrived_at_shipping_warehouse:
      return "arrived_at_shipping_warehouse";
    case shipment_status_option.arrived_at_transit_warehouse:
      return "arrived_at_transit_warehouse";
    case shipment_status_option.arrived_at_delivery_warehouse:
      return "arrived_at_delivery_warehouse";
    case shipment_status_option.document_needed:
      return "document_needed";
    case shipment_status_option.shippers_information_needed:
      return "shippers_information_needed";
    case shipment_status_option.receiver_infomration_needed:
      return "receiver_infomration_needed";
    case shipment_status_option.arrived_at_custom:
      return "arrived_at_custom";
    case shipment_status_option.released_from_custom:
      return "released_from_custom";
    case shipment_status_option.on_hold:
      return "on_hold";
    case shipment_status_option.delivery_driver_assigned:
      return "delivery_driver_assigned";
    case shipment_status_option.delivery_driver_despatched:
      return "delivery_driver_despatched";
    case shipment_status_option.arrived_at_delivery_location:
      return "arrived_at_delivery_location";
    case shipment_status_option.delivery_refused_by_receiver:
      return "delivery_refused_by_receiver";
    case shipment_status_option.delivery_rescheduled_by_receiver:
      return "delivery_rescheduled_by_receiver";
    case shipment_status_option.unable_to_deliver:
      return "unable_to_deliver";
    case shipment_status_option.contact_to_schedule_delivery:
      return "contact_to_schedule_delivery";
    case shipment_status_option.delivery_retried:
      return "delivery_retried";
    case shipment_status_option.delivered:
      return "delivered";
    case shipment_status_option.wrong_delivery_address:
      return "wrong_delivery_address";
    case shipment_status_option.delivery_rescheduled_by_shipper:
      return "delivery_rescheduled_by_shipper";
    case shipment_status_option.delivery_rescheduled_by_carrier:
      return "delivery_rescheduled_by_carrier";
    default:
      return "UNKNOWN";
  }
}

export interface shipment_status {
  /** @gotags: dynamodbav:"shipment_id,omitempty" */
  shipment_id: string;
  /** @gotags: dynamodbav:"reference_number,omitempty" */
  reference_number: string;
  /** @gotags: dynamodbav:"bol_number,omitempty" */
  bol_number: string;
  /** @gotags: dynamodbav:"date,omitempty" */
  date: string;
  /** @gotags: dynamodbav:"comment,omitempty" */
  comment: string;
  /** @gotags: dynamodbav:"status,omitempty" */
  status: shipment_status_option;
  /** @gotags: dynamodbav:"note,omitempty" */
  note: string;
  /** @gotags: dynamodbav:"current_location,omitempty" */
  current_location: string;
  /** @gotags: dynamodbav:"intervention_needed,omitempty" */
  intervention_needed: boolean;
  /** @gotags: dynamodbav:"business_id,omitempty" */
  business_id: string;
  /** @gotags: dynamodbav:"type,omitempty" */
  type: string;
  /** @gotags: dynamodbav:"quote_id,omitempty" */
  quote_id: string;
}

function createBaseshipment_status(): shipment_status {
  return {
    shipment_id: "",
    reference_number: "",
    bol_number: "",
    date: "",
    comment: "",
    status: 0,
    note: "",
    current_location: "",
    intervention_needed: false,
    business_id: "",
    type: "",
    quote_id: "",
  };
}

export const shipment_status = {
  fromJSON(object: any): shipment_status {
    return {
      shipment_id: isSet(object.shipment_id) ? String(object.shipment_id) : "",
      reference_number: isSet(object.reference_number)
        ? String(object.reference_number)
        : "",
      bol_number: isSet(object.bol_number) ? String(object.bol_number) : "",
      date: isSet(object.date) ? String(object.date) : "",
      comment: isSet(object.comment) ? String(object.comment) : "",
      status: isSet(object.status)
        ? shipment_status_optionFromJSON(object.status)
        : 0,
      note: isSet(object.note) ? String(object.note) : "",
      current_location: isSet(object.current_location)
        ? String(object.current_location)
        : "",
      intervention_needed: isSet(object.intervention_needed)
        ? Boolean(object.intervention_needed)
        : false,
      business_id: isSet(object.business_id) ? String(object.business_id) : "",
      type: isSet(object.type) ? String(object.type) : "",
      quote_id: isSet(object.quote_id) ? String(object.quote_id) : "",
    };
  },

  toJSON(message: shipment_status): unknown {
    const obj: any = {};
    message.shipment_id !== undefined &&
      (obj.shipment_id = message.shipment_id);
    message.reference_number !== undefined &&
      (obj.reference_number = message.reference_number);
    message.bol_number !== undefined && (obj.bol_number = message.bol_number);
    message.date !== undefined && (obj.date = message.date);
    message.comment !== undefined && (obj.comment = message.comment);
    message.status !== undefined &&
      (obj.status = shipment_status_optionToJSON(message.status));
    message.note !== undefined && (obj.note = message.note);
    message.current_location !== undefined &&
      (obj.current_location = message.current_location);
    message.intervention_needed !== undefined &&
      (obj.intervention_needed = message.intervention_needed);
    message.business_id !== undefined &&
      (obj.business_id = message.business_id);
    message.type !== undefined && (obj.type = message.type);
    message.quote_id !== undefined && (obj.quote_id = message.quote_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<shipment_status>, I>>(
    object: I
  ): shipment_status {
    const message = createBaseshipment_status();
    message.shipment_id = object.shipment_id ?? "";
    message.reference_number = object.reference_number ?? "";
    message.bol_number = object.bol_number ?? "";
    message.date = object.date ?? "";
    message.comment = object.comment ?? "";
    message.status = object.status ?? 0;
    message.note = object.note ?? "";
    message.current_location = object.current_location ?? "";
    message.intervention_needed = object.intervention_needed ?? false;
    message.business_id = object.business_id ?? "";
    message.type = object.type ?? "";
    message.quote_id = object.quote_id ?? "";
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
