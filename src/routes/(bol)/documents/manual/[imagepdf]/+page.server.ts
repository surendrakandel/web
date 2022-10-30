import { BACKEND_URL } from '$src/api/config';
import type { LoadEvent } from '@sveltejs/kit';
import { createCanvas } from 'canvas';
import JsBarcode from "jsbarcode";
export async  function load(event:LoadEvent){
    let params  = event["params"]["imagepdf"];
    console.log("params", params)
    let bookingId = params.split("&")[0].split("=")[1]
    let token = params.split("&")[1].split("=")[1]
    const url = BACKEND_URL + "booking/v1/" + bookingId;
    console.log("bookingId",bookingId, "token", token)
    let res = await fetch(url,{
        method: "GET",
        credentials: 'include',
        headers: {
            "authorization": token,
        }})
        if(res.status == 200){
            let data = await res.json()
            console.log("bol data ", data);
            let shipping_data = data.body
            // @ts-ignore
            var canvas =  createCanvas();
            JsBarcode(canvas, shipping_data.DispatchResponse?.CarrierPRONumber,{
                format: "CODE39",
                width:4,
                height:30,
                displayValue: false
            });
            shipping_data["svg_data"] = canvas.toDataURL();
            return shipping_data
        }else{
            return {
                status: 400,
            }
        }
        
}
