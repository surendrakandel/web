/* eslint-disable */
export const protobufPackage = "v1";

export enum role {
  ROLE_NONE = 0,
  SYSTEM_MANAGER = 1,
  SYSTEM_STAFF = 2,
  SYSTEM_DEVELOPER = 3,
  SYSTEM_WAREHOUSE_MANAGER = 4,
  SYSTEM_WAREHOUSE_staff = 5,
  BUSINESS_OWNER = 6,
  BUSINESS_MANAGER = 7,
  BUSINESS_STAFF = 8,
  BUSINESS_WAREHOUSE_MANAGER = 9,
  BUSINESS_WAREHOUSE_staff = 10,
  THREEPL_OWNER = 11,
  THREEPL_STAFF = 12,
  SYSTEM_OWNER = 13,
  UNRECOGNIZED = -1,
}

export function roleFromJSON(object: any): role {
  switch (object) {
    case 0:
    case "ROLE_NONE":
      return role.ROLE_NONE;
    case 1:
    case "SYSTEM_MANAGER":
      return role.SYSTEM_MANAGER;
    case 2:
    case "SYSTEM_STAFF":
      return role.SYSTEM_STAFF;
    case 3:
    case "SYSTEM_DEVELOPER":
      return role.SYSTEM_DEVELOPER;
    case 4:
    case "SYSTEM_WAREHOUSE_MANAGER":
      return role.SYSTEM_WAREHOUSE_MANAGER;
    case 5:
    case "SYSTEM_WAREHOUSE_staff":
      return role.SYSTEM_WAREHOUSE_staff;
    case 6:
    case "BUSINESS_OWNER":
      return role.BUSINESS_OWNER;
    case 7:
    case "BUSINESS_MANAGER":
      return role.BUSINESS_MANAGER;
    case 8:
    case "BUSINESS_STAFF":
      return role.BUSINESS_STAFF;
    case 9:
    case "BUSINESS_WAREHOUSE_MANAGER":
      return role.BUSINESS_WAREHOUSE_MANAGER;
    case 10:
    case "BUSINESS_WAREHOUSE_staff":
      return role.BUSINESS_WAREHOUSE_staff;
    case 11:
    case "THREEPL_OWNER":
      return role.THREEPL_OWNER;
    case 12:
    case "THREEPL_STAFF":
      return role.THREEPL_STAFF;
    case 13:
    case "SYSTEM_OWNER":
      return role.SYSTEM_OWNER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return role.UNRECOGNIZED;
  }
}

export function roleToJSON(object: role): string {
  switch (object) {
    case role.ROLE_NONE:
      return "ROLE_NONE";
    case role.SYSTEM_MANAGER:
      return "SYSTEM_MANAGER";
    case role.SYSTEM_STAFF:
      return "SYSTEM_STAFF";
    case role.SYSTEM_DEVELOPER:
      return "SYSTEM_DEVELOPER";
    case role.SYSTEM_WAREHOUSE_MANAGER:
      return "SYSTEM_WAREHOUSE_MANAGER";
    case role.SYSTEM_WAREHOUSE_staff:
      return "SYSTEM_WAREHOUSE_staff";
    case role.BUSINESS_OWNER:
      return "BUSINESS_OWNER";
    case role.BUSINESS_MANAGER:
      return "BUSINESS_MANAGER";
    case role.BUSINESS_STAFF:
      return "BUSINESS_STAFF";
    case role.BUSINESS_WAREHOUSE_MANAGER:
      return "BUSINESS_WAREHOUSE_MANAGER";
    case role.BUSINESS_WAREHOUSE_staff:
      return "BUSINESS_WAREHOUSE_staff";
    case role.THREEPL_OWNER:
      return "THREEPL_OWNER";
    case role.THREEPL_STAFF:
      return "THREEPL_STAFF";
    case role.SYSTEM_OWNER:
      return "SYSTEM_OWNER";
    default:
      return "UNKNOWN";
  }
}

export interface update_user_role {
  /** @gotags: dynamodbav:"token,omitempty" */
  token: string;
  /** @gotags: dynamodbav:"new_role,omitempty" */
  new_role: role[];
  /** @gotags: dynamodbav:"staff_email,omitempty" */
  staff_email: string;
}

function createBaseupdate_user_role(): update_user_role {
  return { token: "", new_role: [], staff_email: "" };
}

export const update_user_role = {
  fromJSON(object: any): update_user_role {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      new_role: Array.isArray(object?.new_role)
        ? object.new_role.map((e: any) => roleFromJSON(e))
        : [],
      staff_email: isSet(object.staff_email) ? String(object.staff_email) : "",
    };
  },

  toJSON(message: update_user_role): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    if (message.new_role) {
      obj.new_role = message.new_role.map((e) => roleToJSON(e));
    } else {
      obj.new_role = [];
    }
    message.staff_email !== undefined &&
      (obj.staff_email = message.staff_email);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<update_user_role>, I>>(
    object: I
  ): update_user_role {
    const message = createBaseupdate_user_role();
    message.token = object.token ?? "";
    message.new_role = object.new_role?.map((e) => e) || [];
    message.staff_email = object.staff_email ?? "";
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
