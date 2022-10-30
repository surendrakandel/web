type pickup_location_services_type = {
    value: string,
    label: string,
    id: string,
}

// shipper_location_with_dock: z.boolean(),
// /** @gotags: dynamodbav:"shipper_liftgate_delivery,omitempty" */
// shipper_liftgate_pickup: z.boolean(),
// /** @gotags: dynamodbav:"shipper_pickup_appointment,omitempty" */
// shipper_pickup_appointment: z.boolean(),
// /** @gotags: dynamodbav:"shipper_inside_pickup,omitempty" */
// shipper_inside_pickup: z.boolean(),
// /** @gotags: dynamodbav:"shipper_pickup_notification,omitempty" */
// shipper_pickup_notification: z.boolean(),
export function getPickupLocationServices():pickup_location_services_type[]{
    return [
        {
            value: "PICKUP_LOCATION_WITH_DOCK",
            id: "PICKUP_LOCATION_WITH_DOCK",
            label: "Pickup Location With Dock"
        },
        {    
            value: "LIFTGATE_PICKUP",
            id: "LIFTGATE_PICKUP",
            label: "Liftgate Pickup"
        },
        {
            value: "PICKUP_APPOINTMENT",
            id: "PICKUP_APPOINTMENT",
            label: "Pickup Appointment"
        },
        {
            value: "INSIDE_PICKUP",
            id: "INSIDE_PICKUP",
            label: "Inside Pickup"
        },
        {
            value: "PICKUP_NOTIFICATION",
            id: "PICKUP_NOTIFICATION",
            label: "Pickup Notification"
        }
    ]
}