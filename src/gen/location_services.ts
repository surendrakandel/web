/* eslint-disable */
export const protobufPackage = "v1";

export enum pickup_location_services {
  /** PICKUP_LOCATION_NONE - @gotags: dynamodbav:"pickup_location_none,omitempty" */
  PICKUP_LOCATION_NONE = 0,
  /** PICKUP_LOCATION_WITH_DOCK - @gotags: dynamodbav:"pickup_location_with_dock,omitempty" */
  PICKUP_LOCATION_WITH_DOCK = 1,
  /** LIFTGATE_PICKUP - @gotags: dynamodbav:"liftgate_pickup,omitempty" */
  LIFTGATE_PICKUP = 2,
  /** PICKUP_APPOINTMENT - @gotags: dynamodbav:"pickup_appointment,omitempty" */
  PICKUP_APPOINTMENT = 3,
  /** INSIDE_PICKUP - @gotags: dynamodbav:"inside_pickup,omitempty" */
  INSIDE_PICKUP = 4,
  /** PICKUP_NOTIFICATION - @gotags: dynamodbav:"pickup_notification,omitempty" */
  PICKUP_NOTIFICATION = 5,
  /** SHIPPER_DELIVERY_NOTIFICATION - @gotags: dynamodbav:"shipper_delivery_notification,omitempty" */
  SHIPPER_DELIVERY_NOTIFICATION = 6,
  UNRECOGNIZED = -1,
}

export function pickup_location_servicesFromJSON(
  object: any
): pickup_location_services {
  switch (object) {
    case 0:
    case "PICKUP_LOCATION_NONE":
      return pickup_location_services.PICKUP_LOCATION_NONE;
    case 1:
    case "PICKUP_LOCATION_WITH_DOCK":
      return pickup_location_services.PICKUP_LOCATION_WITH_DOCK;
    case 2:
    case "LIFTGATE_PICKUP":
      return pickup_location_services.LIFTGATE_PICKUP;
    case 3:
    case "PICKUP_APPOINTMENT":
      return pickup_location_services.PICKUP_APPOINTMENT;
    case 4:
    case "INSIDE_PICKUP":
      return pickup_location_services.INSIDE_PICKUP;
    case 5:
    case "PICKUP_NOTIFICATION":
      return pickup_location_services.PICKUP_NOTIFICATION;
    case 6:
    case "SHIPPER_DELIVERY_NOTIFICATION":
      return pickup_location_services.SHIPPER_DELIVERY_NOTIFICATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return pickup_location_services.UNRECOGNIZED;
  }
}

export function pickup_location_servicesToJSON(
  object: pickup_location_services
): string {
  switch (object) {
    case pickup_location_services.PICKUP_LOCATION_NONE:
      return "PICKUP_LOCATION_NONE";
    case pickup_location_services.PICKUP_LOCATION_WITH_DOCK:
      return "PICKUP_LOCATION_WITH_DOCK";
    case pickup_location_services.LIFTGATE_PICKUP:
      return "LIFTGATE_PICKUP";
    case pickup_location_services.PICKUP_APPOINTMENT:
      return "PICKUP_APPOINTMENT";
    case pickup_location_services.INSIDE_PICKUP:
      return "INSIDE_PICKUP";
    case pickup_location_services.PICKUP_NOTIFICATION:
      return "PICKUP_NOTIFICATION";
    case pickup_location_services.SHIPPER_DELIVERY_NOTIFICATION:
      return "SHIPPER_DELIVERY_NOTIFICATION";
    default:
      return "UNKNOWN";
  }
}

export enum delivery_location_services {
  /** DELIVERY_LOCATION_NONE - @gotags: dynamodbav:"delivery_location_none,omitempty" */
  DELIVERY_LOCATION_NONE = 0,
  /** DELIVERY_LOCATION_WITH_DOCK - @gotags: dynamodbav:"delivery_location_with_dock,omitempty" */
  DELIVERY_LOCATION_WITH_DOCK = 1,
  /** LIFTGATE_DELIVERY - @gotags: dynamodbav:"liftgate_delivery,omitempty" */
  LIFTGATE_DELIVERY = 2,
  /** DELIVERY_APPOINTMENT - @gotags: dynamodbav:"delivery_appointment,omitempty" */
  DELIVERY_APPOINTMENT = 3,
  /** INSIDE_DELIVERY - @gotags: dynamodbav:"inside_delivery,omitempty" */
  INSIDE_DELIVERY = 4,
  /** RECEIVER_PICKUP_NOTIFICATION - @gotags: dynamodbav:"receiver_pickup_notification,omitempty" */
  RECEIVER_PICKUP_NOTIFICATION = 5,
  /** DELIVERY_NOTIFICATION - @gotags: dynamodbav:"delivery_notification,omitempty" */
  DELIVERY_NOTIFICATION = 6,
  UNRECOGNIZED = -1,
}

export function delivery_location_servicesFromJSON(
  object: any
): delivery_location_services {
  switch (object) {
    case 0:
    case "DELIVERY_LOCATION_NONE":
      return delivery_location_services.DELIVERY_LOCATION_NONE;
    case 1:
    case "DELIVERY_LOCATION_WITH_DOCK":
      return delivery_location_services.DELIVERY_LOCATION_WITH_DOCK;
    case 2:
    case "LIFTGATE_DELIVERY":
      return delivery_location_services.LIFTGATE_DELIVERY;
    case 3:
    case "DELIVERY_APPOINTMENT":
      return delivery_location_services.DELIVERY_APPOINTMENT;
    case 4:
    case "INSIDE_DELIVERY":
      return delivery_location_services.INSIDE_DELIVERY;
    case 5:
    case "RECEIVER_PICKUP_NOTIFICATION":
      return delivery_location_services.RECEIVER_PICKUP_NOTIFICATION;
    case 6:
    case "DELIVERY_NOTIFICATION":
      return delivery_location_services.DELIVERY_NOTIFICATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return delivery_location_services.UNRECOGNIZED;
  }
}

export function delivery_location_servicesToJSON(
  object: delivery_location_services
): string {
  switch (object) {
    case delivery_location_services.DELIVERY_LOCATION_NONE:
      return "DELIVERY_LOCATION_NONE";
    case delivery_location_services.DELIVERY_LOCATION_WITH_DOCK:
      return "DELIVERY_LOCATION_WITH_DOCK";
    case delivery_location_services.LIFTGATE_DELIVERY:
      return "LIFTGATE_DELIVERY";
    case delivery_location_services.DELIVERY_APPOINTMENT:
      return "DELIVERY_APPOINTMENT";
    case delivery_location_services.INSIDE_DELIVERY:
      return "INSIDE_DELIVERY";
    case delivery_location_services.RECEIVER_PICKUP_NOTIFICATION:
      return "RECEIVER_PICKUP_NOTIFICATION";
    case delivery_location_services.DELIVERY_NOTIFICATION:
      return "DELIVERY_NOTIFICATION";
    default:
      return "UNKNOWN";
  }
}
