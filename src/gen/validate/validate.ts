/* eslint-disable */
import { Timestamp } from "../google/protobuf/timestamp";
import { Duration } from "../google/protobuf/duration";

export const protobufPackage = "validate";

/**
 * FieldRules encapsulates the rules for each type of field. Depending on the
 * field, the correct set should be used to ensure proper validations.
 */
export interface FieldRules {
  /** Scalar Field Types */
  float: FloatRules | undefined;
  double: DoubleRules | undefined;
  int32: Int32Rules | undefined;
  int64: Int64Rules | undefined;
  uint32: UInt32Rules | undefined;
  uint64: UInt64Rules | undefined;
  sint32: SInt32Rules | undefined;
  sint64: SInt64Rules | undefined;
  fixed32: Fixed32Rules | undefined;
  fixed64: Fixed64Rules | undefined;
  sfixed32: SFixed32Rules | undefined;
  sfixed64: SFixed64Rules | undefined;
  bool: BoolRules | undefined;
  string: StringRules | undefined;
  bytes: BytesRules | undefined;
  /** Complex Field Types */
  enum: EnumRules | undefined;
  message: MessageRules | undefined;
  repeated: RepeatedRules | undefined;
  map: MapRules | undefined;
  /** Well-Known Field Types */
  any: AnyRules | undefined;
  duration: DurationRules | undefined;
  timestamp: TimestampRules | undefined;
}

/** FloatRules describes the constraints applied to `float` values */
export interface FloatRules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: number[];
}

/** DoubleRules describes the constraints applied to `double` values */
export interface DoubleRules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: number[];
}

/** Int32Rules describes the constraints applied to `int32` values */
export interface Int32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: number[];
}

/** Int64Rules describes the constraints applied to `int64` values */
export interface Int64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: string;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: string;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: string;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: string;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: string;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: string[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: string[];
}

/** UInt32Rules describes the constraints applied to `uint32` values */
export interface UInt32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: number[];
}

/** UInt64Rules describes the constraints applied to `uint64` values */
export interface UInt64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: string;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: string;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: string;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: string;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: string;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: string[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: string[];
}

/** SInt32Rules describes the constraints applied to `sint32` values */
export interface SInt32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: number[];
}

/** SInt64Rules describes the constraints applied to `sint64` values */
export interface SInt64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: string;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: string;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: string;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: string;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: string;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: string[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: string[];
}

/** Fixed32Rules describes the constraints applied to `fixed32` values */
export interface Fixed32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: number[];
}

/** Fixed64Rules describes the constraints applied to `fixed64` values */
export interface Fixed64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: string;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: string;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: string;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: string;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: string;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: string[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: string[];
}

/** SFixed32Rules describes the constraints applied to `sfixed32` values */
export interface SFixed32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: number[];
}

/** SFixed64Rules describes the constraints applied to `sfixed64` values */
export interface SFixed64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: string;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: string;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: string;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: string;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: string;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: string[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: string[];
}

/** BoolRules describes the constraints applied to `bool` values */
export interface BoolRules {
  /** Const specifies that this field must be exactly the specified value */
  const: boolean;
}

