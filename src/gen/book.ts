/* eslint-disable */
import { shipment_details } from "./shipment_details";
import { commodity } from "./commodity";
import { location } from "./location";
import { bid } from "./bid";

export const protobufPackage = "v1";

export enum freight_charge_term {
  CHARGE_NONE = 0,
  THIRD_PARTY = 1,
  INBOUND_COLLECT = 2,
  PREPAID = 3,
  UNRECOGNIZED = -1,
}

export function freight_charge_termFromJSON(object: any): freight_charge_term {
  switch (object) {
    case 0:
    case "CHARGE_NONE":
      return freight_charge_term.CHARGE_NONE;
    case 1:
    case "THIRD_PARTY":
      return freight_charge_term.THIRD_PARTY;
    case 2:
    case "INBOUND_COLLECT":
      return freight_charge_term.INBOUND_COLLECT;
    case 3:
    case "PREPAID":
      return freight_charge_term.PREPAID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return freight_charge_term.UNRECOGNIZED;
  }
}

export function freight_charge_termToJSON(object: freight_charge_term): string {
  switch (object) {
    case freight_charge_term.CHARGE_NONE:
      return "CHARGE_NONE";
    case freight_charge_term.THIRD_PARTY:
      return "THIRD_PARTY";
    case freight_charge_term.INBOUND_COLLECT:
      return "INBOUND_COLLECT";
    case freight_charge_term.PREPAID:
      return "PREPAID";
    default:
      return "UNKNOWN";
  }
}

export interface booking_response {
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
  /** @gotags: dynamodbav:"booking_success,omitempty" */
  booking_success: boolean;
  /** @gotags: dynamodbav:"rapid_booking_confirmation,omitempty" */
  DispatchResponse: DispatchResponse | undefined;
  /** @gotags: dynamodbav:"booking_info,omitempty" */
  booking_info: booking_info | undefined;
  /** @gotags: dynamodbav:"business_id,omitempty" */
  business_id: string;
  /** @gotags: dynamodbav:"quote_id,omitempty" */
  quote_id: string;
  /** @gotags: dynamodbav:"svg_data,omitempty" */
  svg_data: string;
  /** @gotags: dynamodbav:"bol_url,omitempty" */
  bol_url: string;
}

export interface booking_info {
  first_shipper_bol_number: string;
  freight_term: freight_charge_term;
  special_instructions: string;
  carrier_name: string;
  carrier_pro_number: string;
  carrier_logo_url: string;
  carrier_dispatch_contact_number: string;
  carrier_dispatch_email: string;
  carrier_bol_number: string;
  carrier_reference: string;
}

export interface bookings {
  /** @gotags: dynamodbav:"bookings,omitempty" */
  booking_responses: booking_response[];
}

export interface DispatchResponse {
  /** @gotags: dynamodbav:"shipmentId,omitempty" */
  ShipmentID: number;
  /** @gotags: dynamodbav:"securityKey,omitempty" */
  SecurityKey: string;
  /** @gotags: dynamodbav:"pickupNumber,omitempty" */
  PickupNumber: string;
  /** @gotags: dynamodbav:"carrierName,omitempty" */
  CarrierName: string;
  /** @gotags: dynamodbav:"carrierPhone,omitempty" */
  CarrierPhone: string;
  /** @gotags: dynamodbav:"carrierPRONumber,omitempty" */
  CarrierPRONumber: string;
  /** @gotags: dynamodbav:"handlingUnitTotal,omitempty" */
  HandlingUnitTotal: number;
  /** @gotags: dynamodbav:"isShipmentEdit,omitempty" */
  IsShipmentEdit: boolean;
  /** @gotags: dynamodbav:"isShipmentManual,omitempty" */
  IsShipmentManual: boolean;
  /** @gotags: dynamodbav:"serviceType,omitempty" */
  ServiceType: number;
  /** @gotags: dynamodbav:"isTrackingEmailSend,omitempty" */
  IsTrackingEmailSend: boolean;
  /** @gotags: dynamodbav:"isTrackingAPIEnabled,omitempty" */
  IsTrackingAPIEnabled: boolean;
  /** @gotags: dynamodbav:"customerBOLNumber,omitempty" */
  CustomerBOLNumber: string;
  /** @gotags: dynamodbav:"shipperEmail,omitempty" */
  ShipperEmail: string;
  /** @gotags: dynamodbav:"consigneeEmail,omitempty" */
  ConsigneeEmail: string;
  /** @gotags: dynamodbav:"result,omitempty" */
  Result: Result | undefined;
}

