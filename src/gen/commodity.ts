/* eslint-disable */
import {
  package_type,
  package_typeFromJSON,
  package_typeToJSON,
} from "./package";
import {
  freight_class,
  freight_classFromJSON,
  freight_classToJSON,
} from "./freight_class";

export const protobufPackage = "v1";

export enum dimension_uom {
  DIMENSION_NONE = 0,
  INCH = 1,
  CM = 2,
  UNRECOGNIZED = -1,
}

export function dimension_uomFromJSON(object: any): dimension_uom {
  switch (object) {
    case 0:
    case "DIMENSION_NONE":
      return dimension_uom.DIMENSION_NONE;
    case 1:
    case "INCH":
      return dimension_uom.INCH;
    case 2:
    case "CM":
      return dimension_uom.CM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return dimension_uom.UNRECOGNIZED;
  }
}

export function dimension_uomToJSON(object: dimension_uom): string {
  switch (object) {
    case dimension_uom.DIMENSION_NONE:
      return "DIMENSION_NONE";
    case dimension_uom.INCH:
      return "INCH";
    case dimension_uom.CM:
      return "CM";
    default:
      return "UNKNOWN";
  }
}

export enum weight_uom {
  WEIGHT_NONE = 0,
  LB = 1,
  KG = 2,
  UNRECOGNIZED = -1,
}

export function weight_uomFromJSON(object: any): weight_uom {
  switch (object) {
    case 0:
    case "WEIGHT_NONE":
      return weight_uom.WEIGHT_NONE;
    case 1:
    case "LB":
      return weight_uom.LB;
    case 2:
    case "KG":
      return weight_uom.KG;
    case -1:
    case "UNRECOGNIZED":
    default:
      return weight_uom.UNRECOGNIZED;
  }
}

export function weight_uomToJSON(object: weight_uom): string {
  switch (object) {
    case weight_uom.WEIGHT_NONE:
      return "WEIGHT_NONE";
    case weight_uom.LB:
      return "LB";
    case weight_uom.KG:
      return "KG";
    default:
      return "UNKNOWN";
  }
}

export enum commodity_services {
  /** SERVICES_NONE - @gotags: dynamodbav:"NONE,omitempty" */
  SERVICES_NONE = 0,
  /** PROTECT_FROM_FREEZE - @gotags: dynamodbav:"protect_from_freeze,omitempty" */
  PROTECT_FROM_FREEZE = 1,
  /** SORT_AND_SEGREGATE - @gotags: dynamodbav:"sort_and_segregate,omitempty" */
  SORT_AND_SEGREGATE = 2,
  /** GUARANTEED - @gotags: dynamodbav:"guaranteed,omitempty" */
  GUARANTEED = 3,
  /** HAZARDOUS - @gotags: dynamodbav:"hazardous,omitempty" */
  HAZARDOUS = 4,
  /** STACKABLE - @gotags: dynamodbav:"stackabe,omitempty" */
  STACKABLE = 5,
  UNRECOGNIZED = -1,
}

export function commodity_servicesFromJSON(object: any): commodity_services {
  switch (object) {
    case 0:
    case "SERVICES_NONE":
      return commodity_services.SERVICES_NONE;
    case 1:
    case "PROTECT_FROM_FREEZE":
      return commodity_services.PROTECT_FROM_FREEZE;
    case 2:
    case "SORT_AND_SEGREGATE":
      return commodity_services.SORT_AND_SEGREGATE;
    case 3:
    case "GUARANTEED":
      return commodity_services.GUARANTEED;
    case 4:
    case "HAZARDOUS":
      return commodity_services.HAZARDOUS;
    case 5:
    case "STACKABLE":
      return commodity_services.STACKABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return commodity_services.UNRECOGNIZED;
  }
}

