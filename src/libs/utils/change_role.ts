export function changeStaffRole(event){
    let user_role_dropdown: HTMLSelectElement
    let index = event.target.id.split("_")[1]
    // @ts-ignore
    user_role_dropdown = document.getElementById("userrole_"+index)
    user_role_dropdown.style.opacity = ".7"
    user_role_dropdown.disabled = true 
    
}