/** StringRules describe the constraints applied to `string` values */
export interface StringRules {
  /** Const specifies that this field must be exactly the specified value */
  const: string;
  /**
   * Len specifies that this field must be the specified number of
   * characters (Unicode code points). Note that the number of
   * characters may differ from the number of bytes in the string.
   */
  len: string;
  /**
   * MinLen specifies that this field must be the specified number of
   * characters (Unicode code points) at a minimum. Note that the number of
   * characters may differ from the number of bytes in the string.
   */
  min_len: string;
  /**
   * MaxLen specifies that this field must be the specified number of
   * characters (Unicode code points) at a maximum. Note that the number of
   * characters may differ from the number of bytes in the string.
   */
  max_len: string;
  /**
   * LenBytes specifies that this field must be the specified number of bytes
   * at a minimum
   */
  len_bytes: string;
  /**
   * MinBytes specifies that this field must be the specified number of bytes
   * at a minimum
   */
  min_bytes: string;
  /**
   * MaxBytes specifies that this field must be the specified number of bytes
   * at a maximum
   */
  max_bytes: string;
  /**
   * Pattern specifes that this field must match against the specified
   * regular expression (RE2 syntax). The included expression should elide
   * any delimiters.
   */
  pattern: string;
  /**
   * Prefix specifies that this field must have the specified substring at
   * the beginning of the string.
   */
  prefix: string;
  /**
   * Suffix specifies that this field must have the specified substring at
   * the end of the string.
   */
  suffix: string;
  /**
   * Contains specifies that this field must have the specified substring
   * anywhere in the string.
   */
  contains: string;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: string[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: string[];
  /**
   * Email specifies that the field must be a valid email address as
   * defined by RFC 5322
   */
  email: boolean | undefined;
  /**
   * Hostname specifies that the field must be a valid hostname as
   * defined by RFC 1034. This constraint does not support
   * internationalized domain names (IDNs).
   */
  hostname: boolean | undefined;
  /**
   * Ip specifies that the field must be a valid IP (v4 or v6) address.
   * Valid IPv6 addresses should not include surrounding square brackets.
   */
  ip: boolean | undefined;
  /** Ipv4 specifies that the field must be a valid IPv4 address. */
  ipv4: boolean | undefined;
  /**
   * Ipv6 specifies that the field must be a valid IPv6 address. Valid
   * IPv6 addresses should not include surrounding square brackets.
   */
  ipv6: boolean | undefined;
  /**
   * Uri specifies that the field must be a valid, absolute URI as defined
   * by RFC 3986
   */
  uri: boolean | undefined;
  /**
   * UriRef specifies that the field must be a valid URI as defined by RFC
   * 3986 and may be relative or absolute.
   */
  uri_ref: boolean | undefined;
  /**
   * Address specifies that the field must be either a valid hostname as
   * defined by RFC 1034 (which does not support internationalized domain
   * names or IDNs), or it can be a valid IP (v4 or v6).
   */
  address: boolean | undefined;
}

/** BytesRules describe the constraints applied to `bytes` values */
export interface BytesRules {
  /** Const specifies that this field must be exactly the specified value */
  const: Uint8Array;
  /** Len specifies that this field must be the specified number of bytes */
  len: string;
  /**
   * MinLen specifies that this field must be the specified number of bytes
   * at a minimum
   */
  min_len: string;
  /**
   * MaxLen specifies that this field must be the specified number of bytes
   * at a maximum
   */
  max_len: string;
  /**
   * Pattern specifes that this field must match against the specified
   * regular expression (RE2 syntax). The included expression should elide
   * any delimiters.
   */
  pattern: string;
  /**
   * Prefix specifies that this field must have the specified bytes at the
   * beginning of the string.
   */
  prefix: Uint8Array;
  /**
   * Suffix specifies that this field must have the specified bytes at the
   * end of the string.
   */
  suffix: Uint8Array;
  /**
   * Contains specifies that this field must have the specified bytes
   * anywhere in the string.
   */
  contains: Uint8Array;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: Uint8Array[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: Uint8Array[];
  /**
   * Ip specifies that the field must be a valid IP (v4 or v6) address in
   * byte format
   */
  ip: boolean | undefined;
  /**
   * Ipv4 specifies that the field must be a valid IPv4 address in byte
   * format
   */
  ipv4: boolean | undefined;
  /**
   * Ipv6 specifies that the field must be a valid IPv6 address in byte
   * format
   */
  ipv6: boolean | undefined;
}

/** EnumRules describe the constraints applied to enum values */
export interface EnumRules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * DefinedOnly specifies that this field must be only one of the defined
   * values for this enum, failing on any undefined value.
   */
  defined_only: boolean;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: number[];
}

/**
 * MessageRules describe the constraints applied to embedded message values.
 * For message-type fields, validation is performed recursively.
 */
export interface MessageRules {
  /**
   * Skip specifies that the validation rules of this field should not be
   * evaluated
   */
  skip: boolean;
  /** Required specifies that this field must be set */
  required: boolean;
}

/** RepeatedRules describe the constraints applied to `repeated` values */
export interface RepeatedRules {
  /**
   * MinItems specifies that this field must have the specified number of
   * items at a minimum
   */
  min_items: string;
  /**
   * MaxItems specifies that this field must have the specified number of
   * items at a maximum
   */
  max_items: string;
  /**
   * Unique specifies that all elements in this field must be unique. This
   * contraint is only applicable to scalar and enum types (messages are not
   * supported).
   */
  unique: boolean;
  /**
   * Items specifies the contraints to be applied to each item in the field.
   * Repeated message fields will still execute validation against each item
   * unless skip is specified here.
   */
  items: FieldRules | undefined;
}

/** MapRules describe the constraints applied to `map` values */
export interface MapRules {
  /**
   * MinPairs specifies that this field must have the specified number of
   * KVs at a minimum
   */
  min_pairs: string;
  /**
   * MaxPairs specifies that this field must have the specified number of
   * KVs at a maximum
   */
  max_pairs: string;
  /**
   * NoSparse specifies values in this field cannot be unset. This only
   * applies to map's with message value types.
   */
  no_sparse: boolean;
  /** Keys specifies the constraints to be applied to each key in the field. */
  keys: FieldRules | undefined;
  /**
   * Values specifies the constraints to be applied to the value of each key
   * in the field. Message values will still have their validations evaluated
   * unless skip is specified here.
   */
  values: FieldRules | undefined;
}

/**
 * AnyRules describe constraints applied exclusively to the
 * `google.protobuf.Any` well-known type
 */
export interface AnyRules {
  /** Required specifies that this field must be set */
  required: boolean;
  /**
   * In specifies that this field's `type_url` must be equal to one of the
   * specified values.
   */
  in: string[];
  /**
   * NotIn specifies that this field's `type_url` must not be equal to any of
   * the specified values.
   */
  not_in: string[];
}

/**
 * DurationRules describe the constraints applied exclusively to the
 * `google.protobuf.Duration` well-known type
 */
export interface DurationRules {
  /** Required specifies that this field must be set */
  required: boolean;
  /** Const specifies that this field must be exactly the specified value */
  const: Duration | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: Duration | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * inclusive
   */
  lte: Duration | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive
   */
  gt: Duration | undefined;
  /**
   * Gte specifies that this field must be greater than the specified value,
   * inclusive
   */
  gte: Duration | undefined;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: Duration[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  not_in: Duration[];
}

/**
 * TimestampRules describe the constraints applied exclusively to the
 * `google.protobuf.Timestamp` well-known type
 */
export interface TimestampRules {
  /** Required specifies that this field must be set */
  required: boolean;
  /** Const specifies that this field must be exactly the specified value */
  const: Date | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: Date | undefined;
  /**
   * Lte specifies that this field must be less than the specified value,
   * inclusive
   */
  lte: Date | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive
   */
  gt: Date | undefined;
  /**
   * Gte specifies that this field must be greater than the specified value,
   * inclusive
   */
  gte: Date | undefined;
  /**
   * LtNow specifies that this must be less than the current time. LtNow
   * can only be used with the Within rule.
   */
  lt_now: boolean;
  /**
   * GtNow specifies that this must be greater than the current time. GtNow
   * can only be used with the Within rule.
   */
  gt_now: boolean;
  /**
   * Within specifies that this field must be within this duration of the
   * current time. This constraint can be used alone or with the LtNow and
   * GtNow rules.
   */
  within: Duration | undefined;
}

function createBaseFieldRules(): FieldRules {
  return {
    float: undefined,
    double: undefined,
    int32: undefined,
    int64: undefined,
    uint32: undefined,
    uint64: undefined,
    sint32: undefined,
    sint64: undefined,
    fixed32: undefined,
    fixed64: undefined,
    sfixed32: undefined,
    sfixed64: undefined,
    bool: undefined,
    string: undefined,
    bytes: undefined,
    enum: undefined,
    message: undefined,
    repeated: undefined,
    map: undefined,
    any: undefined,
    duration: undefined,
    timestamp: undefined,
  };
}

export const FieldRules = {
  fromJSON(object: any): FieldRules {
    return {
      float: isSet(object.float)
        ? FloatRules.fromJSON(object.float)
        : undefined,
      double: isSet(object.double)
        ? DoubleRules.fromJSON(object.double)
        : undefined,
      int32: isSet(object.int32)
        ? Int32Rules.fromJSON(object.int32)
        : undefined,
      int64: isSet(object.int64)
        ? Int64Rules.fromJSON(object.int64)
        : undefined,
      uint32: isSet(object.uint32)
        ? UInt32Rules.fromJSON(object.uint32)
        : undefined,
      uint64: isSet(object.uint64)
        ? UInt64Rules.fromJSON(object.uint64)
        : undefined,
      sint32: isSet(object.sint32)
        ? SInt32Rules.fromJSON(object.sint32)
        : undefined,
      sint64: isSet(object.sint64)
        ? SInt64Rules.fromJSON(object.sint64)
        : undefined,
      fixed32: isSet(object.fixed32)
        ? Fixed32Rules.fromJSON(object.fixed32)
        : undefined,
      fixed64: isSet(object.fixed64)
        ? Fixed64Rules.fromJSON(object.fixed64)
        : undefined,
      sfixed32: isSet(object.sfixed32)
        ? SFixed32Rules.fromJSON(object.sfixed32)
        : undefined,
      sfixed64: isSet(object.sfixed64)
        ? SFixed64Rules.fromJSON(object.sfixed64)
        : undefined,
      bool: isSet(object.bool) ? BoolRules.fromJSON(object.bool) : undefined,
      string: isSet(object.string)
        ? StringRules.fromJSON(object.string)
        : undefined,
      bytes: isSet(object.bytes)
        ? BytesRules.fromJSON(object.bytes)
        : undefined,
      enum: isSet(object.enum) ? EnumRules.fromJSON(object.enum) : undefined,
      message: isSet(object.message)
        ? MessageRules.fromJSON(object.message)
        : undefined,
      repeated: isSet(object.repeated)
        ? RepeatedRules.fromJSON(object.repeated)
        : undefined,
      map: isSet(object.map) ? MapRules.fromJSON(object.map) : undefined,
      any: isSet(object.any) ? AnyRules.fromJSON(object.any) : undefined,
      duration: isSet(object.duration)
        ? DurationRules.fromJSON(object.duration)
        : undefined,
      timestamp: isSet(object.timestamp)
        ? TimestampRules.fromJSON(object.timestamp)
        : undefined,
    };
  },

  toJSON(message: FieldRules): unknown {
    const obj: any = {};
    message.float !== undefined &&
      (obj.float = message.float
        ? FloatRules.toJSON(message.float)
        : undefined);
    message.double !== undefined &&
      (obj.double = message.double
        ? DoubleRules.toJSON(message.double)
        : undefined);
    message.int32 !== undefined &&
      (obj.int32 = message.int32
        ? Int32Rules.toJSON(message.int32)
        : undefined);
    message.int64 !== undefined &&
      (obj.int64 = message.int64
        ? Int64Rules.toJSON(message.int64)
        : undefined);
    message.uint32 !== undefined &&
      (obj.uint32 = message.uint32
        ? UInt32Rules.toJSON(message.uint32)
        : undefined);
    message.uint64 !== undefined &&
      (obj.uint64 = message.uint64
        ? UInt64Rules.toJSON(message.uint64)
        : undefined);
    message.sint32 !== undefined &&
      (obj.sint32 = message.sint32
        ? SInt32Rules.toJSON(message.sint32)
        : undefined);
    message.sint64 !== undefined &&
      (obj.sint64 = message.sint64
        ? SInt64Rules.toJSON(message.sint64)
        : undefined);
    message.fixed32 !== undefined &&
      (obj.fixed32 = message.fixed32
        ? Fixed32Rules.toJSON(message.fixed32)
        : undefined);
    message.fixed64 !== undefined &&
      (obj.fixed64 = message.fixed64
        ? Fixed64Rules.toJSON(message.fixed64)
        : undefined);
    message.sfixed32 !== undefined &&
      (obj.sfixed32 = message.sfixed32
        ? SFixed32Rules.toJSON(message.sfixed32)
        : undefined);
    message.sfixed64 !== undefined &&
      (obj.sfixed64 = message.sfixed64
        ? SFixed64Rules.toJSON(message.sfixed64)
        : undefined);
    message.bool !== undefined &&
      (obj.bool = message.bool ? BoolRules.toJSON(message.bool) : undefined);
    message.string !== undefined &&
      (obj.string = message.string
        ? StringRules.toJSON(message.string)
        : undefined);
    message.bytes !== undefined &&
      (obj.bytes = message.bytes
        ? BytesRules.toJSON(message.bytes)
        : undefined);
    message.enum !== undefined &&
      (obj.enum = message.enum ? EnumRules.toJSON(message.enum) : undefined);
    message.message !== undefined &&
      (obj.message = message.message
        ? MessageRules.toJSON(message.message)
        : undefined);
    message.repeated !== undefined &&
      (obj.repeated = message.repeated
        ? RepeatedRules.toJSON(message.repeated)
        : undefined);
    message.map !== undefined &&
      (obj.map = message.map ? MapRules.toJSON(message.map) : undefined);
    message.any !== undefined &&
      (obj.any = message.any ? AnyRules.toJSON(message.any) : undefined);
    message.duration !== undefined &&
      (obj.duration = message.duration
        ? DurationRules.toJSON(message.duration)
        : undefined);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp
        ? TimestampRules.toJSON(message.timestamp)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FieldRules>, I>>(
    object: I
  ): FieldRules {
    const message = createBaseFieldRules();
    message.float =
      object.float !== undefined && object.float !== null
        ? FloatRules.fromPartial(object.float)
        : undefined;
    message.double =
      object.double !== undefined && object.double !== null
        ? DoubleRules.fromPartial(object.double)
        : undefined;
    message.int32 =
      object.int32 !== undefined && object.int32 !== null
        ? Int32Rules.fromPartial(object.int32)
        : undefined;
    message.int64 =
      object.int64 !== undefined && object.int64 !== null
        ? Int64Rules.fromPartial(object.int64)
        : undefined;
    message.uint32 =
      object.uint32 !== undefined && object.uint32 !== null
        ? UInt32Rules.fromPartial(object.uint32)
        : undefined;
    message.uint64 =
      object.uint64 !== undefined && object.uint64 !== null
        ? UInt64Rules.fromPartial(object.uint64)
        : undefined;
    message.sint32 =
      object.sint32 !== undefined && object.sint32 !== null
        ? SInt32Rules.fromPartial(object.sint32)
        : undefined;
    message.sint64 =
      object.sint64 !== undefined && object.sint64 !== null
        ? SInt64Rules.fromPartial(object.sint64)
        : undefined;
    message.fixed32 =
      object.fixed32 !== undefined && object.fixed32 !== null
        ? Fixed32Rules.fromPartial(object.fixed32)
        : undefined;
    message.fixed64 =
      object.fixed64 !== undefined && object.fixed64 !== null
        ? Fixed64Rules.fromPartial(object.fixed64)
        : undefined;
    message.sfixed32 =
      object.sfixed32 !== undefined && object.sfixed32 !== null
        ? SFixed32Rules.fromPartial(object.sfixed32)
        : undefined;
    message.sfixed64 =
      object.sfixed64 !== undefined && object.sfixed64 !== null
        ? SFixed64Rules.fromPartial(object.sfixed64)
        : undefined;
    message.bool =
      object.bool !== undefined && object.bool !== null
        ? BoolRules.fromPartial(object.bool)
        : undefined;
    message.string =
      object.string !== undefined && object.string !== null
        ? StringRules.fromPartial(object.string)
        : undefined;
    message.bytes =
      object.bytes !== undefined && object.bytes !== null
        ? BytesRules.fromPartial(object.bytes)
        : undefined;
    message.enum =
      object.enum !== undefined && object.enum !== null
        ? EnumRules.fromPartial(object.enum)
        : undefined;
    message.message =
      object.message !== undefined && object.message !== null
        ? MessageRules.fromPartial(object.message)
        : undefined;
    message.repeated =
      object.repeated !== undefined && object.repeated !== null
        ? RepeatedRules.fromPartial(object.repeated)
        : undefined;
    message.map =
      object.map !== undefined && object.map !== null
        ? MapRules.fromPartial(object.map)
        : undefined;
    message.any =
      object.any !== undefined && object.any !== null
        ? AnyRules.fromPartial(object.any)
        : undefined;
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? DurationRules.fromPartial(object.duration)
        : undefined;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? TimestampRules.fromPartial(object.timestamp)
        : undefined;
    return message;
  },
};

function createBaseFloatRules(): FloatRules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], not_in: [] };
}

