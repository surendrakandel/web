export function editRole(index:number){
    let user_role_dropdown: HTMLSelectElement
    // @ts-ignore
    user_role_dropdown = document.getElementById("userrole_"+index)
    user_role_dropdown.style.opacity = "1"
    user_role_dropdown.disabled = false 
    setTimeout(() => {
        user_role_dropdown.disabled = true
        user_role_dropdown.style.opacity = "0.7"
    }, 10000);
    
}