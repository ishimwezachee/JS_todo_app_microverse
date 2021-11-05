export const addNewItem =(arr,value)=>{
    let data = {
        index:arr.length,
        describtion:value,
        completed:false,
      };
      arr.push(data);
}