<script>
    import Logo from "$components/widgets/Logo.svelte";
    export let data;
</script>
<!-- <div class="w-full flex justify-center sticky top-[120px]">
    <button class="btn btn-primary" on:click={generatePDF}>Print</button>
</div> -->

<!-- <div class="w-full flex justify-center sticky top-[120px]">
    <button class="btn btn-primary" on:click={generatePDF}>Print</button>
</div> -->
<svelte:head>
    <style>
        @media print{
            p {
                font-family:Space Grotesk, Courier, monospace, times, serif;
                font-size: 10px;
            }
        }
        td{
            font-size: 12px;
            font-weight: bold;
            border-collapse:collapse;
            text-align: center;
        }
        td.total{
            font-size: 12px;
            border-collapse:collapse;
            font-weight: bold;
            text-align: center;
        }
        th{
            height: "40";
            font-size: 12px;
            text-align: center;
            font-weight: 600;
            border-collapse:collapse;
        }
        input[type=checkbox]{
            height: 20px;
            width: 20px;
        
        }
        
        div.notice{
            font-size: 10px;
        }
        label > input[type="checkbox"]{
            margin-right: 5px;
        }
        
        .note{
            font-size: 10px;
        }
        .mainPrint{
            width: 203mm !important;
            min-height: 100% !important;
            max-width: 203mm !important;
            background-color: #fff;
        }
        *{
            color: #000;
            background-color: #fff;
        
        }
        input{
            background-color: white;
            border: 1px solid black;
        }
        header,footer{
            display:none;
        }
    </style>
