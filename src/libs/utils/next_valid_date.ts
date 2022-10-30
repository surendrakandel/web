import { isWeekend } from "date-fns";
import hd  from "date-holidays";
let hds = new hd('US', 'la') 

const nextDate = (date:Date) =>{
    let isValid = true
    let isHoliday = true
    if(date.getHours()>14) {
        isValid = false
    };
    if(isWeekend(date)) {
        isValid = false
    };
    if(hds.isHoliday(date) == false){
        isHoliday = false
    };
    let validDate = (isValid && !isHoliday)? true: false 
    return validDate
}
export function getNextValidDate(){
    let date = new Date()
    var utcDate = new Date(date.toUTCString());
    utcDate.setHours(utcDate.getHours()-8);
    var usDate = new Date(utcDate);
    let isValid = nextDate(utcDate);
    while(!isValid){
        usDate.setDate(usDate.getDate()+1)
        usDate.setHours(usDate.getHours())
        usDate.setMinutes(usDate.getMinutes())
        isValid = nextDate(usDate)
    }
    return usDate
}
export function getValidDate(dateStr:string){
    let date = new Date(dateStr)
    let choosenDate = date.getDate()
    date = new Date(date.toLocaleString('en-US', {timeZone: 'America/Los_Angeles'}));
    date.setDate(choosenDate)
    date.setHours(10,0,0)
    let isValid = nextDate(date);
    if (isValid){
        return  date
    }else{
        while(!isValid){
            date.setDate(date.getDate()+1)
            date.setHours(date.getHours())
            date.setMinutes(date.getMinutes())
            isValid = nextDate(date)
        }
        return date
    }
}
export function validateDate(date:string | Date){
    if(typeof date == "string" && date !== ''){
        date = new Date(date)
        let choosenDate = date.getDate()
        date = new Date(date.toLocaleString('en-US', {timeZone: 'America/Los_Angeles'}));
        date.setDate(choosenDate)
        date.setHours(10,0,0)
    }else if(date == '' || date == undefined || date == null ){
        return false
    }
    let valid = nextDate(date)
    return valid
    
}