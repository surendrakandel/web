/* eslint-disable */
export const protobufPackage = "v1";

export interface forgot_password {
  /** @gotags: dynamodbav:"email" */
  email: string;
}

export interface reset_password_token {
  /** @gotags: dynamodbav:"issued_to,omitempty" */
  issued_to: string;
  /** @gotags: dynamodbav:"issued_on,omitempty" */
  issued_on: string;
  /** @gotags: dynamodbav:"expires_on,omitempty" */
  expires_on: string;
  /** @gotags: dynamodbav:"token,omitempty" */
  token: string;
  /** @gotags: dynamodbav:"business_id,omitempty" */
  businessId: string;
}

export interface reset_password {
  /** @gotags: dynamodbav:"token,omitempty" */
  token: string;
  /** @gotags: dynamodbav:"new_password,omitempty" */
  new_password: string;
  /** @gotags: dynamodbav:"confirm_password,omitempty" */
  confirm_password: string;
  /** @gotags: dynamodbav:"email,omitempty" */
  email: string;
}

function createBaseforgot_password(): forgot_password {
  return { email: "" };
}

export const forgot_password = {
  fromJSON(object: any): forgot_password {
    return {
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: forgot_password): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<forgot_password>, I>>(
    object: I
  ): forgot_password {
    const message = createBaseforgot_password();
    message.email = object.email ?? "";
    return message;
  },
};

function createBasereset_password_token(): reset_password_token {
  return {
    issued_to: "",
    issued_on: "",
    expires_on: "",
    token: "",
    businessId: "",
  };
}

export const reset_password_token = {
  fromJSON(object: any): reset_password_token {
    return {
      issued_to: isSet(object.issued_to) ? String(object.issued_to) : "",
      issued_on: isSet(object.issued_on) ? String(object.issued_on) : "",
      expires_on: isSet(object.expires_on) ? String(object.expires_on) : "",
      token: isSet(object.token) ? String(object.token) : "",
      businessId: isSet(object.businessId) ? String(object.businessId) : "",
    };
  },

  toJSON(message: reset_password_token): unknown {
    const obj: any = {};
    message.issued_to !== undefined && (obj.issued_to = message.issued_to);
    message.issued_on !== undefined && (obj.issued_on = message.issued_on);
    message.expires_on !== undefined && (obj.expires_on = message.expires_on);
    message.token !== undefined && (obj.token = message.token);
    message.businessId !== undefined && (obj.businessId = message.businessId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<reset_password_token>, I>>(
    object: I
  ): reset_password_token {
    const message = createBasereset_password_token();
    message.issued_to = object.issued_to ?? "";
    message.issued_on = object.issued_on ?? "";
    message.expires_on = object.expires_on ?? "";
    message.token = object.token ?? "";
    message.businessId = object.businessId ?? "";
    return message;
  },
};

function createBasereset_password(): reset_password {
  return { token: "", new_password: "", confirm_password: "", email: "" };
}

export const reset_password = {
  fromJSON(object: any): reset_password {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      new_password: isSet(object.new_password)
        ? String(object.new_password)
        : "",
      confirm_password: isSet(object.confirm_password)
        ? String(object.confirm_password)
        : "",
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: reset_password): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.new_password !== undefined &&
      (obj.new_password = message.new_password);
    message.confirm_password !== undefined &&
      (obj.confirm_password = message.confirm_password);
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<reset_password>, I>>(
    object: I
  ): reset_password {
    const message = createBasereset_password();
    message.token = object.token ?? "";
    message.new_password = object.new_password ?? "";
    message.confirm_password = object.confirm_password ?? "";
    message.email = object.email ?? "";
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
