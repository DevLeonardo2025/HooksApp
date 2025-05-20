import React, { memo } from 'react'

export const ShowIncrement = memo(({increment}) => {

    console.log('me volvi a renderizar :(');

  return (
    <button 
        className='btn btn-primary'
        onClick={() => {
            increment();
        }}
    >
        Incrementar.
    </button>
  )
})
