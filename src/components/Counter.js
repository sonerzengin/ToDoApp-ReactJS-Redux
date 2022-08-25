import React  from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {increase,decrease,increasebyAmount} from "../redux/counter/counterSlice"
import { useState } from 'react'


function Counter() {

    const countValue = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    const [mount,setMount] = useState(0);


  return (
    <div>
        <h1>{countValue}</h1>
        <button onClick={() => dispatch(increase())}>Increase</button>
        <button  onClick={() => dispatch(decrease())}>Decrease</button>

        <br/>
        <input type='number' value={mount} onChange={e => setMount(e.target.value)} />
        <button onClick={() => dispatch(increasebyAmount(mount))}>Increase</button>

    </div>
  )
}

export default Counter