export function commodity_servicesToJSON(object: commodity_services): string {
  switch (object) {
    case commodity_services.SERVICES_NONE:
      return "SERVICES_NONE";
    case commodity_services.PROTECT_FROM_FREEZE:
      return "PROTECT_FROM_FREEZE";
    case commodity_services.SORT_AND_SEGREGATE:
      return "SORT_AND_SEGREGATE";
    case commodity_services.GUARANTEED:
      return "GUARANTEED";
    case commodity_services.HAZARDOUS:
      return "HAZARDOUS";
    case commodity_services.STACKABLE:
      return "STACKABLE";
    default:
      return "UNKNOWN";
  }
}

export interface commodity {
  /** @gotags: dynamodbav:"density,omitempty" */
  density: number;
  /** @gotags: dynamodbav:"length,omitempty" */
  length: number;
  /** @gotags: dynamodbav:"width,omitempty" */
  width: number;
  /** @gotags: dynamodbav:"height,omitempty" */
  height: number;
  /** @gotags: dynamodbav:"weight,omitempty" */
  weight: number;
  /** @gotags: dynamodbav:"dimension_uom,omitempty" */
  dimension_uom: dimension_uom;
  /** @gotags: dynamodbav:"weight_uom,omitempty" */
  weight_uom: weight_uom;
  /** @gotags: dynamodbav:"dimension_display,omitempty" */
  dimension_display: string;
  /** @gotags: dynamodbav:"package_type,omitempty" */
  package_type: package_type;
  /** @gotags: dynamodbav:"quantity,omitempty" */
  quantity: number;
  /** @gotags: dynamodbav:"freight_class,omitempty" */
  freight_class: freight_class;
  /** @gotags: dynamodbav:"stackable,omitempty" */
  stackable: boolean;
  /** @gotags: dynamodbav:"protect_from_freeze,omitempty" */
  protect_from_freeze: boolean;
  /** @gotags: dynamodbav:"sort_and_segregate,omitempty" */
  sort_and_segregate: boolean;
  /** @gotags: dynamodbav:"guaranteed,omitempty" */
  guaranteed: boolean;
  /** @gotags: dynamodbav:"hazardous,omitempty" */
  hazardous: boolean;
  /** @gotags: dynamodbav:"commodity_instructions,omitempty" */
  commodity_instructions: string;
  /** @gotags: dynamodbav:"commodity_services,omitempty" */
  commodity_services: commodity_services[];
  /** @gotags: dynamodbav:"index,omitempty" */
  index: number;
  /** @gotags: dynamodbav:"shipment_description,omitempty" */
  shipment_description: string;
  /** @gotags: dynamodbav:"type,omitempty" */
  type: string;
  /** @gotags: dynamodbav:"quote_id,omitempty" */
  quote_id: string;
}

function createBasecommodity(): commodity {
  return {
    density: 0,
    length: 0,
    width: 0,
    height: 0,
    weight: 0,
    dimension_uom: 0,
    weight_uom: 0,
    dimension_display: "",
    package_type: 0,
    quantity: 0,
    freight_class: 0,
    stackable: false,
    protect_from_freeze: false,
    sort_and_segregate: false,
    guaranteed: false,
    hazardous: false,
    commodity_instructions: "",
    commodity_services: [],
    index: 0,
    shipment_description: "",
    type: "",
    quote_id: "",
  };
}