export const FloatRules = {
  fromJSON(object: any): FloatRules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      lt: isSet(object.lt) ? Number(object.lt) : 0,
      lte: isSet(object.lte) ? Number(object.lte) : 0,
      gt: isSet(object.gt) ? Number(object.gt) : 0,
      gte: isSet(object.gte) ? Number(object.gte) : 0,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      not_in: Array.isArray(object?.not_in)
        ? object.not_in.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: FloatRules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.not_in) {
      obj.not_in = message.not_in.map((e) => e);
    } else {
      obj.not_in = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FloatRules>, I>>(
    object: I
  ): FloatRules {
    const message = createBaseFloatRules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    return message;
  },
};

function createBaseDoubleRules(): DoubleRules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], not_in: [] };
}

export const DoubleRules = {
  fromJSON(object: any): DoubleRules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      lt: isSet(object.lt) ? Number(object.lt) : 0,
      lte: isSet(object.lte) ? Number(object.lte) : 0,
      gt: isSet(object.gt) ? Number(object.gt) : 0,
      gte: isSet(object.gte) ? Number(object.gte) : 0,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      not_in: Array.isArray(object?.not_in)
        ? object.not_in.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: DoubleRules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.not_in) {
      obj.not_in = message.not_in.map((e) => e);
    } else {
      obj.not_in = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DoubleRules>, I>>(
    object: I
  ): DoubleRules {
    const message = createBaseDoubleRules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    return message;
  },
};

