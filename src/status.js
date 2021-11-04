
// update status 
 export const updateStatus =(status)=>{
 if(status.completed===false){
     status.completed =true;
 }else if(status.completed ===true){
     status.completed =false;
 }
}