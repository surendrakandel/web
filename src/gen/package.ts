/* eslint-disable */
export const protobufPackage = "v1";

export enum package_type {
  PACKAGE_NONE = 0,
  PALLET = 1,
  BOX = 2,
  BUNDLE = 3,
  CRATE = 4,
  LOOSE = 5,
  PIECES = 6,
  ROLL = 7,
  UNRECOGNIZED = -1,
}

export function package_typeFromJSON(object: any): package_type {
  switch (object) {
    case 0:
    case "PACKAGE_NONE":
      return package_type.PACKAGE_NONE;
    case 1:
    case "PALLET":
      return package_type.PALLET;
    case 2:
    case "BOX":
      return package_type.BOX;
    case 3:
    case "BUNDLE":
      return package_type.BUNDLE;
    case 4:
    case "CRATE":
      return package_type.CRATE;
    case 5:
    case "LOOSE":
      return package_type.LOOSE;
    case 6:
    case "PIECES":
      return package_type.PIECES;
    case 7:
    case "ROLL":
      return package_type.ROLL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return package_type.UNRECOGNIZED;
  }
}

export function package_typeToJSON(object: package_type): string {
  switch (object) {
    case package_type.PACKAGE_NONE:
      return "PACKAGE_NONE";
    case package_type.PALLET:
      return "PALLET";
    case package_type.BOX:
      return "BOX";
    case package_type.BUNDLE:
      return "BUNDLE";
    case package_type.CRATE:
      return "CRATE";
    case package_type.LOOSE:
      return "LOOSE";
    case package_type.PIECES:
      return "PIECES";
    case package_type.ROLL:
      return "ROLL";
    default:
      return "UNKNOWN";
  }
}