export const commodity = {
  fromJSON(object: any): commodity {
    return {
      density: isSet(object.density) ? Number(object.density) : 0,
      length: isSet(object.length) ? Number(object.length) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      weight: isSet(object.weight) ? Number(object.weight) : 0,
      dimension_uom: isSet(object.dimension_uom)
        ? dimension_uomFromJSON(object.dimension_uom)
        : 0,
      weight_uom: isSet(object.weight_uom)
        ? weight_uomFromJSON(object.weight_uom)
        : 0,
      dimension_display: isSet(object.dimension_display)
        ? String(object.dimension_display)
        : "",
      package_type: isSet(object.package_type)
        ? package_typeFromJSON(object.package_type)
        : 0,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      freight_class: isSet(object.freight_class)
        ? freight_classFromJSON(object.freight_class)
        : 0,
      stackable: isSet(object.stackable) ? Boolean(object.stackable) : false,
      protect_from_freeze: isSet(object.protect_from_freeze)
        ? Boolean(object.protect_from_freeze)
        : false,
      sort_and_segregate: isSet(object.sort_and_segregate)
        ? Boolean(object.sort_and_segregate)
        : false,
      guaranteed: isSet(object.guaranteed) ? Boolean(object.guaranteed) : false,
      hazardous: isSet(object.hazardous) ? Boolean(object.hazardous) : false,
      commodity_instructions: isSet(object.commodity_instructions)
        ? String(object.commodity_instructions)
        : "",
      commodity_services: Array.isArray(object?.commodity_services)
        ? object.commodity_services.map((e: any) =>
            commodity_servicesFromJSON(e)
          )
        : [],
      index: isSet(object.index) ? Number(object.index) : 0,
      shipment_description: isSet(object.shipment_description)
        ? String(object.shipment_description)
        : "",
      type: isSet(object.type) ? String(object.type) : "",
      quote_id: isSet(object.quote_id) ? String(object.quote_id) : "",
    };
  },

  toJSON(message: commodity): unknown {
    const obj: any = {};
    message.density !== undefined && (obj.density = message.density);
    message.length !== undefined && (obj.length = message.length);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.weight !== undefined && (obj.weight = message.weight);
    message.dimension_uom !== undefined &&
      (obj.dimension_uom = dimension_uomToJSON(message.dimension_uom));
    message.weight_uom !== undefined &&
      (obj.weight_uom = weight_uomToJSON(message.weight_uom));
    message.dimension_display !== undefined &&
      (obj.dimension_display = message.dimension_display);
    message.package_type !== undefined &&
      (obj.package_type = package_typeToJSON(message.package_type));
    message.quantity !== undefined &&
      (obj.quantity = Math.round(message.quantity));
    message.freight_class !== undefined &&
      (obj.freight_class = freight_classToJSON(message.freight_class));
    message.stackable !== undefined && (obj.stackable = message.stackable);
    message.protect_from_freeze !== undefined &&
      (obj.protect_from_freeze = message.protect_from_freeze);
    message.sort_and_segregate !== undefined &&
      (obj.sort_and_segregate = message.sort_and_segregate);
    message.guaranteed !== undefined && (obj.guaranteed = message.guaranteed);
    message.hazardous !== undefined && (obj.hazardous = message.hazardous);
    message.commodity_instructions !== undefined &&
      (obj.commodity_instructions = message.commodity_instructions);
    if (message.commodity_services) {
      obj.commodity_services = message.commodity_services.map((e) =>
        commodity_servicesToJSON(e)
      );
    } else {
      obj.commodity_services = [];
    }
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.shipment_description !== undefined &&
      (obj.shipment_description = message.shipment_description);
    message.type !== undefined && (obj.type = message.type);
    message.quote_id !== undefined && (obj.quote_id = message.quote_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<commodity>, I>>(
    object: I
  ): commodity {
    const message = createBasecommodity();
    message.density = object.density ?? 0;
    message.length = object.length ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.weight = object.weight ?? 0;
    message.dimension_uom = object.dimension_uom ?? 0;
    message.weight_uom = object.weight_uom ?? 0;
    message.dimension_display = object.dimension_display ?? "";
    message.package_type = object.package_type ?? 0;
    message.quantity = object.quantity ?? 0;
    message.freight_class = object.freight_class ?? 0;
    message.stackable = object.stackable ?? false;
    message.protect_from_freeze = object.protect_from_freeze ?? false;
    message.sort_and_segregate = object.sort_and_segregate ?? false;
    message.guaranteed = object.guaranteed ?? false;
    message.hazardous = object.hazardous ?? false;
    message.commodity_instructions = object.commodity_instructions ?? "";
    message.commodity_services = object.commodity_services?.map((e) => e) || [];
    message.index = object.index ?? 0;
    message.shipment_description = object.shipment_description ?? "";
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