export interface Result {
  /** @gotags: dynamodbav:"capacityProviderBolUrl,omitempty" */
  CapacityProviderBolUrl: string;
  /** @gotags: dynamodbav:"shipmentIdentifier,omitempty" */
  ShipmentIdentifier: string;
  /** @gotags: dynamodbav:"pickupNote,omitempty" */
  PickupNote: string;
  /** @gotags: dynamodbav:"pickupDateTime,omitempty" */
  PickupDateTime: string;
  /** @gotags: dynamodbav:"errors,omitempty" */
  Errors: string[];
  /** @gotags: dynamodbav:"infoMessages,omitempty" */
  InfoMessages: string[];
  /** @gotags: dynamodbav:"type,omitempty" */
  Type: string;
}

function createBasebooking_response(): booking_response {
  return {
    shipment_details: undefined,
    commodities: [],
    pickup: undefined,
    delivery: undefined,
    bid: undefined,
    booking_success: false,
    DispatchResponse: undefined,
    booking_info: undefined,
    business_id: "",
    quote_id: "",
    svg_data: "",
    bol_url: "",
  };
}

export const booking_response = {
  fromJSON(object: any): booking_response {
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
      booking_success: isSet(object.booking_success)
        ? Boolean(object.booking_success)
        : false,
      DispatchResponse: isSet(object.DispatchResponse)
        ? DispatchResponse.fromJSON(object.DispatchResponse)
        : undefined,
      booking_info: isSet(object.booking_info)
        ? booking_info.fromJSON(object.booking_info)
        : undefined,
      business_id: isSet(object.business_id) ? String(object.business_id) : "",
      quote_id: isSet(object.quote_id) ? String(object.quote_id) : "",
      svg_data: isSet(object.svg_data) ? String(object.svg_data) : "",
      bol_url: isSet(object.bol_url) ? String(object.bol_url) : "",
    };
  },

  toJSON(message: booking_response): unknown {
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
    message.booking_success !== undefined &&
      (obj.booking_success = message.booking_success);
    message.DispatchResponse !== undefined &&
      (obj.DispatchResponse = message.DispatchResponse
        ? DispatchResponse.toJSON(message.DispatchResponse)
        : undefined);
    message.booking_info !== undefined &&
      (obj.booking_info = message.booking_info
        ? booking_info.toJSON(message.booking_info)
        : undefined);
    message.business_id !== undefined &&
      (obj.business_id = message.business_id);
    message.quote_id !== undefined && (obj.quote_id = message.quote_id);
    message.svg_data !== undefined && (obj.svg_data = message.svg_data);
    message.bol_url !== undefined && (obj.bol_url = message.bol_url);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<booking_response>, I>>(
    object: I
  ): booking_response {
    const message = createBasebooking_response();
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
    message.booking_success = object.booking_success ?? false;
    message.DispatchResponse =
      object.DispatchResponse !== undefined && object.DispatchResponse !== null
        ? DispatchResponse.fromPartial(object.DispatchResponse)
        : undefined;
    message.booking_info =
      object.booking_info !== undefined && object.booking_info !== null
        ? booking_info.fromPartial(object.booking_info)
        : undefined;
    message.business_id = object.business_id ?? "";
    message.quote_id = object.quote_id ?? "";
    message.svg_data = object.svg_data ?? "";
    message.bol_url = object.bol_url ?? "";
    return message;
  },
};

function createBasebooking_info(): booking_info {
  return {
    first_shipper_bol_number: "",
    freight_term: 0,
    special_instructions: "",
    carrier_name: "",
    carrier_pro_number: "",
    carrier_logo_url: "",
    carrier_dispatch_contact_number: "",
    carrier_dispatch_email: "",
    carrier_bol_number: "",
    carrier_reference: "",
  };
}

