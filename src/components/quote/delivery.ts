
import { quote_store } from "$src/routes/(admin)/admin/quote/quote_store";


export function changeDeliveryLocationServices(event: any) {
    let id = event.target.id;
    if (
      id != "DELIVERY_LOCATION_WITH_DOCK" &&
      id != "LIFTGATE_DELIVERY"
    ) {
      return;
    }
    let checked = event.target.checked;
    let end = false;
    quote_store.update((value) => {
      try {
        if (id == "DELIVERY_LOCATION_WITH_DOCK" && !end) {
          value.delivery.DELIVERY_LOCATION_WITH_DOCK = checked;
          value.delivery.LIFTGATE_DELIVERY = !checked;
          end = true;
        }
        if (id == "LIFTGATE_DELIVERY" && !end) {
          value.delivery.LIFTGATE_DELIVERY = checked;
          value.delivery.DELIVERY_LOCATION_WITH_DOCK = !checked;
          end = true;
        }
        return value;
      } catch (error) {
        return value;
      }
    });
}