function createBaseInt32Rules(): Int32Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], not_in: [] };
}

export const Int32Rules = {
  fromJSON(object: any): Int32Rules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      lt: isSet(object.lt) ? Number(object.lt) : 0,
      lte: isSet(object.lte) ? Number(object.lte) : 0,
      gt: isSet(object.gt) ? Number(object.gt) : 0,
      gte: isSet(object.gte) ? Number(object.gte) : 0,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      not_in: Array.isArray(object?.not_in)
        ? object.not_in.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: Int32Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = Math.round(message.const));
    message.lt !== undefined && (obj.lt = Math.round(message.lt));
    message.lte !== undefined && (obj.lte = Math.round(message.lte));
    message.gt !== undefined && (obj.gt = Math.round(message.gt));
    message.gte !== undefined && (obj.gte = Math.round(message.gte));
    if (message.in) {
      obj.in = message.in.map((e) => Math.round(e));
    } else {
      obj.in = [];
    }
    if (message.not_in) {
      obj.not_in = message.not_in.map((e) => Math.round(e));
    } else {
      obj.not_in = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Int32Rules>, I>>(
    object: I
  ): Int32Rules {
    const message = createBaseInt32Rules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    return message;
  },
};

function createBaseInt64Rules(): Int64Rules {
  return {
    const: "0",
    lt: "0",
    lte: "0",
    gt: "0",
    gte: "0",
    in: [],
    not_in: [],
  };
}

export const Int64Rules = {
  fromJSON(object: any): Int64Rules {
    return {
      const: isSet(object.const) ? String(object.const) : "0",
      lt: isSet(object.lt) ? String(object.lt) : "0",
      lte: isSet(object.lte) ? String(object.lte) : "0",
      gt: isSet(object.gt) ? String(object.gt) : "0",
      gte: isSet(object.gte) ? String(object.gte) : "0",
      in: Array.isArray(object?.in) ? object.in.map((e: any) => String(e)) : [],
      not_in: Array.isArray(object?.not_in)
        ? object.not_in.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Int64Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.not_in) {
      obj.not_in = message.not_in.map((e) => e);
    } else {
      obj.not_in = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Int64Rules>, I>>(
    object: I
  ): Int64Rules {
    const message = createBaseInt64Rules();
    message.const = object.const ?? "0";
    message.lt = object.lt ?? "0";
    message.lte = object.lte ?? "0";
    message.gt = object.gt ?? "0";
    message.gte = object.gte ?? "0";
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    return message;
  },
};

function createBaseUInt32Rules(): UInt32Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], not_in: [] };
}

export const UInt32Rules = {
  fromJSON(object: any): UInt32Rules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      lt: isSet(object.lt) ? Number(object.lt) : 0,
      lte: isSet(object.lte) ? Number(object.lte) : 0,
      gt: isSet(object.gt) ? Number(object.gt) : 0,
      gte: isSet(object.gte) ? Number(object.gte) : 0,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      not_in: Array.isArray(object?.not_in)
        ? object.not_in.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: UInt32Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = Math.round(message.const));
    message.lt !== undefined && (obj.lt = Math.round(message.lt));
    message.lte !== undefined && (obj.lte = Math.round(message.lte));
    message.gt !== undefined && (obj.gt = Math.round(message.gt));
    message.gte !== undefined && (obj.gte = Math.round(message.gte));
    if (message.in) {
      obj.in = message.in.map((e) => Math.round(e));
    } else {
      obj.in = [];
    }
    if (message.not_in) {
      obj.not_in = message.not_in.map((e) => Math.round(e));
    } else {
      obj.not_in = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UInt32Rules>, I>>(
    object: I
  ): UInt32Rules {
    const message = createBaseUInt32Rules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    return message;
  },
};

function createBaseUInt64Rules(): UInt64Rules {
  return {
    const: "0",
    lt: "0",
    lte: "0",
    gt: "0",
    gte: "0",
    in: [],
    not_in: [],
  };
}

export const UInt64Rules = {
  fromJSON(object: any): UInt64Rules {
    return {
      const: isSet(object.const) ? String(object.const) : "0",
      lt: isSet(object.lt) ? String(object.lt) : "0",
      lte: isSet(object.lte) ? String(object.lte) : "0",
      gt: isSet(object.gt) ? String(object.gt) : "0",
      gte: isSet(object.gte) ? String(object.gte) : "0",
      in: Array.isArray(object?.in) ? object.in.map((e: any) => String(e)) : [],
      not_in: Array.isArray(object?.not_in)
        ? object.not_in.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: UInt64Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.not_in) {
      obj.not_in = message.not_in.map((e) => e);
    } else {
      obj.not_in = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UInt64Rules>, I>>(
    object: I
  ): UInt64Rules {
    const message = createBaseUInt64Rules();
    message.const = object.const ?? "0";
    message.lt = object.lt ?? "0";
    message.lte = object.lte ?? "0";
    message.gt = object.gt ?? "0";
    message.gte = object.gte ?? "0";
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    return message;
  },
};

function createBaseSInt32Rules(): SInt32Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], not_in: [] };
}

