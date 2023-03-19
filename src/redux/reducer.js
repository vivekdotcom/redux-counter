const initaialState ={
  counter: 0
}

export const counterReducer =(state=initaialState ,action)=>{
  console.log(state)
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter:state.counter + 1
        };
    case "DECREMENT":
      // return {
      //   ...state,
      //   counter:state.counter - 1
      // }
      if(state.counter <=0){
        return {
            counter:state.counter
        }
      
      }else {
        return {
            counter:state.counter - 1
        }
      }
    default:
      return state;
  }
}

