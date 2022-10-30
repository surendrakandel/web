/* eslint-disable */
export const protobufPackage = "v1";

export enum clients {
  user_client = 0,
  bol_client = 1,
  booking_client = 2,
  quote_client = 3,
  business_client = 4,
  email_client = 5,
  sms_client = 6,
  rapid_client = 7,
  road_runner_client = 8,
  clear_lane_client = 9,
  location_client = 10,
  payment_client = 11,
  report_client = 12,
  tracking_client = 13,
  UNRECOGNIZED = -1,
}

export function clientsFromJSON(object: any): clients {
  switch (object) {
    case 0:
    case "user_client":
      return clients.user_client;
    case 1:
    case "bol_client":
      return clients.bol_client;
    case 2:
    case "booking_client":
      return clients.booking_client;
    case 3:
    case "quote_client":
      return clients.quote_client;
    case 4:
    case "business_client":
      return clients.business_client;
    case 5:
    case "email_client":
      return clients.email_client;
    case 6:
    case "sms_client":
      return clients.sms_client;
    case 7:
    case "rapid_client":
      return clients.rapid_client;
    case 8:
    case "road_runner_client":
      return clients.road_runner_client;
    case 9:
    case "clear_lane_client":
      return clients.clear_lane_client;
    case 10:
    case "location_client":
      return clients.location_client;
    case 11:
    case "payment_client":
      return clients.payment_client;
    case 12:
    case "report_client":
      return clients.report_client;
    case 13:
    case "tracking_client":
      return clients.tracking_client;
    case -1:
    case "UNRECOGNIZED":
    default:
      return clients.UNRECOGNIZED;
  }
}

export function clientsToJSON(object: clients): string {
  switch (object) {
    case clients.user_client:
      return "user_client";
    case clients.bol_client:
      return "bol_client";
    case clients.booking_client:
      return "booking_client";
    case clients.quote_client:
      return "quote_client";
    case clients.business_client:
      return "business_client";
    case clients.email_client:
      return "email_client";
    case clients.sms_client:
      return "sms_client";
    case clients.rapid_client:
      return "rapid_client";
    case clients.road_runner_client:
      return "road_runner_client";
    case clients.clear_lane_client:
      return "clear_lane_client";
    case clients.location_client:
      return "location_client";
    case clients.payment_client:
      return "payment_client";
    case clients.report_client:
      return "report_client";
    case clients.tracking_client:
      return "tracking_client";
    default:
      return "UNKNOWN";
  }
}
