/* eslint-disable */
export const protobufPackage = "v1";

export interface reference {
  /** @gotags: dynamodbav:"vendor_bol,omitempty" */
  vendor_bol: string;
  /** @gotags: dynamodbav:"bol,omitempty" */
  bol: string;
  /** @gotags: dynamodbav:"vendor_reference_id,omitempty" */
  vendor_reference_id: string;
  /** @gotags: dynamodbav:"pickup_no,omitempty" */
  pickup_no: string;
  /** @gotags: dynamodbav:"invoice_no,omitempty" */
  invoice_no: string;
  /** @gotags: dynamodbav:"vendor_invoice_no,omitempty" */
  vendor_invoice_no: string;
  /** @gotags: dynamodbav:"business_id,omitempty" */
  business_id: string;
  /** @gotags: dynamodbav:"type,omitempty" */
  type: string;
}

function createBasereference(): reference {
  return {
    vendor_bol: "",
    bol: "",
    vendor_reference_id: "",
    pickup_no: "",
    invoice_no: "",
    vendor_invoice_no: "",
    business_id: "",
    type: "",
  };
}

export const reference = {
  fromJSON(object: any): reference {
    return {
      vendor_bol: isSet(object.vendor_bol) ? String(object.vendor_bol) : "",
      bol: isSet(object.bol) ? String(object.bol) : "",
      vendor_reference_id: isSet(object.vendor_reference_id)
        ? String(object.vendor_reference_id)
        : "",
      pickup_no: isSet(object.pickup_no) ? String(object.pickup_no) : "",
      invoice_no: isSet(object.invoice_no) ? String(object.invoice_no) : "",
      vendor_invoice_no: isSet(object.vendor_invoice_no)
        ? String(object.vendor_invoice_no)
        : "",
      business_id: isSet(object.business_id) ? String(object.business_id) : "",
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: reference): unknown {
    const obj: any = {};
    message.vendor_bol !== undefined && (obj.vendor_bol = message.vendor_bol);
    message.bol !== undefined && (obj.bol = message.bol);
    message.vendor_reference_id !== undefined &&
      (obj.vendor_reference_id = message.vendor_reference_id);
    message.pickup_no !== undefined && (obj.pickup_no = message.pickup_no);
    message.invoice_no !== undefined && (obj.invoice_no = message.invoice_no);
    message.vendor_invoice_no !== undefined &&
      (obj.vendor_invoice_no = message.vendor_invoice_no);
    message.business_id !== undefined &&
      (obj.business_id = message.business_id);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<reference>, I>>(
    object: I
  ): reference {
    const message = createBasereference();
    message.vendor_bol = object.vendor_bol ?? "";
    message.bol = object.bol ?? "";
    message.vendor_reference_id = object.vendor_reference_id ?? "";
    message.pickup_no = object.pickup_no ?? "";
    message.invoice_no = object.invoice_no ?? "";
    message.vendor_invoice_no = object.vendor_invoice_no ?? "";
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
