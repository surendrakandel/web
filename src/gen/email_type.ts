/* eslint-disable */
export const protobufPackage = "v1";

export enum email_template {
  INVITATION = 0,
  WELCOME = 1,
  FORGOTPASSWORD = 2,
  RESETPASSWORD = 3,
  QUOTEEMAIL = 4,
  BOOKINGEMAIL = 5,
  BIDEMAIL = 6,
  BOLEMAIL = 7,
  MARKETING = 8,
  TRACKING = 9,
  PICKUP = 10,
  SHIPMENTUPDATE = 11,
  INVOICE = 12,
  ACTIONREQUIRED = 13,
  UNRECOGNIZED = -1,
}

export function email_templateFromJSON(object: any): email_template {
  switch (object) {
    case 0:
    case "INVITATION":
      return email_template.INVITATION;
    case 1:
    case "WELCOME":
      return email_template.WELCOME;
    case 2:
    case "FORGOTPASSWORD":
      return email_template.FORGOTPASSWORD;
    case 3:
    case "RESETPASSWORD":
      return email_template.RESETPASSWORD;
    case 4:
    case "QUOTEEMAIL":
      return email_template.QUOTEEMAIL;
    case 5:
    case "BOOKINGEMAIL":
      return email_template.BOOKINGEMAIL;
    case 6:
    case "BIDEMAIL":
      return email_template.BIDEMAIL;
    case 7:
    case "BOLEMAIL":
      return email_template.BOLEMAIL;
    case 8:
    case "MARKETING":
      return email_template.MARKETING;
    case 9:
    case "TRACKING":
      return email_template.TRACKING;
    case 10:
    case "PICKUP":
      return email_template.PICKUP;
    case 11:
    case "SHIPMENTUPDATE":
      return email_template.SHIPMENTUPDATE;
    case 12:
    case "INVOICE":
      return email_template.INVOICE;
    case 13:
    case "ACTIONREQUIRED":
      return email_template.ACTIONREQUIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return email_template.UNRECOGNIZED;
  }
}

export function email_templateToJSON(object: email_template): string {
  switch (object) {
    case email_template.INVITATION:
      return "INVITATION";
    case email_template.WELCOME:
      return "WELCOME";
    case email_template.FORGOTPASSWORD:
      return "FORGOTPASSWORD";
    case email_template.RESETPASSWORD:
      return "RESETPASSWORD";
    case email_template.QUOTEEMAIL:
      return "QUOTEEMAIL";
    case email_template.BOOKINGEMAIL:
      return "BOOKINGEMAIL";
    case email_template.BIDEMAIL:
      return "BIDEMAIL";
    case email_template.BOLEMAIL:
      return "BOLEMAIL";
    case email_template.MARKETING:
      return "MARKETING";
    case email_template.TRACKING:
      return "TRACKING";
    case email_template.PICKUP:
      return "PICKUP";
    case email_template.SHIPMENTUPDATE:
      return "SHIPMENTUPDATE";
    case email_template.INVOICE:
      return "INVOICE";
    case email_template.ACTIONREQUIRED:
      return "ACTIONREQUIRED";
    default:
      return "UNKNOWN";
  }
}