export const booking_info = {
  fromJSON(object: any): booking_info {
    return {
      first_shipper_bol_number: isSet(object.first_shipper_bol_number)
        ? String(object.first_shipper_bol_number)
        : "",
      freight_term: isSet(object.freight_term)
        ? freight_charge_termFromJSON(object.freight_term)
        : 0,
      special_instructions: isSet(object.special_instructions)
        ? String(object.special_instructions)
        : "",
      carrier_name: isSet(object.carrier_name)
        ? String(object.carrier_name)
        : "",
      carrier_pro_number: isSet(object.carrier_pro_number)
        ? String(object.carrier_pro_number)
        : "",
      carrier_logo_url: isSet(object.carrier_logo_url)
        ? String(object.carrier_logo_url)
        : "",
      carrier_dispatch_contact_number: isSet(
        object.carrier_dispatch_contact_number
      )
        ? String(object.carrier_dispatch_contact_number)
        : "",
      carrier_dispatch_email: isSet(object.carrier_dispatch_email)
        ? String(object.carrier_dispatch_email)
        : "",
      carrier_bol_number: isSet(object.carrier_bol_number)
        ? String(object.carrier_bol_number)
        : "",
      carrier_reference: isSet(object.carrier_reference)
        ? String(object.carrier_reference)
        : "",
    };
  },

  toJSON(message: booking_info): unknown {
    const obj: any = {};
    message.first_shipper_bol_number !== undefined &&
      (obj.first_shipper_bol_number = message.first_shipper_bol_number);
    message.freight_term !== undefined &&
      (obj.freight_term = freight_charge_termToJSON(message.freight_term));
    message.special_instructions !== undefined &&
      (obj.special_instructions = message.special_instructions);
    message.carrier_name !== undefined &&
      (obj.carrier_name = message.carrier_name);
    message.carrier_pro_number !== undefined &&
      (obj.carrier_pro_number = message.carrier_pro_number);
    message.carrier_logo_url !== undefined &&
      (obj.carrier_logo_url = message.carrier_logo_url);
    message.carrier_dispatch_contact_number !== undefined &&
      (obj.carrier_dispatch_contact_number =
        message.carrier_dispatch_contact_number);
    message.carrier_dispatch_email !== undefined &&
      (obj.carrier_dispatch_email = message.carrier_dispatch_email);
    message.carrier_bol_number !== undefined &&
      (obj.carrier_bol_number = message.carrier_bol_number);
    message.carrier_reference !== undefined &&
      (obj.carrier_reference = message.carrier_reference);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<booking_info>, I>>(
    object: I
  ): booking_info {
    const message = createBasebooking_info();
    message.first_shipper_bol_number = object.first_shipper_bol_number ?? "";
    message.freight_term = object.freight_term ?? 0;
    message.special_instructions = object.special_instructions ?? "";
    message.carrier_name = object.carrier_name ?? "";
    message.carrier_pro_number = object.carrier_pro_number ?? "";
    message.carrier_logo_url = object.carrier_logo_url ?? "";
    message.carrier_dispatch_contact_number =
      object.carrier_dispatch_contact_number ?? "";
    message.carrier_dispatch_email = object.carrier_dispatch_email ?? "";
    message.carrier_bol_number = object.carrier_bol_number ?? "";
    message.carrier_reference = object.carrier_reference ?? "";
    return message;
  },
};

function createBasebookings(): bookings {
  return { booking_responses: [] };
}

export const bookings = {
  fromJSON(object: any): bookings {
    return {
      booking_responses: Array.isArray(object?.booking_responses)
        ? object.booking_responses.map((e: any) => booking_response.fromJSON(e))
        : [],
    };
  },

  toJSON(message: bookings): unknown {
    const obj: any = {};
    if (message.booking_responses) {
      obj.booking_responses = message.booking_responses.map((e) =>
        e ? booking_response.toJSON(e) : undefined
      );
    } else {
      obj.booking_responses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<bookings>, I>>(object: I): bookings {
    const message = createBasebookings();
    message.booking_responses =
      object.booking_responses?.map((e) => booking_response.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseDispatchResponse(): DispatchResponse {
  return {
    ShipmentID: 0,
    SecurityKey: "",
    PickupNumber: "",
    CarrierName: "",
    CarrierPhone: "",
    CarrierPRONumber: "",
    HandlingUnitTotal: 0,
    IsShipmentEdit: false,
    IsShipmentManual: false,
    ServiceType: 0,
    IsTrackingEmailSend: false,
    IsTrackingAPIEnabled: false,
    CustomerBOLNumber: "",
    ShipperEmail: "",
    ConsigneeEmail: "",
    Result: undefined,
  };
}

export const DispatchResponse = {
  fromJSON(object: any): DispatchResponse {
    return {
      ShipmentID: isSet(object.ShipmentID) ? Number(object.ShipmentID) : 0,
      SecurityKey: isSet(object.SecurityKey) ? String(object.SecurityKey) : "",
      PickupNumber: isSet(object.PickupNumber)
        ? String(object.PickupNumber)
        : "",
      CarrierName: isSet(object.CarrierName) ? String(object.CarrierName) : "",
      CarrierPhone: isSet(object.CarrierPhone)
        ? String(object.CarrierPhone)
        : "",
      CarrierPRONumber: isSet(object.CarrierPRONumber)
        ? String(object.CarrierPRONumber)
        : "",
      HandlingUnitTotal: isSet(object.HandlingUnitTotal)
        ? Number(object.HandlingUnitTotal)
        : 0,
      IsShipmentEdit: isSet(object.IsShipmentEdit)
        ? Boolean(object.IsShipmentEdit)
        : false,
      IsShipmentManual: isSet(object.IsShipmentManual)
        ? Boolean(object.IsShipmentManual)
        : false,
      ServiceType: isSet(object.ServiceType) ? Number(object.ServiceType) : 0,
      IsTrackingEmailSend: isSet(object.IsTrackingEmailSend)
        ? Boolean(object.IsTrackingEmailSend)
        : false,
      IsTrackingAPIEnabled: isSet(object.IsTrackingAPIEnabled)
        ? Boolean(object.IsTrackingAPIEnabled)
        : false,
      CustomerBOLNumber: isSet(object.CustomerBOLNumber)
        ? String(object.CustomerBOLNumber)
        : "",
      ShipperEmail: isSet(object.ShipperEmail)
        ? String(object.ShipperEmail)
        : "",
      ConsigneeEmail: isSet(object.ConsigneeEmail)
        ? String(object.ConsigneeEmail)
        : "",
      Result: isSet(object.Result) ? Result.fromJSON(object.Result) : undefined,
    };
  },

  toJSON(message: DispatchResponse): unknown {
    const obj: any = {};
    message.ShipmentID !== undefined &&
      (obj.ShipmentID = Math.round(message.ShipmentID));
    message.SecurityKey !== undefined &&
      (obj.SecurityKey = message.SecurityKey);
    message.PickupNumber !== undefined &&
      (obj.PickupNumber = message.PickupNumber);
    message.CarrierName !== undefined &&
      (obj.CarrierName = message.CarrierName);
    message.CarrierPhone !== undefined &&
      (obj.CarrierPhone = message.CarrierPhone);
    message.CarrierPRONumber !== undefined &&
      (obj.CarrierPRONumber = message.CarrierPRONumber);
    message.HandlingUnitTotal !== undefined &&
      (obj.HandlingUnitTotal = message.HandlingUnitTotal);
    message.IsShipmentEdit !== undefined &&
      (obj.IsShipmentEdit = message.IsShipmentEdit);
    message.IsShipmentManual !== undefined &&
      (obj.IsShipmentManual = message.IsShipmentManual);
    message.ServiceType !== undefined &&
      (obj.ServiceType = Math.round(message.ServiceType));
    message.IsTrackingEmailSend !== undefined &&
      (obj.IsTrackingEmailSend = message.IsTrackingEmailSend);
    message.IsTrackingAPIEnabled !== undefined &&
      (obj.IsTrackingAPIEnabled = message.IsTrackingAPIEnabled);
    message.CustomerBOLNumber !== undefined &&
      (obj.CustomerBOLNumber = message.CustomerBOLNumber);
    message.ShipperEmail !== undefined &&
      (obj.ShipperEmail = message.ShipperEmail);
    message.ConsigneeEmail !== undefined &&
      (obj.ConsigneeEmail = message.ConsigneeEmail);
    message.Result !== undefined &&
      (obj.Result = message.Result ? Result.toJSON(message.Result) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DispatchResponse>, I>>(
    object: I
  ): DispatchResponse {
    const message = createBaseDispatchResponse();
    message.ShipmentID = object.ShipmentID ?? 0;
    message.SecurityKey = object.SecurityKey ?? "";
    message.PickupNumber = object.PickupNumber ?? "";
    message.CarrierName = object.CarrierName ?? "";
    message.CarrierPhone = object.CarrierPhone ?? "";
    message.CarrierPRONumber = object.CarrierPRONumber ?? "";
    message.HandlingUnitTotal = object.HandlingUnitTotal ?? 0;
    message.IsShipmentEdit = object.IsShipmentEdit ?? false;
    message.IsShipmentManual = object.IsShipmentManual ?? false;
    message.ServiceType = object.ServiceType ?? 0;
    message.IsTrackingEmailSend = object.IsTrackingEmailSend ?? false;
    message.IsTrackingAPIEnabled = object.IsTrackingAPIEnabled ?? false;
    message.CustomerBOLNumber = object.CustomerBOLNumber ?? "";
    message.ShipperEmail = object.ShipperEmail ?? "";
    message.ConsigneeEmail = object.ConsigneeEmail ?? "";
    message.Result =
      object.Result !== undefined && object.Result !== null
        ? Result.fromPartial(object.Result)
        : undefined;
    return message;
  },
};

function createBaseResult(): Result {
  return {
    CapacityProviderBolUrl: "",
    ShipmentIdentifier: "",
    PickupNote: "",
    PickupDateTime: "",
    Errors: [],
    InfoMessages: [],
    Type: "",
  };
}

export const Result = {
  fromJSON(object: any): Result {
    return {
      CapacityProviderBolUrl: isSet(object.CapacityProviderBolUrl)
        ? String(object.CapacityProviderBolUrl)
        : "",
      ShipmentIdentifier: isSet(object.ShipmentIdentifier)
        ? String(object.ShipmentIdentifier)
        : "",
      PickupNote: isSet(object.PickupNote) ? String(object.PickupNote) : "",
      PickupDateTime: isSet(object.PickupDateTime)
        ? String(object.PickupDateTime)
        : "",
      Errors: Array.isArray(object?.Errors)
        ? object.Errors.map((e: any) => String(e))
        : [],
      InfoMessages: Array.isArray(object?.InfoMessages)
        ? object.InfoMessages.map((e: any) => String(e))
        : [],
      Type: isSet(object.Type) ? String(object.Type) : "",
    };
  },

  toJSON(message: Result): unknown {
    const obj: any = {};
    message.CapacityProviderBolUrl !== undefined &&
      (obj.CapacityProviderBolUrl = message.CapacityProviderBolUrl);
    message.ShipmentIdentifier !== undefined &&
      (obj.ShipmentIdentifier = message.ShipmentIdentifier);
    message.PickupNote !== undefined && (obj.PickupNote = message.PickupNote);
    message.PickupDateTime !== undefined &&
      (obj.PickupDateTime = message.PickupDateTime);
    if (message.Errors) {
      obj.Errors = message.Errors.map((e) => e);
    } else {
      obj.Errors = [];
    }
    if (message.InfoMessages) {
      obj.InfoMessages = message.InfoMessages.map((e) => e);
    } else {
      obj.InfoMessages = [];
    }
    message.Type !== undefined && (obj.Type = message.Type);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Result>, I>>(object: I): Result {
    const message = createBaseResult();
    message.CapacityProviderBolUrl = object.CapacityProviderBolUrl ?? "";
    message.ShipmentIdentifier = object.ShipmentIdentifier ?? "";
    message.PickupNote = object.PickupNote ?? "";
    message.PickupDateTime = object.PickupDateTime ?? "";
    message.Errors = object.Errors?.map((e) => e) || [];
    message.InfoMessages = object.InfoMessages?.map((e) => e) || [];
    message.Type = object.Type ?? "";
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