export const SInt32Rules = {
  fromJSON(object: any): SInt32Rules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      lt: isSet(object.lt) ? Number(object.lt) : 0,
      lte: isSet(object.lte) ? Number(object.lte) : 0,
      gt: isSet(object.gt) ? Number(object.gt) : 0,
      gte: isSet(object.gte) ? Number(object.gte) : 0,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      not_in: Array.isArray(object?.not_in)
        ? object.not_in.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: SInt32Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = Math.round(message.const));
    message.lt !== undefined && (obj.lt = Math.round(message.lt));
    message.lte !== undefined && (obj.lte = Math.round(message.lte));
    message.gt !== undefined && (obj.gt = Math.round(message.gt));
    message.gte !== undefined && (obj.gte = Math.round(message.gte));
    if (message.in) {
      obj.in = message.in.map((e) => Math.round(e));
    } else {
      obj.in = [];
    }
    if (message.not_in) {
      obj.not_in = message.not_in.map((e) => Math.round(e));
    } else {
      obj.not_in = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SInt32Rules>, I>>(
    object: I
  ): SInt32Rules {
    const message = createBaseSInt32Rules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    return message;
  },
};

function createBaseSInt64Rules(): SInt64Rules {
  return {
    const: "0",
    lt: "0",
    lte: "0",
    gt: "0",
    gte: "0",
    in: [],
    not_in: [],
  };
}

export const SInt64Rules = {
  fromJSON(object: any): SInt64Rules {
    return {
      const: isSet(object.const) ? String(object.const) : "0",
      lt: isSet(object.lt) ? String(object.lt) : "0",
      lte: isSet(object.lte) ? String(object.lte) : "0",
      gt: isSet(object.gt) ? String(object.gt) : "0",
      gte: isSet(object.gte) ? String(object.gte) : "0",
      in: Array.isArray(object?.in) ? object.in.map((e: any) => String(e)) : [],
      not_in: Array.isArray(object?.not_in)
        ? object.not_in.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: SInt64Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.not_in) {
      obj.not_in = message.not_in.map((e) => e);
    } else {
      obj.not_in = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SInt64Rules>, I>>(
    object: I
  ): SInt64Rules {
    const message = createBaseSInt64Rules();
    message.const = object.const ?? "0";
    message.lt = object.lt ?? "0";
    message.lte = object.lte ?? "0";
    message.gt = object.gt ?? "0";
    message.gte = object.gte ?? "0";
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    return message;
  },
};

function createBaseFixed32Rules(): Fixed32Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], not_in: [] };
}

export const Fixed32Rules = {
  fromJSON(object: any): Fixed32Rules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      lt: isSet(object.lt) ? Number(object.lt) : 0,
      lte: isSet(object.lte) ? Number(object.lte) : 0,
      gt: isSet(object.gt) ? Number(object.gt) : 0,
      gte: isSet(object.gte) ? Number(object.gte) : 0,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      not_in: Array.isArray(object?.not_in)
        ? object.not_in.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: Fixed32Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = Math.round(message.const));
    message.lt !== undefined && (obj.lt = Math.round(message.lt));
    message.lte !== undefined && (obj.lte = Math.round(message.lte));
    message.gt !== undefined && (obj.gt = Math.round(message.gt));
    message.gte !== undefined && (obj.gte = Math.round(message.gte));
    if (message.in) {
      obj.in = message.in.map((e) => Math.round(e));
    } else {
      obj.in = [];
    }
    if (message.not_in) {
      obj.not_in = message.not_in.map((e) => Math.round(e));
    } else {
      obj.not_in = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Fixed32Rules>, I>>(
    object: I
  ): Fixed32Rules {
    const message = createBaseFixed32Rules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    return message;
  },
};

function createBaseFixed64Rules(): Fixed64Rules {
  return {
    const: "0",
    lt: "0",
    lte: "0",
    gt: "0",
    gte: "0",
    in: [],
    not_in: [],
  };
}

export const Fixed64Rules = {
  fromJSON(object: any): Fixed64Rules {
    return {
      const: isSet(object.const) ? String(object.const) : "0",
      lt: isSet(object.lt) ? String(object.lt) : "0",
      lte: isSet(object.lte) ? String(object.lte) : "0",
      gt: isSet(object.gt) ? String(object.gt) : "0",
      gte: isSet(object.gte) ? String(object.gte) : "0",
      in: Array.isArray(object?.in) ? object.in.map((e: any) => String(e)) : [],
      not_in: Array.isArray(object?.not_in)
        ? object.not_in.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Fixed64Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.not_in) {
      obj.not_in = message.not_in.map((e) => e);
    } else {
      obj.not_in = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Fixed64Rules>, I>>(
    object: I
  ): Fixed64Rules {
    const message = createBaseFixed64Rules();
    message.const = object.const ?? "0";
    message.lt = object.lt ?? "0";
    message.lte = object.lte ?? "0";
    message.gt = object.gt ?? "0";
    message.gte = object.gte ?? "0";
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    return message;
  },
};

function createBaseSFixed32Rules(): SFixed32Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], not_in: [] };
}

export const SFixed32Rules = {
  fromJSON(object: any): SFixed32Rules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      lt: isSet(object.lt) ? Number(object.lt) : 0,
      lte: isSet(object.lte) ? Number(object.lte) : 0,
      gt: isSet(object.gt) ? Number(object.gt) : 0,
      gte: isSet(object.gte) ? Number(object.gte) : 0,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      not_in: Array.isArray(object?.not_in)
        ? object.not_in.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: SFixed32Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = Math.round(message.const));
    message.lt !== undefined && (obj.lt = Math.round(message.lt));
    message.lte !== undefined && (obj.lte = Math.round(message.lte));
    message.gt !== undefined && (obj.gt = Math.round(message.gt));
    message.gte !== undefined && (obj.gte = Math.round(message.gte));
    if (message.in) {
      obj.in = message.in.map((e) => Math.round(e));
    } else {
      obj.in = [];
    }
    if (message.not_in) {
      obj.not_in = message.not_in.map((e) => Math.round(e));
    } else {
      obj.not_in = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SFixed32Rules>, I>>(
    object: I
  ): SFixed32Rules {
    const message = createBaseSFixed32Rules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    return message;
  },
};

function createBaseSFixed64Rules(): SFixed64Rules {
  return {
    const: "0",
    lt: "0",
    lte: "0",
    gt: "0",
    gte: "0",
    in: [],
    not_in: [],
  };
}

