
export  const clock1Reducer = (state,action)=>{
  console.log(action.payload);
  switch (action.type){
    case 'addValue':
      return {...state,value:state.value+action.payload.count}
    case 'updateName':
      // console.log(action.)
      return {}
    default:
        throw new Error();

  }

}
