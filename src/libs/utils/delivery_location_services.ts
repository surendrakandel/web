type delivery_location_services_type = {
    value: string,
    label: string,
    id: string,
}

// /** LOCATION_NONE - @gotags: dynamodbav:"none,omitempty" */
// LOCATION_NONE = 0,
// /** shipper_location_with_dock - @gotags: dynamodbav:"shipper_location_with_dock,omitempty" */
// shipper_location_with_dock = 1,
// /** shipper_liftgate_pickup - @gotags: dynamodbav:"shipper_liftgate_pickup,omitempty" */
// shipper_liftgate_pickup = 2,
// /** shipper_pickup_appointment - @gotags: dynamodbav:"shipper_pickup_appointment,omitempty" */
// shipper_pickup_appointment = 3,
// /** shipper_inside_pickup - @gotags: dynamodbav:"shipper_inside_pickup,omitempty" */
// shipper_inside_pickup = 4,
// /** shipper_pickup_notification - @gotags: dynamodbav:"shipper_pickup_notification,omitempty" */
// shipper_pickup_notification = 5,
// /** shipper_delivery_notification - @gotags: dynamodbav:"shipper_delivery_notification,omitempty" */
// shipper_delivery_notification = 6,
// /** delivery_location_with_dock - @gotags: dynamodbav:"delivery_location_with_dock,omitempty" */
// delivery_location_with_dock = 7,
// /** receiver_liftgate_delivery - @gotags: dynamodbav:"receiver_liftgate_delivery,omitempty" */
// receiver_liftgate_delivery = 8,
// /** receiver_delivery_appointment - @gotags: dynamodbav:"receiver_delivery_appointment,omitempty" */
// receiver_delivery_appointment = 9,
// /** receiver_inside_delivery - @gotags: dynamodbav:"receiver_inside_delivery,omitempty" */
// receiver_inside_delivery = 10,
// /** receiver_pickup_notification - @gotags: dynamodbav:"receiver_pickup_notification,omitempty" */
// receiver_pickup_notification = 11,
// /** receiver_delivery_notification - @gotags: dynamodbav:"receiver_delivery_notification,omitempty" */
// receiver_delivery_notification = 12,
// UNRECOGNIZED = -1,
export function getDeliveryLocationServices():delivery_location_services_type[]{
    return [
        {
            value: "DELIVERY_LOCATION_WITH_DOCK",
            id: "DELIVERY_LOCATION_WITH_DOCK",
            label: "Delivery Location With Dock"
        },
        {    
            value: "LIFTGATE_DELIVERY",
            id: "LIFTGATE_DELIVERY",
            label: "Liftgate Delivery"
        },
        
        {
            value: "DELIVERY_APPOINTMENT",
            id: "DELIVERY_APPOINTMENT",
            label: "Delivery Appointment"
        },
        {
            value: "INSIDE_DELIVERY",
            id: "INSIDE_DELIVERY",
            label: "Inside Delivery"
        },
        {
            value: "DELIVERY_NOTIFICATION",
            id: "DELIVERY_NOTIFICATION",
            label: "Delivery Notification"
        },
       
    ]
}