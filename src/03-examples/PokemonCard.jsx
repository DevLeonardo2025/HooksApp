import React, { useLayoutEffect, useRef } from 'react'

export const PokemonCard = ({ id, name, sprites = [] }) => {

  const h2ref = useRef();

  useLayoutEffect(() => {
    
  }, [])

  return (
    <section style={{ height: 200}}>
      <h2 ref={h2ref} className='text-capitalize'>#{id} - {name}</h2>
      <img src={sprites} alt={name} className=''/>
    </section>
  )
}
