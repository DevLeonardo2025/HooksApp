import React from 'react'
import { useCounter } from '../Hooks/useCounter'

export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter();



  return (
    <>
         <h1>Counter with Hook: {counter}</h1>
         <hr />

         <button onClick={() => increment(3)} className="btn btn-primary">+ 1</button>
         <button onClick={reset} className="btn">Reset</button>
         <button onClick={decrement} className="btn btn-danger">- 1</button>
    </>
  )
}
