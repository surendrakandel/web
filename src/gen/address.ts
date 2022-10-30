/* eslint-disable */
export const protobufPackage = "v1";

export interface address {
  /** @gotags: dynamodbav:"address_line_1,omitempty" */
  address_line_1: string;
  /** @gotags: dynamodbav:"address_line_2,omitempty" */
  address_line_2: string;
  /** @gotags: dynamodbav:"street_name,omitempty" */
  street_name: string;
  /** @gotags: dynamodbav:"city,omitempty" */
  city: string;
  /** @gotags: dynamodbav:"county,omitempty" */
  county: string;
  /** @gotags: dynamodbav:"zip_code,omitempty" */
  zip_code: string;
  /** @gotags: dynamodbav:"state,omitempty" */
  state: string;
  /** @gotags: dynamodbav:"state_code,omitempty" */
  state_code: string;
  /** @gotags: dynamodbav:"extended_zip_code,omitempty" */
  extended_zip_code: string;
  /** @gotags: dynamodbav:"country,omitempty" */
  country: string;
  /** @gotags: dynamodbav:"country_code,omitempty" */
  country_code: string;
  /** @gotags: dynamodbav:"free_form_address,omitempty" */
  free_form_address: string;
  /** @gotags: dynamodbav:"local_name,omitempty" */
  local_name: string;
  /** @gotags: dynamodbav:"lat,omitempty" */
  lat: number;
  /** @gotags: dynamodbav:"long,omitempty" */
  long: number;
  /** @gotags: dynamodbav:"business_id,omitempty" */
  business_id: string;
  /** @gotags: dynamodbav:"type,omitempty" */
  type: string;
}

function createBaseaddress(): address {
  return {
    address_line_1: "",
    address_line_2: "",
    street_name: "",
    city: "",
    county: "",
    zip_code: "",
    state: "",
    state_code: "",
    extended_zip_code: "",
    country: "",
    country_code: "",
    free_form_address: "",
    local_name: "",
    lat: 0,
    long: 0,
    business_id: "",
    type: "",
  };
}

export const address = {
  fromJSON(object: any): address {
    return {
      address_line_1: isSet(object.address_line_1)
        ? String(object.address_line_1)
        : "",
      address_line_2: isSet(object.address_line_2)
        ? String(object.address_line_2)
        : "",
      street_name: isSet(object.street_name) ? String(object.street_name) : "",
      city: isSet(object.city) ? String(object.city) : "",
      county: isSet(object.county) ? String(object.county) : "",
      zip_code: isSet(object.zip_code) ? String(object.zip_code) : "",
      state: isSet(object.state) ? String(object.state) : "",
      state_code: isSet(object.state_code) ? String(object.state_code) : "",
      extended_zip_code: isSet(object.extended_zip_code)
        ? String(object.extended_zip_code)
        : "",
      country: isSet(object.country) ? String(object.country) : "",
      country_code: isSet(object.country_code)
        ? String(object.country_code)
        : "",
      free_form_address: isSet(object.free_form_address)
        ? String(object.free_form_address)
        : "",
      local_name: isSet(object.local_name) ? String(object.local_name) : "",
      lat: isSet(object.lat) ? Number(object.lat) : 0,
      long: isSet(object.long) ? Number(object.long) : 0,
      business_id: isSet(object.business_id) ? String(object.business_id) : "",
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: address): unknown {
    const obj: any = {};
    message.address_line_1 !== undefined &&
      (obj.address_line_1 = message.address_line_1);
    message.address_line_2 !== undefined &&
      (obj.address_line_2 = message.address_line_2);
    message.street_name !== undefined &&
      (obj.street_name = message.street_name);
    message.city !== undefined && (obj.city = message.city);
    message.county !== undefined && (obj.county = message.county);
    message.zip_code !== undefined && (obj.zip_code = message.zip_code);
    message.state !== undefined && (obj.state = message.state);
    message.state_code !== undefined && (obj.state_code = message.state_code);
    message.extended_zip_code !== undefined &&
      (obj.extended_zip_code = message.extended_zip_code);
    message.country !== undefined && (obj.country = message.country);
    message.country_code !== undefined &&
      (obj.country_code = message.country_code);
    message.free_form_address !== undefined &&
      (obj.free_form_address = message.free_form_address);
    message.local_name !== undefined && (obj.local_name = message.local_name);
    message.lat !== undefined && (obj.lat = message.lat);
    message.long !== undefined && (obj.long = message.long);
    message.business_id !== undefined &&
      (obj.business_id = message.business_id);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<address>, I>>(object: I): address {
    const message = createBaseaddress();
    message.address_line_1 = object.address_line_1 ?? "";
    message.address_line_2 = object.address_line_2 ?? "";
    message.street_name = object.street_name ?? "";
    message.city = object.city ?? "";
    message.county = object.county ?? "";
    message.zip_code = object.zip_code ?? "";
    message.state = object.state ?? "";
    message.state_code = object.state_code ?? "";
    message.extended_zip_code = object.extended_zip_code ?? "";
    message.country = object.country ?? "";
    message.country_code = object.country_code ?? "";
    message.free_form_address = object.free_form_address ?? "";
    message.local_name = object.local_name ?? "";
    message.lat = object.lat ?? 0;
    message.long = object.long ?? 0;
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