export const SFixed64Rules = {
  fromJSON(object: any): SFixed64Rules {
    return {
      const: isSet(object.const) ? String(object.const) : "0",
      lt: isSet(object.lt) ? String(object.lt) : "0",
      lte: isSet(object.lte) ? String(object.lte) : "0",
      gt: isSet(object.gt) ? String(object.gt) : "0",
      gte: isSet(object.gte) ? String(object.gte) : "0",
      in: Array.isArray(object?.in) ? object.in.map((e: any) => String(e)) : [],
      not_in: Array.isArray(object?.not_in)
        ? object.not_in.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: SFixed64Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.not_in) {
      obj.not_in = message.not_in.map((e) => e);
    } else {
      obj.not_in = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SFixed64Rules>, I>>(
    object: I
  ): SFixed64Rules {
    const message = createBaseSFixed64Rules();
    message.const = object.const ?? "0";
    message.lt = object.lt ?? "0";
    message.lte = object.lte ?? "0";
    message.gt = object.gt ?? "0";
    message.gte = object.gte ?? "0";
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    return message;
  },
};

function createBaseBoolRules(): BoolRules {
  return { const: false };
}

export const BoolRules = {
  fromJSON(object: any): BoolRules {
    return {
      const: isSet(object.const) ? Boolean(object.const) : false,
    };
  },

  toJSON(message: BoolRules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BoolRules>, I>>(
    object: I
  ): BoolRules {
    const message = createBaseBoolRules();
    message.const = object.const ?? false;
    return message;
  },
};

function createBaseStringRules(): StringRules {
  return {
    const: "",
    len: "0",
    min_len: "0",
    max_len: "0",
    len_bytes: "0",
    min_bytes: "0",
    max_bytes: "0",
    pattern: "",
    prefix: "",
    suffix: "",
    contains: "",
    in: [],
    not_in: [],
    email: undefined,
    hostname: undefined,
    ip: undefined,
    ipv4: undefined,
    ipv6: undefined,
    uri: undefined,
    uri_ref: undefined,
    address: undefined,
  };
}

export const StringRules = {
  fromJSON(object: any): StringRules {
    return {
      const: isSet(object.const) ? String(object.const) : "",
      len: isSet(object.len) ? String(object.len) : "0",
      min_len: isSet(object.min_len) ? String(object.min_len) : "0",
      max_len: isSet(object.max_len) ? String(object.max_len) : "0",
      len_bytes: isSet(object.len_bytes) ? String(object.len_bytes) : "0",
      min_bytes: isSet(object.min_bytes) ? String(object.min_bytes) : "0",
      max_bytes: isSet(object.max_bytes) ? String(object.max_bytes) : "0",
      pattern: isSet(object.pattern) ? String(object.pattern) : "",
      prefix: isSet(object.prefix) ? String(object.prefix) : "",
      suffix: isSet(object.suffix) ? String(object.suffix) : "",
      contains: isSet(object.contains) ? String(object.contains) : "",
      in: Array.isArray(object?.in) ? object.in.map((e: any) => String(e)) : [],
      not_in: Array.isArray(object?.not_in)
        ? object.not_in.map((e: any) => String(e))
        : [],
      email: isSet(object.email) ? Boolean(object.email) : undefined,
      hostname: isSet(object.hostname) ? Boolean(object.hostname) : undefined,
      ip: isSet(object.ip) ? Boolean(object.ip) : undefined,
      ipv4: isSet(object.ipv4) ? Boolean(object.ipv4) : undefined,
      ipv6: isSet(object.ipv6) ? Boolean(object.ipv6) : undefined,
      uri: isSet(object.uri) ? Boolean(object.uri) : undefined,
      uri_ref: isSet(object.uri_ref) ? Boolean(object.uri_ref) : undefined,
      address: isSet(object.address) ? Boolean(object.address) : undefined,
    };
  },

  toJSON(message: StringRules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.len !== undefined && (obj.len = message.len);
    message.min_len !== undefined && (obj.min_len = message.min_len);
    message.max_len !== undefined && (obj.max_len = message.max_len);
    message.len_bytes !== undefined && (obj.len_bytes = message.len_bytes);
    message.min_bytes !== undefined && (obj.min_bytes = message.min_bytes);
    message.max_bytes !== undefined && (obj.max_bytes = message.max_bytes);
    message.pattern !== undefined && (obj.pattern = message.pattern);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.suffix !== undefined && (obj.suffix = message.suffix);
    message.contains !== undefined && (obj.contains = message.contains);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.not_in) {
      obj.not_in = message.not_in.map((e) => e);
    } else {
      obj.not_in = [];
    }
    message.email !== undefined && (obj.email = message.email);
    message.hostname !== undefined && (obj.hostname = message.hostname);
    message.ip !== undefined && (obj.ip = message.ip);
    message.ipv4 !== undefined && (obj.ipv4 = message.ipv4);
    message.ipv6 !== undefined && (obj.ipv6 = message.ipv6);
    message.uri !== undefined && (obj.uri = message.uri);
    message.uri_ref !== undefined && (obj.uri_ref = message.uri_ref);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StringRules>, I>>(
    object: I
  ): StringRules {
    const message = createBaseStringRules();
    message.const = object.const ?? "";
    message.len = object.len ?? "0";
    message.min_len = object.min_len ?? "0";
    message.max_len = object.max_len ?? "0";
    message.len_bytes = object.len_bytes ?? "0";
    message.min_bytes = object.min_bytes ?? "0";
    message.max_bytes = object.max_bytes ?? "0";
    message.pattern = object.pattern ?? "";
    message.prefix = object.prefix ?? "";
    message.suffix = object.suffix ?? "";
    message.contains = object.contains ?? "";
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    message.email = object.email ?? undefined;
    message.hostname = object.hostname ?? undefined;
    message.ip = object.ip ?? undefined;
    message.ipv4 = object.ipv4 ?? undefined;
    message.ipv6 = object.ipv6 ?? undefined;
    message.uri = object.uri ?? undefined;
    message.uri_ref = object.uri_ref ?? undefined;
    message.address = object.address ?? undefined;
    return message;
  },
};

function createBaseBytesRules(): BytesRules {
  return {
    const: new Uint8Array(),
    len: "0",
    min_len: "0",
    max_len: "0",
    pattern: "",
    prefix: new Uint8Array(),
    suffix: new Uint8Array(),
    contains: new Uint8Array(),
    in: [],
    not_in: [],
    ip: undefined,
    ipv4: undefined,
    ipv6: undefined,
  };
}

export const BytesRules = {
  fromJSON(object: any): BytesRules {
    return {
      const: isSet(object.const)
        ? bytesFromBase64(object.const)
        : new Uint8Array(),
      len: isSet(object.len) ? String(object.len) : "0",
      min_len: isSet(object.min_len) ? String(object.min_len) : "0",
      max_len: isSet(object.max_len) ? String(object.max_len) : "0",
      pattern: isSet(object.pattern) ? String(object.pattern) : "",
      prefix: isSet(object.prefix)
        ? bytesFromBase64(object.prefix)
        : new Uint8Array(),
      suffix: isSet(object.suffix)
        ? bytesFromBase64(object.suffix)
        : new Uint8Array(),
      contains: isSet(object.contains)
        ? bytesFromBase64(object.contains)
        : new Uint8Array(),
      in: Array.isArray(object?.in)
        ? object.in.map((e: any) => bytesFromBase64(e))
        : [],
      not_in: Array.isArray(object?.not_in)
        ? object.not_in.map((e: any) => bytesFromBase64(e))
        : [],
      ip: isSet(object.ip) ? Boolean(object.ip) : undefined,
      ipv4: isSet(object.ipv4) ? Boolean(object.ipv4) : undefined,
      ipv6: isSet(object.ipv6) ? Boolean(object.ipv6) : undefined,
    };
  },

  toJSON(message: BytesRules): unknown {
    const obj: any = {};
    message.const !== undefined &&
      (obj.const = base64FromBytes(
        message.const !== undefined ? message.const : new Uint8Array()
      ));
    message.len !== undefined && (obj.len = message.len);
    message.min_len !== undefined && (obj.min_len = message.min_len);
    message.max_len !== undefined && (obj.max_len = message.max_len);
    message.pattern !== undefined && (obj.pattern = message.pattern);
    message.prefix !== undefined &&
      (obj.prefix = base64FromBytes(
        message.prefix !== undefined ? message.prefix : new Uint8Array()
      ));
    message.suffix !== undefined &&
      (obj.suffix = base64FromBytes(
        message.suffix !== undefined ? message.suffix : new Uint8Array()
      ));
    message.contains !== undefined &&
      (obj.contains = base64FromBytes(
        message.contains !== undefined ? message.contains : new Uint8Array()
      ));
    if (message.in) {
      obj.in = message.in.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.in = [];
    }
    if (message.not_in) {
      obj.not_in = message.not_in.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.not_in = [];
    }
    message.ip !== undefined && (obj.ip = message.ip);
    message.ipv4 !== undefined && (obj.ipv4 = message.ipv4);
    message.ipv6 !== undefined && (obj.ipv6 = message.ipv6);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BytesRules>, I>>(
    object: I
  ): BytesRules {
    const message = createBaseBytesRules();
    message.const = object.const ?? new Uint8Array();
    message.len = object.len ?? "0";
    message.min_len = object.min_len ?? "0";
    message.max_len = object.max_len ?? "0";
    message.pattern = object.pattern ?? "";
    message.prefix = object.prefix ?? new Uint8Array();
    message.suffix = object.suffix ?? new Uint8Array();
    message.contains = object.contains ?? new Uint8Array();
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    message.ip = object.ip ?? undefined;
    message.ipv4 = object.ipv4 ?? undefined;
    message.ipv6 = object.ipv6 ?? undefined;
    return message;
  },
};

function createBaseEnumRules(): EnumRules {
  return { const: 0, defined_only: false, in: [], not_in: [] };
}

export const EnumRules = {
  fromJSON(object: any): EnumRules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      defined_only: isSet(object.defined_only)
        ? Boolean(object.defined_only)
        : false,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      not_in: Array.isArray(object?.not_in)
        ? object.not_in.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: EnumRules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = Math.round(message.const));
    message.defined_only !== undefined &&
      (obj.defined_only = message.defined_only);
    if (message.in) {
      obj.in = message.in.map((e) => Math.round(e));
    } else {
      obj.in = [];
    }
    if (message.not_in) {
      obj.not_in = message.not_in.map((e) => Math.round(e));
    } else {
      obj.not_in = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EnumRules>, I>>(
    object: I
  ): EnumRules {
    const message = createBaseEnumRules();
    message.const = object.const ?? 0;
    message.defined_only = object.defined_only ?? false;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    return message;
  },
};

function createBaseMessageRules(): MessageRules {
  return { skip: false, required: false };
}

export const MessageRules = {
  fromJSON(object: any): MessageRules {
    return {
      skip: isSet(object.skip) ? Boolean(object.skip) : false,
      required: isSet(object.required) ? Boolean(object.required) : false,
    };
  },

  toJSON(message: MessageRules): unknown {
    const obj: any = {};
    message.skip !== undefined && (obj.skip = message.skip);
    message.required !== undefined && (obj.required = message.required);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MessageRules>, I>>(
    object: I
  ): MessageRules {
    const message = createBaseMessageRules();
    message.skip = object.skip ?? false;
    message.required = object.required ?? false;
    return message;
  },
};

function createBaseRepeatedRules(): RepeatedRules {
  return { min_items: "0", max_items: "0", unique: false, items: undefined };
}

export const RepeatedRules = {
  fromJSON(object: any): RepeatedRules {
    return {
      min_items: isSet(object.min_items) ? String(object.min_items) : "0",
      max_items: isSet(object.max_items) ? String(object.max_items) : "0",
      unique: isSet(object.unique) ? Boolean(object.unique) : false,
      items: isSet(object.items)
        ? FieldRules.fromJSON(object.items)
        : undefined,
    };
  },

  toJSON(message: RepeatedRules): unknown {
    const obj: any = {};
    message.min_items !== undefined && (obj.min_items = message.min_items);
    message.max_items !== undefined && (obj.max_items = message.max_items);
    message.unique !== undefined && (obj.unique = message.unique);
    message.items !== undefined &&
      (obj.items = message.items
        ? FieldRules.toJSON(message.items)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RepeatedRules>, I>>(
    object: I
  ): RepeatedRules {
    const message = createBaseRepeatedRules();
    message.min_items = object.min_items ?? "0";
    message.max_items = object.max_items ?? "0";
    message.unique = object.unique ?? false;
    message.items =
      object.items !== undefined && object.items !== null
        ? FieldRules.fromPartial(object.items)
        : undefined;
    return message;
  },
};

function createBaseMapRules(): MapRules {
  return {
    min_pairs: "0",
    max_pairs: "0",
    no_sparse: false,
    keys: undefined,
    values: undefined,
  };
}

export const MapRules = {
  fromJSON(object: any): MapRules {
    return {
      min_pairs: isSet(object.min_pairs) ? String(object.min_pairs) : "0",
      max_pairs: isSet(object.max_pairs) ? String(object.max_pairs) : "0",
      no_sparse: isSet(object.no_sparse) ? Boolean(object.no_sparse) : false,
      keys: isSet(object.keys) ? FieldRules.fromJSON(object.keys) : undefined,
      values: isSet(object.values)
        ? FieldRules.fromJSON(object.values)
        : undefined,
    };
  },

  toJSON(message: MapRules): unknown {
    const obj: any = {};
    message.min_pairs !== undefined && (obj.min_pairs = message.min_pairs);
    message.max_pairs !== undefined && (obj.max_pairs = message.max_pairs);
    message.no_sparse !== undefined && (obj.no_sparse = message.no_sparse);
    message.keys !== undefined &&
      (obj.keys = message.keys ? FieldRules.toJSON(message.keys) : undefined);
    message.values !== undefined &&
      (obj.values = message.values
        ? FieldRules.toJSON(message.values)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MapRules>, I>>(object: I): MapRules {
    const message = createBaseMapRules();
    message.min_pairs = object.min_pairs ?? "0";
    message.max_pairs = object.max_pairs ?? "0";
    message.no_sparse = object.no_sparse ?? false;
    message.keys =
      object.keys !== undefined && object.keys !== null
        ? FieldRules.fromPartial(object.keys)
        : undefined;
    message.values =
      object.values !== undefined && object.values !== null
        ? FieldRules.fromPartial(object.values)
        : undefined;
    return message;
  },
};

function createBaseAnyRules(): AnyRules {
  return { required: false, in: [], not_in: [] };
}

export const AnyRules = {
  fromJSON(object: any): AnyRules {
    return {
      required: isSet(object.required) ? Boolean(object.required) : false,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => String(e)) : [],
      not_in: Array.isArray(object?.not_in)
        ? object.not_in.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: AnyRules): unknown {
    const obj: any = {};
    message.required !== undefined && (obj.required = message.required);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.not_in) {
      obj.not_in = message.not_in.map((e) => e);
    } else {
      obj.not_in = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AnyRules>, I>>(object: I): AnyRules {
    const message = createBaseAnyRules();
    message.required = object.required ?? false;
    message.in = object.in?.map((e) => e) || [];
    message.not_in = object.not_in?.map((e) => e) || [];
    return message;
  },
};

function createBaseDurationRules(): DurationRules {
  return {
    required: false,
    const: undefined,
    lt: undefined,
    lte: undefined,
    gt: undefined,
    gte: undefined,
    in: [],
    not_in: [],
  };
}

export const DurationRules = {
  fromJSON(object: any): DurationRules {
    return {
      required: isSet(object.required) ? Boolean(object.required) : false,
      const: isSet(object.const) ? Duration.fromJSON(object.const) : undefined,
      lt: isSet(object.lt) ? Duration.fromJSON(object.lt) : undefined,
      lte: isSet(object.lte) ? Duration.fromJSON(object.lte) : undefined,
      gt: isSet(object.gt) ? Duration.fromJSON(object.gt) : undefined,
      gte: isSet(object.gte) ? Duration.fromJSON(object.gte) : undefined,
      in: Array.isArray(object?.in)
        ? object.in.map((e: any) => Duration.fromJSON(e))
        : [],
      not_in: Array.isArray(object?.not_in)
        ? object.not_in.map((e: any) => Duration.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DurationRules): unknown {
    const obj: any = {};
    message.required !== undefined && (obj.required = message.required);
    message.const !== undefined &&
      (obj.const = message.const ? Duration.toJSON(message.const) : undefined);
    message.lt !== undefined &&
      (obj.lt = message.lt ? Duration.toJSON(message.lt) : undefined);
    message.lte !== undefined &&
      (obj.lte = message.lte ? Duration.toJSON(message.lte) : undefined);
    message.gt !== undefined &&
      (obj.gt = message.gt ? Duration.toJSON(message.gt) : undefined);
    message.gte !== undefined &&
      (obj.gte = message.gte ? Duration.toJSON(message.gte) : undefined);
    if (message.in) {
      obj.in = message.in.map((e) => (e ? Duration.toJSON(e) : undefined));
    } else {
      obj.in = [];
    }
    if (message.not_in) {
      obj.not_in = message.not_in.map((e) =>
        e ? Duration.toJSON(e) : undefined
      );
    } else {
      obj.not_in = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DurationRules>, I>>(
    object: I
  ): DurationRules {
    const message = createBaseDurationRules();
    message.required = object.required ?? false;
    message.const =
      object.const !== undefined && object.const !== null
        ? Duration.fromPartial(object.const)
        : undefined;
    message.lt =
      object.lt !== undefined && object.lt !== null
        ? Duration.fromPartial(object.lt)
        : undefined;
    message.lte =
      object.lte !== undefined && object.lte !== null
        ? Duration.fromPartial(object.lte)
        : undefined;
    message.gt =
      object.gt !== undefined && object.gt !== null
        ? Duration.fromPartial(object.gt)
        : undefined;
    message.gte =
      object.gte !== undefined && object.gte !== null
        ? Duration.fromPartial(object.gte)
        : undefined;
    message.in = object.in?.map((e) => Duration.fromPartial(e)) || [];
    message.not_in = object.not_in?.map((e) => Duration.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTimestampRules(): TimestampRules {
  return {
    required: false,
    const: undefined,
    lt: undefined,
    lte: undefined,
    gt: undefined,
    gte: undefined,
    lt_now: false,
    gt_now: false,
    within: undefined,
  };
}

export const TimestampRules = {
  fromJSON(object: any): TimestampRules {
    return {
      required: isSet(object.required) ? Boolean(object.required) : false,
      const: isSet(object.const) ? fromJsonTimestamp(object.const) : undefined,
      lt: isSet(object.lt) ? fromJsonTimestamp(object.lt) : undefined,
      lte: isSet(object.lte) ? fromJsonTimestamp(object.lte) : undefined,
      gt: isSet(object.gt) ? fromJsonTimestamp(object.gt) : undefined,
      gte: isSet(object.gte) ? fromJsonTimestamp(object.gte) : undefined,
      lt_now: isSet(object.lt_now) ? Boolean(object.lt_now) : false,
      gt_now: isSet(object.gt_now) ? Boolean(object.gt_now) : false,
      within: isSet(object.within)
        ? Duration.fromJSON(object.within)
        : undefined,
    };
  },

  toJSON(message: TimestampRules): unknown {
    const obj: any = {};
    message.required !== undefined && (obj.required = message.required);
    message.const !== undefined && (obj.const = message.const.toISOString());
    message.lt !== undefined && (obj.lt = message.lt.toISOString());
    message.lte !== undefined && (obj.lte = message.lte.toISOString());
    message.gt !== undefined && (obj.gt = message.gt.toISOString());
    message.gte !== undefined && (obj.gte = message.gte.toISOString());
    message.lt_now !== undefined && (obj.lt_now = message.lt_now);
    message.gt_now !== undefined && (obj.gt_now = message.gt_now);
    message.within !== undefined &&
      (obj.within = message.within
        ? Duration.toJSON(message.within)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TimestampRules>, I>>(
    object: I
  ): TimestampRules {
    const message = createBaseTimestampRules();
    message.required = object.required ?? false;
    message.const = object.const ?? undefined;
    message.lt = object.lt ?? undefined;
    message.lte = object.lte ?? undefined;
    message.gt = object.gt ?? undefined;
    message.gte = object.gte ?? undefined;
    message.lt_now = object.lt_now ?? false;
    message.gt_now = object.gt_now ?? false;
    message.within =
      object.within !== undefined && object.within !== null
        ? Duration.fromPartial(object.within)
        : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
}

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

function fromTimestamp(t: Timestamp): Date {
  let millis = Number(t.seconds) * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