</svelte:head>
{#if data}
<div class="mainPrint  flex flex-col justify-around  bol textPrimary m-auto bg-white" id="bol"> 
   <div class="m-[5mm] h-full bg-white">
    <div alt="first shipper company logo"  class="flex h-[30px] w-full relative mb-2 justify-between">
        <div class="w-1/2 flex  justify-start items-center h-full">
            <Logo/> 
        </div>
        <div class="flex  items-center h-full  w-full text-center">  
            <div class="flex items-center justify-end text-center w-full">
                <h3 class="text-lg font-semibold text-center">BILL OF LADING</h3>
            </div>
        </div>
    </div>
    <div class="flex w-full">
        <div class="flex flex-col w-1/2 gap-1"> 
            <h3>SHIPPER</h3>
            <div class="flex gap-2 border-b-[1px] border-gray-500 w-[300px]"></div>
            <h4 class="font-bold text-lg text-uppercase mb-1">{data?.pickup?.company_name}</h4>
            <h4 class="text-md">{data?.pickup?.address?.address_line_1}</h4>
            <h4 class="text-md">{data?.pickup?.address?.city}, {data?.pickup?.address?.state}, {data?.pickup?.address?.zip_code}</h4>
            <h4 class="text-md">{data?.pickup?.contact?.first_name || ""} {data?.pickup?.contact?.last_name || ""}, Phone: {data?.pickup?.contact?.phone_number|| ""}</h4>
            <h4 class="text-md">Email: {data?.pickup.contact.email_address}</h4>
            

            <h3 class="mt-2">CONSIGNEE</h3>
            <div class="flex gap-2 border-b-[1px] border-gray-500 w-[300px]"></div>
            <h4 class="text-lg text-uppercase mb-1">{data?.delivery.company_name}</h4>
            <h4 class="text-md">{data?.delivery.address.address_line_1}</h4>
            <h4 class="text-md">{data?.delivery.address.city}, {data?.delivery.address.state}, {data?.delivery.address.zip_code}</h4>
            <h4 class="text-md">{data?.delivery?.contact?.first_name || ""} {data?.delivery?.contact?.last_name || ""}, Phone: {data?.delivery?.contact?.phone_number|| ""}</h4>
            <h4 class="text-md">Email: {data?.delivery?.contact.email_address}</h4>
        </div>
        <div class="flex flex-col w-1/2 gap-1">
            <div class="flex w-full h-[90px] justify-between">
                <div class="flex flex-col w-1/2 items-center  justify-center h-full">
                    <img src="https://www.firstshipper.com/images/logo/roadrunner.png" height="80%" width="80%" alt="carrier logo"/>
                </div>
                <div class="flex flex-col w-1/2 items-center  justify-center h-full">
                        <img src={data?.svg_data} alt="po number" style="width:100%; height: 80px;margin:0;"/>
                        <span style="font-size: 12px; margin-top:-16px;">{data?.DispatchResponse.CarrierPRONumber}</span>
                </div>
            </div>
            <div class="flex w-full mt-1">
                <div class="flex flex-col  w-full">
                    <div class="flex gap-2 border-b-[1px] border-gray-500">
                        <div class="flex flex-col w-[55%]">
                            <h3>Carrier</h3>
                            <h4 class="text-md mt-1">{data?.DispatchResponse.CarrierName}</h4>
                        </div>
                        <div class="flex flex-col w-[45%]">
                            <h3>Pickup Date</h3>
                            <h4 class="text-md mt-1">{data?.shipment_details.display_date}</h4>
                        </div>
                    </div>
                    <div class="flex gap-2 border-b-[1px] border-gray-500">
                        <div class="flex flex-col w-[55%]">
                            <h3>Carrier PRO#</h3>
                            <h4 class="text-md mt-1">{data?.DispatchResponse.CarrierPRONumber}</h4>
                        </div>
                        <div class="flex flex-col w-[45%]">
                            <h3>Bill of lading NO.</h3>
                            <h4 class="text-md mt-1">{data?.DispatchResponse.CustomerBOLNumber}</h4>
                        </div>
                    </div>
                    <div class="flex gap-2 border-b-[1px] border-gray-500">
                        <div class="flex flex-col w-[55%]">
                            <h3>PO#</h3>
                            <h4 class="text-md mt-1">{data?.booking_info.carrier_reference}</h4>
                        </div>
                        <div class="flex flex-col w-[45%]">
                            <h3>Reference#</h3>
                            <h4 class="text-md mt-1">{data?.booking_info.carrier_reference}</h4>
                        </div>  
                    </div>
                </div>
            </div>
            <h3 class="border-b-[1px] font-bold border-gray-500 w-full mt-1 text-sm">Fright Charge Terms</h3>
            <div class="flex gap-2  items-center">
                <label for="prepaid" class="label text-sm">
                    <input type="checkbox" class="h-4 w-4 rounded-full p-1" />
                    Prepaid
                </label>
                <label for="third-party" class="label text-sm">
                    <input type="checkbox" checked={true} class="h-4 w-4 rounded-full" />
                    Third Party
                </label>
                <label for="inbound-collect" class="label text-sm">
                    <input type="checkbox" class="h-4 w-4 rounded-full p-1" />
                    Inbound Collect
                </label>
            </div>
        </div>
    </div>
    <div class="flex flex-col border-t-[1px] border-gray-500 mt-1"></div>
    <div class="flex justify-between mt-1 h-[40px] mb-2">
        <div class="flex flex-col w-1/2">
            <h3 class="text-sm">PICKUP REMARKS</h3>
        </div>
        <div class="flex flex-col w-1/2 border-l-[1px] border-gray-500">
            <h3 class="text-sm self-end">DELIVERY REMARKS</h3>
        </div>
        <div class="flex flex-col border-t-[1px] border-gray-500 mt-1"></div>
    </div>
    <div class="flex flex-col min-h-[40px] mb-3">
        <h3 class="text-sm">SPECIAL INSTRUCTIONS</h3>
    </div>
    <div class="mb-2">
        <table class="bol-table">
            <tr class="border-collapse">
                <th colspan="2"   style="vertical-align : middle;text-align:center; width: 10%;">Handeling Unit</th>
                <th colspan="2"   style="vertical-align : middle;text-align:center; width: 10%;">Package</th>
                <th  rowspan="2" style="vertical-align : middle;text-align:center;width: 5%;">HM</th>
                <th  rowspan="2" style="horizontal-align : middle;text-align:center; width: 40%;">Commodities Description</th>
                <th rowspan="2"  style="vertical-align : middle;text-align:center;width: 10%;">Weight</th>
                <th rowspan="2" style="vertical-align : middle;text-align:center;width: 5%;">Freight Class</th>
                <th rowspan="2"  style="vertical-align : middle;text-align:center;width: 5%;">NMFC#</th>
                <th colspan="3" style="vertical-align : middle;text-align:center;width: 10%;">DIMENSION</th>
                <th rowspan="2" style="vertical-align : middle;text-align:center;width: 5%;">Stackable</th>
                
            </tr>
            <tr>
                <th scope="col" >Type</th>
                <th scope="col">QTY</th>
                <th scope="col" >Type</th>
                <th scope="col">QTY</th>
                <th scope="col">L</th>
                <th scope="col">W</th>
                <th scope="col">H</th>
                
            </tr>
            {#each data?.commodities as commodity}
                <tr>
                    <td height="35">Pallets</td>
                    <td>{commodity.quantity}</td>
                    <td></td>
                    <td>{commodity.quantity}</td>
                    <td></td>
                    <td>{commodity.shipment_description}</td>
                    <td>{commodity.weight}</td>
                    <td>{commodity.freight_class}</td>
                    <td></td>
                    <td>{commodity.length}</td>
                    <td>{commodity.width}</td>
                    <td>{commodity.height}</td>
                    <td>{commodity.stackable == undefined ? "NO" : "YES"}</td>
                </tr>
            {/each}
            <tr>
                <td class="total" colspan="2" height="35">TOTAL H/U {data?.shipment_details.total_items}</td>
                <td class="total" colspan="2">TOTAL  PKG {data?.shipment_details.total_items}</td>
                <td class="total" colspan="2">TOTAL  Weight {data?.shipment_details.total_weight}</td>
                <td class="total" colspan="2">TOTAL  Density N/A</td>
                <td class="total" colspan="5">Cube N/A</td>
            </tr>
        </table>
    </div>
    <div class="mb-1">
        <h3 class="text-sm">* Weights includes total number of handeling units stated. Do not multiple weight by number of handeling units</h3>
    </div>
    <div class="my-1 text-lg font-bold">
        <h2>This shipment has preasigned PRO# and barcode  do not apply pro sticker</h2>
    </div>
    <div class="flex flex-col border-t-[1px] border-gray-500 mt-2"></div>
    <div class="flex mt-3 gap-2 justify-between h-[220px] mb-3 aggrement">
        <div class="flex flex-col mt-[-16px] border-r-[1px] border-gray-500 w-[32%] justify-between">
            <h3 class="mt-2 text-md">Shipper Signature / Date</h3>
            <div class='mt-2 flex flex-col notice'>
                <p class="text-xs">
                    This is to certify that the above-named materials are properly classified, described, packaged, marked and labeled, and are in proper condition for transportation according to the applicable regulations of the Department of Transportation
                </p>
            </div>
            <div class="flex flex-col">
                <p class="mt-3 text-xs flex">Signature: <span class="mt-3 ml-1 block border-t-[1px] border-gray-500 w-[150px]"></span></p>
                <p class="mt-4 text-xs flex">Date: <span class="mt-3 ml-1 block border-t-[1px] border-gray-500 w-[150px]"></span></p>
            </div>
        </div>
        <div class="flex flex-col w-[36%]">
            <div class="flex mt-[-16px] border-gray-500 w-full justify-around">
                <div class="flex flex-col w-1/2 ml-2">
                    <h3 class="mt-1 text-sm font-semibold">Trailer Loaded:</h3>
                    <div class="flex flex-col">
                        <div class="flex items-center">
                            <input type="checkbox" class="checkbox" id="trailer_loaded_by_driver"/>
                            <label class="label flex items-center text-sm ml-1" for="trailer_loaded_by_driver">By Driver
                            </label>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" class="checkbox" id="trailer_loaded_by_shipper"/>
                            <label class="label ml-1 text-sm" for="trailer_loaded_by_driver">By Shipper
                            </label>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <label for="hu_counted" class="label text-sm">Pieces Counted
                        </label>  
                        <textarea type="text" id="hu_counted"  class="border-[1px] border-solid border-black bg-white w-[100px] h-[35px]"/>
                    </div>  
                </div>
                <div class="flex flex-col w-1/2">
                    <h3 class="mt-1 text-sm font-semibold">Freight Counted:</h3> 
                    <div class="flex flex-col">
                        <div class="flex items-center">
                            <input type="checkbox" class="checkbox" id="freight_counted_by_driver"/>
                            <label class="label flex items-center text-sm ml-1" for="">By Driver
                            </label>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" class="checkbox" id="freight_counted_by_shipper"/>
                            <label class="label ml-1 text-sm" for="freight_counted_by_shipper">By Shipper
                            </label>
                        </div>
                    </div>
                    <div class='flex flex-col'>
                        <label for="hu_counted" class="label text-xs">HU Counted</label>
                        <textarea type="text" id="hu_counted"  class="border-[1px] border-solid border-black bg-white w-[100px] h-[35px]"/>
                    </div>                      
                </div>
            </div>
            <div class='flex flex-col w-full ml-1'>
                <label for="said_to_contain" class="label text-sm">Said to Contain</label>
                <textarea type="text" id="said_to_contain"  class="border-[1px] border-solid border-black bg-white w-[90%] h-[35px]"/>
            </div>
        </div>
        <div class="flex flex-col mt-[-16px] border-l-[1px] border-gray-500 w-[32%] justify-between pl-2">
            <h3 class="mt-2 text-md">Carrier Signature / Date</h3>
            <div class='mt-2 flex flex-col notice'>
                <p class="text-xs">
                    This is to certify that the above-named materials are properly classified, described, packaged, marked and labeled, and are in proper condition for transportation according to the applicable regulations of the Department of Transportation
                </p>
            </div>
            <div class="flex flex-col">
                <p class="mt-3 text-xs flex">Signature: <span class="mt-3 ml-1 block border-t-[1px] border-gray-500 w-[150px]"></span></p>
                <p class="mt-4 text-xs flex">Date: <span class="mt-3 ml-1 block border-t-[1px] border-gray-500 w-[150px]"></span></p>
            </div>
        </div>
    </div>
    <div class="flex flex-col border-t-[1px] border-gray-500 mt-4 max-w-[100%]"></div>
    <h3 class="mt-3 note text-xs">* NOTE Liability Limitation for loss or damage in this shipment may be applicable. See 49 U.S.C. 14706(c)(1)(A) and (B)</h3>
   </div>
</div>
{:else}
<body>
    <div class="flex items-center justify-center min-h-screen p-5 bg-[#f4f4f4] min-w-screen">
        <div class="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
            <h3 class="text-2xl">Could not find the bill of Lading</h3>
            <div class="flex justify-center">
                <svg class="w-32 h-32" viewBox="0 0 50 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M42.2285 0C40.3812 4.92e-05 38.7061 0.741775 37.4785 1.94141H18.4102C18.3787 1.94141 18.3493 1.94909 18.3184 1.95117C18.1298 1.94236 17.9327 1.91521 17.6641 1.97656C17.5086 2.01156 17.3074 2.10876 17.1797 2.28516C17.052 2.46106 17.0156 2.66417 17.0156 2.85547V3.20898C17.0101 3.25944 17 3.30955 17 3.36133V4.11719L17.0156 4.12695V19.9551C17.0156 20.1414 17.0477 20.3306 17.1484 20.502C17.2492 20.6734 17.4182 20.7996 17.5723 20.8613C17.8803 20.9847 18.1304 20.9551 18.3789 20.9551H45.6523C46.0097 20.9551 46.3585 20.8387 46.6152 20.5977C46.872 20.3565 47.0156 19.9997 47.0156 19.627V11.6309C48.2595 10.3975 49.0312 8.69075 49.0312 6.80469C49.0313 3.05339 45.9798 0 42.2285 0ZM42.2285 1C45.4394 1 48.0313 3.59389 48.0312 6.80469C48.0312 10.0156 45.4394 12.6074 42.2285 12.6074C39.0177 12.6074 36.4238 10.0156 36.4238 6.80469C36.4238 3.59389 39.0176 1.0001 42.2285 1ZM42.2285 1.91992C39.5376 1.91992 37.3457 4.11389 37.3457 6.80469C37.3457 9.49559 39.5377 11.6874 42.2285 11.6875C44.9194 11.6875 47.1113 9.49559 47.1113 6.80469C47.1114 4.11389 44.9194 1.91992 42.2285 1.91992ZM42.2285 2.91992C44.379 2.91992 46.1113 4.65429 46.1113 6.80469C46.1113 8.95509 44.3789 10.6875 42.2285 10.6875C40.0781 10.6874 38.3457 8.95509 38.3457 6.80469C38.3457 4.65429 40.0781 2.91992 42.2285 2.91992ZM18.3496 2.95312C18.3775 2.9531 18.3771 2.95312 18.4102 2.95312H36.625C35.8693 4.04923 35.4238 5.37598 35.4238 6.80469C35.4238 8.17802 35.8362 9.45503 36.5391 10.5254L32.2715 13.6211L32.2539 13.6387C32.1417 13.7387 32.0985 13.7439 32.0605 13.7441C32.0226 13.7443 31.9342 13.7282 31.7715 13.6094L18.043 3.61328L18.0156 3.5957V3.27734C18.0495 3.10235 18.1792 2.97857 18.3496 2.95312ZM44.6426 4.63672C44.513 4.63827 44.389 4.69009 44.2969 4.78125L41.1934 7.77148L40.1602 6.77539C40.1131 6.72883 40.0574 6.69206 39.996 6.66721C39.9347 6.64236 39.8691 6.62993 39.8029 6.63064C39.7368 6.63134 39.6714 6.64517 39.6106 6.67132C39.5498 6.69747 39.4949 6.73542 39.4489 6.78298C39.4028 6.83053 39.3667 6.88674 39.3426 6.94835C39.3185 7.00996 39.3068 7.07575 39.3083 7.1419C39.3098 7.20805 39.3244 7.27324 39.3513 7.33371C39.3782 7.39417 39.4167 7.4487 39.4648 7.49414L40.8457 8.82617C40.9389 8.91579 41.0631 8.96586 41.1924 8.96586C41.3217 8.96586 41.4459 8.91579 41.5391 8.82617L44.9902 5.5C45.0632 5.43099 45.1137 5.34161 45.1351 5.2435C45.1565 5.14539 45.1479 5.04311 45.1104 4.94995C45.0729 4.8568 45.0082 4.7771 44.9248 4.72124C44.8413 4.66537 44.743 4.63592 44.6426 4.63672V4.63672ZM18.0156 4.83203L31.1836 14.418C31.4501 14.6121 31.7434 14.7459 32.0664 14.7441C32.3894 14.7441 32.6876 14.5913 32.918 14.3867L37.1523 11.3164C38.3998 12.7173 40.2098 13.6074 42.2285 13.6074C43.6296 13.6074 44.9323 13.18 46.0156 12.4512V19.627C46.0156 19.7646 45.9788 19.8212 45.9297 19.8672C45.8806 19.9132 45.7986 19.9551 45.6523 19.9551H18.3789C18.1652 19.9551 18.0614 19.9415 18.0156 19.9375V4.83203Z"
                        fill="url(#paint0_linear)" />
                    <rect y="5" width="15" height="2" rx="1" fill="#3BB54A" />
                    <rect y="11" width="15" height="2" rx="1" fill="#3BB54A" />
                    <rect y="8" width="6" height="2" rx="1" fill="#3BB54A" />
                    <rect y="15" width="6" height="2" rx="1" fill="#3BB54A" />
                    <rect x="8" y="8" width="6" height="2" rx="1" fill="#3BB54A" />
                    <rect x="8" y="15" width="6" height="2" rx="1" fill="#3BB54A" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="16.9996" y1="10.4791" x2="47.0156" y2="10.4791"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#009217" />
                            <stop offset="1" stop-color="#00FF29" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <p></p>
            <div class="mt-4">
                <p class="mt-4 text-sm">
                    <a href="/admin" class="btn btn-primary">Go To DashBoard</a>
                </p>
            </div>
        </div>
    </div>

</body>
{/if} 
<style>
    @media print{
        p {
            font-family:Space Grotesk, Courier, monospace, times, serif;
            font-size: 10px;
        }
    }
    td{
        font-size: 12px;
        font-weight: bold;
        border-collapse:collapse;
        text-align: center;
    }
    td.total{
        font-size: 12px;
        border-collapse:collapse;
        font-weight: bold;
        text-align: center;
    }
    th{
        height: "40";
        font-size: 12px;
        text-align: center;
        font-weight: 600;
        border-collapse:collapse;
    }
    input[type=checkbox]{
        height: 20px;
        width: 20px;
    
    }
    
    div.notice{
        font-size: 10px;
    }
    label > input[type="checkbox"]{
        margin-right: 5px;
    }
    
    .note{
        font-size: 10px;
    }
    .mainPrint{
        width: 203mm !important;
        height: 269mm !important;
        max-width: 203mm !important;
        max-height: 269mm !important;
    }
    *{
        color: #000;
        background-color: #fff;
    
    }
    input{
        background-color: white;
        border: 1px solid black;
    }
</style>