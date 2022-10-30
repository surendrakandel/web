export function  nextJump (id:string):void{
    let item = document.getElementById(id)
    if(item != undefined || item != null){
      let class_name = item.className
      console.log(class_name)
      item.scrollIntoView({
        behavior: "smooth",
        block: "center"
      })
      item.focus()
    }
    
    
  }