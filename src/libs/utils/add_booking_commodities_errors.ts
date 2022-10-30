
import type { zodCommodityType } from "$types/commodity";
import { makeInfo } from "$types/error_info";

export function addBookingCommoditiesErrors(value: zodCommodityType[]): zodCommodityType[]{
    for (let index = 0; index < value.length; index++){
        value[index].length_error =  makeInfo({ valid: true, id: `commodities_${index}_length_error`, clas: "firstshipper_error", "path": `commodities_${index}_length_error`, error_message: "lenth is not valid"}),
        value[index].width_error =  makeInfo({ valid: true, id: `commodities_${index}_width_error`, clas: "firstshipper_error", "path": `commodities_${index}_width_error`, error_message: "width is not valid" }),
        value[index].height_error =  makeInfo({ valid: true, id: `commodities_${index}_height_error`, clas: "firstshipper_error", "path": `commodities_${index}_height_error`, error_message: "height is not valid" }),
        value[index].weight_error =  makeInfo({ valid: true, id: `commodities_${index}_weight_error`, clas: "firstshipper_error", "path": `commodities_${index}_weight_error`, error_message: "width is not valid" }),
        value[index].quantity_error =  makeInfo({ valid: true, id: `commodities_${index}_quantity_error`, clas: "firstshipper_error", "path": `commodities_${index}_quantity_error`, error_message: "quantity is not valid"}),
        value[index].shipment_description_error =  makeInfo({ valid: true, id: `commodities_${index}_shipment_description_error`, clas: "firstshipper_error", "path": `commodities_${index}_shipment_description_error`, error_message: "shipment description is required" }),
        value[index].freight_class_error =  makeInfo({ valid: true, id: `commodities_${index}_freight_class_error`, clas: "firstshipper_error", "path": `commodities_${index}_freight_class_error`, error_message:"freight class is required" }),
        value[index].weight_uom_error =  makeInfo({ valid: true, id: `commodities_${index}_weight_uom_error`, clas: "firstshipper_error", "path": `commodities_${index}_weight_uom_error`, error_message: "weight unit of measurement is required" }),
        value[index].dimension_uom_error =  makeInfo({ valid: true, id: `commodities_${index}_dimension_uom_error`, clas: "firstshipper_error", "path": `commodities_${index}_dimension_uom_error`, error_message: "dimension unit of measurement is required" }),
        value[index].commodity_service_error =  makeInfo({ valid: true, id: `commodities_${index}_commodity_service_error`, clas: "firstshipper_error", "path": `commodities_${index}_commodity_service_error` , error_message : "please select commodities services required for shipment"})
    } 
    return value
}