/* eslint-disable */
export const protobufPackage = "v1";

export interface business {
  /** @gotags: dynamodbav:"type" */
  type: string;
  /** @gotags: dynamodbav:"business_name" */
  business_name: string;
  /** @gotags: dynamodbav:"business_id" */
  business_id: string;
  /** @gotags: dynamodbav:"business_email" */
  business_email: string;
  /** @gotags: dynamodbav:"accounting_email" */
  accounting_email: string;
  /** @gotags: dynamodbav:"customer_service_email" */
  customer_service_email: string;
  /** @gotags: dynamodbav:"high_priority_email" */
  high_priority_email: string;
  /** @gotags: dynamodbav:"avatar_url" */
  avatar_url: string;
  /** @gotags: dynamodbav:"admin_email" */
  admin_email: string;
  /** @gotags: dynamodbav:"created_on" */
  create_at: string;
  /** @gotags: dynamodbav:"updated_on" */
  updated_at: string;
  /** @gotags: dynamodbav:"deleted_on" */
  deleted_at: string;
  /** @gotags: dynamodbav:"phone_number" */
  phone_number: string;
  /** @gotags: dynamodbav:"needs_address_update" */
  needs_address_update: boolean;
  /** @gotags: dynamodbav:"needs_default_pickup_address_update" */
  needs_default_pickup_address_update: boolean;
  /** @gotags: dynamodbav:"needs_default_pickup_address_update" */
  needs_default_delivery_address_update: boolean;
}

export interface businesses {
  /** @gotags: dynamodbav:"businesses" */
  businesses: business[];
}

function createBasebusiness(): business {
  return {
    type: "",
    business_name: "",
    business_id: "",
    business_email: "",
    accounting_email: "",
    customer_service_email: "",
    high_priority_email: "",
    avatar_url: "",
    admin_email: "",
    create_at: "",
    updated_at: "",
    deleted_at: "",
    phone_number: "",
    needs_address_update: false,
    needs_default_pickup_address_update: false,
    needs_default_delivery_address_update: false,
  };
}

export const business = {
  fromJSON(object: any): business {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      business_name: isSet(object.business_name)
        ? String(object.business_name)
        : "",
      business_id: isSet(object.business_id) ? String(object.business_id) : "",
      business_email: isSet(object.business_email)
        ? String(object.business_email)
        : "",
      accounting_email: isSet(object.accounting_email)
        ? String(object.accounting_email)
        : "",
      customer_service_email: isSet(object.customer_service_email)
        ? String(object.customer_service_email)
        : "",
      high_priority_email: isSet(object.high_priority_email)
        ? String(object.high_priority_email)
        : "",
      avatar_url: isSet(object.avatar_url) ? String(object.avatar_url) : "",
      admin_email: isSet(object.admin_email) ? String(object.admin_email) : "",
      create_at: isSet(object.create_at) ? String(object.create_at) : "",
      updated_at: isSet(object.updated_at) ? String(object.updated_at) : "",
      deleted_at: isSet(object.deleted_at) ? String(object.deleted_at) : "",
      phone_number: isSet(object.phone_number)
        ? String(object.phone_number)
        : "",
      needs_address_update: isSet(object.needs_address_update)
        ? Boolean(object.needs_address_update)
        : false,
      needs_default_pickup_address_update: isSet(
        object.needs_default_pickup_address_update
      )
        ? Boolean(object.needs_default_pickup_address_update)
        : false,
      needs_default_delivery_address_update: isSet(
        object.needs_default_delivery_address_update
      )
        ? Boolean(object.needs_default_delivery_address_update)
        : false,
    };
  },

  toJSON(message: business): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.business_name !== undefined &&
      (obj.business_name = message.business_name);
    message.business_id !== undefined &&
      (obj.business_id = message.business_id);
    message.business_email !== undefined &&
      (obj.business_email = message.business_email);
    message.accounting_email !== undefined &&
      (obj.accounting_email = message.accounting_email);
    message.customer_service_email !== undefined &&
      (obj.customer_service_email = message.customer_service_email);
    message.high_priority_email !== undefined &&
      (obj.high_priority_email = message.high_priority_email);
    message.avatar_url !== undefined && (obj.avatar_url = message.avatar_url);
    message.admin_email !== undefined &&
      (obj.admin_email = message.admin_email);
    message.create_at !== undefined && (obj.create_at = message.create_at);
    message.updated_at !== undefined && (obj.updated_at = message.updated_at);
    message.deleted_at !== undefined && (obj.deleted_at = message.deleted_at);
    message.phone_number !== undefined &&
      (obj.phone_number = message.phone_number);
    message.needs_address_update !== undefined &&
      (obj.needs_address_update = message.needs_address_update);
    message.needs_default_pickup_address_update !== undefined &&
      (obj.needs_default_pickup_address_update =
        message.needs_default_pickup_address_update);
    message.needs_default_delivery_address_update !== undefined &&
      (obj.needs_default_delivery_address_update =
        message.needs_default_delivery_address_update);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<business>, I>>(object: I): business {
    const message = createBasebusiness();
    message.type = object.type ?? "";
    message.business_name = object.business_name ?? "";
    message.business_id = object.business_id ?? "";
    message.business_email = object.business_email ?? "";
    message.accounting_email = object.accounting_email ?? "";
    message.customer_service_email = object.customer_service_email ?? "";
    message.high_priority_email = object.high_priority_email ?? "";
    message.avatar_url = object.avatar_url ?? "";
    message.admin_email = object.admin_email ?? "";
    message.create_at = object.create_at ?? "";
    message.updated_at = object.updated_at ?? "";
    message.deleted_at = object.deleted_at ?? "";
    message.phone_number = object.phone_number ?? "";
    message.needs_address_update = object.needs_address_update ?? false;
    message.needs_default_pickup_address_update =
      object.needs_default_pickup_address_update ?? false;
    message.needs_default_delivery_address_update =
      object.needs_default_delivery_address_update ?? false;
    return message;
  },
};

function createBasebusinesses(): businesses {
  return { businesses: [] };
}

export const businesses = {
  fromJSON(object: any): businesses {
    return {
      businesses: Array.isArray(object?.businesses)
        ? object.businesses.map((e: any) => business.fromJSON(e))
        : [],
    };
  },

  toJSON(message: businesses): unknown {
    const obj: any = {};
    if (message.businesses) {
      obj.businesses = message.businesses.map((e) =>
        e ? business.toJSON(e) : undefined
      );
    } else {
      obj.businesses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<businesses>, I>>(
    object: I
  ): businesses {
    const message = createBasebusinesses();
    message.businesses =
      object.businesses?.map((e) => business.fromPartial(e)) || [];
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
