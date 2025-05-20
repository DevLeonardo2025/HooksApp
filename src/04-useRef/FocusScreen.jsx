import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();
    
    const onClickAdd = () => { 
        inputRef.current.select()
    }


  return (
    <>
         <h1>Focus Scree </h1>
         <hr />

         <input 
            ref={inputRef}
            type="text"
            placeholder='ingresa algo' 
            className='form-control'
        />

        <button
            onClick={onClickAdd} 
            className='btn btn-primary mt-2'
        >
            setFocus 
        </button>
    </>
  )
}
