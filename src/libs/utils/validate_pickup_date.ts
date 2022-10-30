import hd  from "date-holidays";

export function validatePickupDate(pickup_date: Date):{pickup_date: Date, valid:boolean}{
    let hds = new hd('US', 'la')
    try {
        // current date at current timezone
        let currentDate = new Date()
        let isHoliday = hds.isHoliday(pickup_date)
        if (new Date().getDate() > pickup_date.getDate()) {
            return {pickup_date: null, valid: false}
        }
        if(pickup_date.getDate() == currentDate.getDate() && pickup_date.getHours() < 15 && pickup_date.getHours() > 9 && pickup_date.getDay() != 6 && pickup_date.getDay() != 0 && isHoliday == false){
            pickup_date.setDate(pickup_date.getDate())
            pickup_date.setHours(10,0,0)
            pickup_date = new Date(pickup_date)
            pickup_date.setTime(10)
            return {pickup_date: pickup_date,valid:true}
        }else if(pickup_date.getDay() != 6 && pickup_date.getDay() != 0 && isHoliday == false && pickup_date.toDateString() != "Invalid Date"){ 
            pickup_date = new Date(pickup_date.setHours(10,0,0))
            return {pickup_date: pickup_date,valid:true}
        }
        return {pickup_date: pickup_date, valid: false}
    } catch (error) {
        return {pickup_date: new Date(), valid: false}
    }
}