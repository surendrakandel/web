/* eslint-disable */
export const protobufPackage = "v1";

export enum freight_class {
  CLASS_NONE = 0,
  CLASS50 = 1,
  CLASS55 = 2,
  CLASS60 = 3,
  CLASS65 = 4,
  CLASS70 = 5,
  CLASS775 = 6,
  CLASS85 = 7,
  CLASS925 = 8,
  CLASS100 = 9,
  CLASS110 = 10,
  CLASS125 = 11,
  CLASS150 = 12,
  CLASS175 = 13,
  CLASS200 = 14,
  CLASS250 = 15,
  CLASS300 = 16,
  CLASS400 = 17,
  CLASS500 = 18,
  UNRECOGNIZED = -1,
}

export function freight_classFromJSON(object: any): freight_class {
  switch (object) {
    case 0:
    case "CLASS_NONE":
      return freight_class.CLASS_NONE;
    case 1:
    case "CLASS50":
      return freight_class.CLASS50;
    case 2:
    case "CLASS55":
      return freight_class.CLASS55;
    case 3:
    case "CLASS60":
      return freight_class.CLASS60;
    case 4:
    case "CLASS65":
      return freight_class.CLASS65;
    case 5:
    case "CLASS70":
      return freight_class.CLASS70;
    case 6:
    case "CLASS775":
      return freight_class.CLASS775;
    case 7:
    case "CLASS85":
      return freight_class.CLASS85;
    case 8:
    case "CLASS925":
      return freight_class.CLASS925;
    case 9:
    case "CLASS100":
      return freight_class.CLASS100;
    case 10:
    case "CLASS110":
      return freight_class.CLASS110;
    case 11:
    case "CLASS125":
      return freight_class.CLASS125;
    case 12:
    case "CLASS150":
      return freight_class.CLASS150;
    case 13:
    case "CLASS175":
      return freight_class.CLASS175;
    case 14:
    case "CLASS200":
      return freight_class.CLASS200;
    case 15:
    case "CLASS250":
      return freight_class.CLASS250;
    case 16:
    case "CLASS300":
      return freight_class.CLASS300;
    case 17:
    case "CLASS400":
      return freight_class.CLASS400;
    case 18:
    case "CLASS500":
      return freight_class.CLASS500;
    case -1:
    case "UNRECOGNIZED":
    default:
      return freight_class.UNRECOGNIZED;
  }
}

export function freight_classToJSON(object: freight_class): string {
  switch (object) {
    case freight_class.CLASS_NONE:
      return "CLASS_NONE";
    case freight_class.CLASS50:
      return "CLASS50";
    case freight_class.CLASS55:
      return "CLASS55";
    case freight_class.CLASS60:
      return "CLASS60";
    case freight_class.CLASS65:
      return "CLASS65";
    case freight_class.CLASS70:
      return "CLASS70";
    case freight_class.CLASS775:
      return "CLASS775";
    case freight_class.CLASS85:
      return "CLASS85";
    case freight_class.CLASS925:
      return "CLASS925";
    case freight_class.CLASS100:
      return "CLASS100";
    case freight_class.CLASS110:
      return "CLASS110";
    case freight_class.CLASS125:
      return "CLASS125";
    case freight_class.CLASS150:
      return "CLASS150";
    case freight_class.CLASS175:
      return "CLASS175";
    case freight_class.CLASS200:
      return "CLASS200";
    case freight_class.CLASS250:
      return "CLASS250";
    case freight_class.CLASS300:
      return "CLASS300";
    case freight_class.CLASS400:
      return "CLASS400";
    case freight_class.CLASS500:
      return "CLASS500";
    default:
      return "UNKNOWN";
  }
}
