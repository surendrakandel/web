// @ts-nocheck
import { quote_store } from "$src/routes/(admin)/admin/quote/quote_store"

export function changePickupLocationServices(event:any){
    let id = event.target.id 
    if(id != "PICKUP_LOCATION_WITH_DOCK"  && id !="LIFTGATE_PICKUP" ){
      return 
    }
    let checked = event.target.checked 
    let end = false 
    quote_store.update((value)=>{
      try {
        if(id == 'PICKUP_LOCATION_WITH_DOCK'  && !end){
          value.pickup.PICKUP_LOCATION_WITH_DOCK = checked
          value.pickup.LIFTGATE_PICKUP = !checked
          end = true
        }
        if(id == 'LIFTGATE_PICKUP' &&  !end) {
          value.pickup.LIFTGATE_PICKUP = checked 
          value.pickup.PICKUP_LOCATION_WITH_DOCK = !checked
          end = true
        }
      return value
      } catch (error) {
        return value
      }
    })
  }