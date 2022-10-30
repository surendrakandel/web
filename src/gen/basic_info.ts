/* eslint-disable */
import { business } from "./business";
import { user } from "./user";
import { location } from "./location";
import { booking_response } from "./book";
import { quote_request } from "./quote";

export const protobufPackage = "v1";

export interface basic_info {
  token: string;
  business: business | undefined;
  user: user | undefined;
  users: user[];
  valid: boolean;
  clientAddresses: location[];
  business_address: location | undefined;
  default_pickup_location: location | undefined;
  default_delivery_location: location | undefined;
  bookings: booking_response[];
  quotes: quote_request[];
}

function createBasebasic_info(): basic_info {
  return {
    token: "",
    business: undefined,
    user: undefined,
    users: [],
    valid: false,
    clientAddresses: [],
    business_address: undefined,
    default_pickup_location: undefined,
    default_delivery_location: undefined,
    bookings: [],
    quotes: [],
  };
}

export const basic_info = {
  fromJSON(object: any): basic_info {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      business: isSet(object.business)
        ? business.fromJSON(object.business)
        : undefined,
      user: isSet(object.user) ? user.fromJSON(object.user) : undefined,
      users: Array.isArray(object?.users)
        ? object.users.map((e: any) => user.fromJSON(e))
        : [],
      valid: isSet(object.valid) ? Boolean(object.valid) : false,
      clientAddresses: Array.isArray(object?.clientAddresses)
        ? object.clientAddresses.map((e: any) => location.fromJSON(e))
        : [],
      business_address: isSet(object.business_address)
        ? location.fromJSON(object.business_address)
        : undefined,
      default_pickup_location: isSet(object.default_pickup_location)
        ? location.fromJSON(object.default_pickup_location)
        : undefined,
      default_delivery_location: isSet(object.default_delivery_location)
        ? location.fromJSON(object.default_delivery_location)
        : undefined,
      bookings: Array.isArray(object?.bookings)
        ? object.bookings.map((e: any) => booking_response.fromJSON(e))
        : [],
      quotes: Array.isArray(object?.quotes)
        ? object.quotes.map((e: any) => quote_request.fromJSON(e))
        : [],
    };
  },

  toJSON(message: basic_info): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.business !== undefined &&
      (obj.business = message.business
        ? business.toJSON(message.business)
        : undefined);
    message.user !== undefined &&
      (obj.user = message.user ? user.toJSON(message.user) : undefined);
    if (message.users) {
      obj.users = message.users.map((e) => (e ? user.toJSON(e) : undefined));
    } else {
      obj.users = [];
    }
    message.valid !== undefined && (obj.valid = message.valid);
    if (message.clientAddresses) {
      obj.clientAddresses = message.clientAddresses.map((e) =>
        e ? location.toJSON(e) : undefined
      );
    } else {
      obj.clientAddresses = [];
    }
    message.business_address !== undefined &&
      (obj.business_address = message.business_address
        ? location.toJSON(message.business_address)
        : undefined);
    message.default_pickup_location !== undefined &&
      (obj.default_pickup_location = message.default_pickup_location
        ? location.toJSON(message.default_pickup_location)
        : undefined);
    message.default_delivery_location !== undefined &&
      (obj.default_delivery_location = message.default_delivery_location
        ? location.toJSON(message.default_delivery_location)
        : undefined);
    if (message.bookings) {
      obj.bookings = message.bookings.map((e) =>
        e ? booking_response.toJSON(e) : undefined
      );
    } else {
      obj.bookings = [];
    }
    if (message.quotes) {
      obj.quotes = message.quotes.map((e) =>
        e ? quote_request.toJSON(e) : undefined
      );
    } else {
      obj.quotes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<basic_info>, I>>(
    object: I
  ): basic_info {
    const message = createBasebasic_info();
    message.token = object.token ?? "";
    message.business =
      object.business !== undefined && object.business !== null
        ? business.fromPartial(object.business)
        : undefined;
    message.user =
      object.user !== undefined && object.user !== null
        ? user.fromPartial(object.user)
        : undefined;
    message.users = object.users?.map((e) => user.fromPartial(e)) || [];
    message.valid = object.valid ?? false;
    message.clientAddresses =
      object.clientAddresses?.map((e) => location.fromPartial(e)) || [];
    message.business_address =
      object.business_address !== undefined && object.business_address !== null
        ? location.fromPartial(object.business_address)
        : undefined;
    message.default_pickup_location =
      object.default_pickup_location !== undefined &&
      object.default_pickup_location !== null
        ? location.fromPartial(object.default_pickup_location)
        : undefined;
    message.default_delivery_location =
      object.default_delivery_location !== undefined &&
      object.default_delivery_location !== null
        ? location.fromPartial(object.default_delivery_location)
        : undefined;
    message.bookings =
      object.bookings?.map((e) => booking_response.fromPartial(e)) || [];
    message.quotes =
      object.quotes?.map((e) => quote_request.fromPartial(e)) || [];
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
