import { useState } from 'react'

export const CounterApp = () => {

  const [states, setState] = useState({
     counter1: 10,
     counter2: 20,
     counter3: 30,
  });


  const addState = () => { 
      
      setState((estadoInicial) => ({
        ...estadoInicial,
        counter1: estadoInicial.counter1 + 1,


      }))
  }

  return (
    <>
       <h1>Counter </h1>
       <hr />
       <h2>Counter1: {states.counter1}</h2>
       <h2>Counter2: {states.counter2}</h2>
       <h2>Counter3: {states.counter3}</h2>

       <button className='btn' onClick={addState}>
          + 1
       </button>
    </>
  )
}
