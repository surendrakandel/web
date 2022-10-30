/* eslint-disable */
import { address } from "./address";
import { contact } from "./contact";
import { business_hours } from "./business_hours";
import {
  delivery_location_services,
  pickup_location_services,
  delivery_location_servicesFromJSON,
  pickup_location_servicesFromJSON,
  delivery_location_servicesToJSON,
  pickup_location_servicesToJSON,
} from "./location_services";

export const protobufPackage = "v1";

export interface location {
  /** @gotags: dynamodbav:"id,omitempty" */
  id: string;
  /** @gotags: dynamodbav:"company_name,omitempty" */
  company_name: string;
  /** @gotags: dynamodbav:"address,omitempty" */
  address: address | undefined;
  /** @gotags: dynamodbav:"contact,omitempty" */
  contact: contact | undefined;
  /** @gotags: dynamodbav:"business_hours,omitempty", */
  business_hours: business_hours | undefined;
  /** @gotags: dynamodbav:"shipper_pickup_ready_by,omitempty" */
  shipper_pickup_ready_by: string;
  /** @gotags: dynamodbav:"shipper_instructions,omitempty" */
  shipper_instructions: string;
  /** @gotags: dynamodbav:"receiver_instructions,omitempty" */
  receiver_instructions: string;
  /** @gotags: dynamodbav:"delivery_location_services,omitempty" */
  delivery_location_services: delivery_location_services[];
  /** @gotags: dynamodbav:"pickup_location_services,omitempty" */
  pickup_location_services: pickup_location_services[];
  /** @gotags: dynamodbav:"business_id,omitempty" */
  business_id: string;
  /** @gotags: dynamodbav:"type,omitempty" */
  type: string;
}

export interface locations {
  /** @gotags: dynamodbav:"locations,omitempty" */
  Locations: location[];
}

function createBaselocation(): location {
  return {
    id: "",
    company_name: "",
    address: undefined,
    contact: undefined,
    business_hours: undefined,
    shipper_pickup_ready_by: "",
    shipper_instructions: "",
    receiver_instructions: "",
    delivery_location_services: [],
    pickup_location_services: [],
    business_id: "",
    type: "",
  };
}

export const location = {
  fromJSON(object: any): location {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      company_name: isSet(object.company_name)
        ? String(object.company_name)
        : "",
      address: isSet(object.address)
        ? address.fromJSON(object.address)
        : undefined,
      contact: isSet(object.contact)
        ? contact.fromJSON(object.contact)
        : undefined,
      business_hours: isSet(object.business_hours)
        ? business_hours.fromJSON(object.business_hours)
        : undefined,
      shipper_pickup_ready_by: isSet(object.shipper_pickup_ready_by)
        ? String(object.shipper_pickup_ready_by)
        : "",
      shipper_instructions: isSet(object.shipper_instructions)
        ? String(object.shipper_instructions)
        : "",
      receiver_instructions: isSet(object.receiver_instructions)
        ? String(object.receiver_instructions)
        : "",
      delivery_location_services: Array.isArray(
        object?.delivery_location_services
      )
        ? object.delivery_location_services.map((e: any) =>
            delivery_location_servicesFromJSON(e)
          )
        : [],
      pickup_location_services: Array.isArray(object?.pickup_location_services)
        ? object.pickup_location_services.map((e: any) =>
            pickup_location_servicesFromJSON(e)
          )
        : [],
      business_id: isSet(object.business_id) ? String(object.business_id) : "",
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: location): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.company_name !== undefined &&
      (obj.company_name = message.company_name);
    message.address !== undefined &&
      (obj.address = message.address
        ? address.toJSON(message.address)
        : undefined);
    message.contact !== undefined &&
      (obj.contact = message.contact
        ? contact.toJSON(message.contact)
        : undefined);
    message.business_hours !== undefined &&
      (obj.business_hours = message.business_hours
        ? business_hours.toJSON(message.business_hours)
        : undefined);
    message.shipper_pickup_ready_by !== undefined &&
      (obj.shipper_pickup_ready_by = message.shipper_pickup_ready_by);
    message.shipper_instructions !== undefined &&
      (obj.shipper_instructions = message.shipper_instructions);
    message.receiver_instructions !== undefined &&
      (obj.receiver_instructions = message.receiver_instructions);
    if (message.delivery_location_services) {
      obj.delivery_location_services = message.delivery_location_services.map(
        (e) => delivery_location_servicesToJSON(e)
      );
    } else {
      obj.delivery_location_services = [];
    }
    if (message.pickup_location_services) {
      obj.pickup_location_services = message.pickup_location_services.map((e) =>
        pickup_location_servicesToJSON(e)
      );
    } else {
      obj.pickup_location_services = [];
    }
    message.business_id !== undefined &&
      (obj.business_id = message.business_id);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<location>, I>>(object: I): location {
    const message = createBaselocation();
    message.id = object.id ?? "";
    message.company_name = object.company_name ?? "";
    message.address =
      object.address !== undefined && object.address !== null
        ? address.fromPartial(object.address)
        : undefined;
    message.contact =
      object.contact !== undefined && object.contact !== null
        ? contact.fromPartial(object.contact)
        : undefined;
    message.business_hours =
      object.business_hours !== undefined && object.business_hours !== null
        ? business_hours.fromPartial(object.business_hours)
        : undefined;
    message.shipper_pickup_ready_by = object.shipper_pickup_ready_by ?? "";
    message.shipper_instructions = object.shipper_instructions ?? "";
    message.receiver_instructions = object.receiver_instructions ?? "";
    message.delivery_location_services =
      object.delivery_location_services?.map((e) => e) || [];
    message.pickup_location_services =
      object.pickup_location_services?.map((e) => e) || [];
    message.business_id = object.business_id ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

function createBaselocations(): locations {
  return { Locations: [] };
}

export const locations = {
  fromJSON(object: any): locations {
    return {
      Locations: Array.isArray(object?.Locations)
        ? object.Locations.map((e: any) => location.fromJSON(e))
        : [],
    };
  },

  toJSON(message: locations): unknown {
    const obj: any = {};
    if (message.Locations) {
      obj.Locations = message.Locations.map((e) =>
        e ? location.toJSON(e) : undefined
      );
    } else {
      obj.Locations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<locations>, I>>(
    object: I
  ): locations {
    const message = createBaselocations();
    message.Locations =
      object.Locations?.map((e) => location.fromPartial(e)) || [];
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
