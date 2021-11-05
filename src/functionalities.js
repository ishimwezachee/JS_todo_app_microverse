export const addNewItem =(arr,value,index)=>{
    let data = {
        index:index,
        describtion:value,
        completed:false,
      };
      arr.push(data);
      localStorage.setItem('todos', JSON.stringify(arr));
}

