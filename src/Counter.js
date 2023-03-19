 import {Increment ,Decrement} from './redux/action';
 import {useDispatch,useSelector} from 'react-redux';
 

const Counter =()=>{

  const dispatch = useDispatch();

  const selector = useSelector(state=>state.counterReducer.counter);
  

  const design=(
     <>
       <div className="mt-4">
       <button type="button" className="btn btn-primary" onClick={()=>dispatch(Increment())}>Increment</button>
       <h1>{selector}</h1>
       <button type="button" className="btn btn-success" onClick={()=>dispatch(Decrement())}>Decrement</button>
        </div>  
     </>
  )
  return design;
}
export default Counter;