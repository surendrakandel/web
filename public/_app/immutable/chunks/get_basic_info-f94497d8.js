import{b as z}from"./client-5fc005f9.js";import{b as w}from"./basic_provider-9b5e3560.js";function F(){var i;(i=z)==null||i.get("/get_basic_info").then(d=>{console.log("responose object for get basic info",d),w.update(t=>{var a,b,c,_,f,y,g,k,o,u,l,m,q,A,h,j,x,B,C,I;return t.business=(b=(a=d==null?void 0:d.data)==null?void 0:a.body)==null?void 0:b.business,t.user=(_=(c=d==null?void 0:d.data)==null?void 0:c.body)==null?void 0:_.user,t.users=(y=(f=d==null?void 0:d.data)==null?void 0:f.body)==null?void 0:y.users,t.clientAddresses=(k=(g=d==null?void 0:d.data)==null?void 0:g.body)==null?void 0:k.clientAddresses,t.business_address=(u=(o=d==null?void 0:d.data)==null?void 0:o.body)==null?void 0:u.business_address,t.default_pickup_location=(m=(l=d==null?void 0:d.data)==null?void 0:l.body)==null?void 0:m.default_pickup_location,t.default_delivery_location=(A=(q=d==null?void 0:d.data)==null?void 0:q.body)==null?void 0:A.default_delivery_location,t.bookings=(j=(h=d==null?void 0:d.data)==null?void 0:h.body)==null?void 0:j.bookings,t.quotes=(B=(x=d==null?void 0:d.data)==null?void 0:x.body)==null?void 0:B.quotes,t.token=(I=(C=d==null?void 0:d.data)==null?void 0:C.body)==null?void 0:I.token,t.valid=!0,t})}).catch(d=>{console.log(d),w.update(t=>(t.business=void 0,t.user=void 0,t.users=[],t.clientAddresses=[],t.business_address=void 0,t.default_pickup_location=void 0,t.default_delivery_location=void 0,t.bookings=[],t.quotes=[],t.token="",t.valid=!1,t))})}export{F as g};