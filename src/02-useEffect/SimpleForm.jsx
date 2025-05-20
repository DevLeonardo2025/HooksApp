import { useState } from 'react'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Leonardo',
        email: 'leonardo@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => { 
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

  return (
     <>
         <h1>Formulario Simple. </h1>
         <hr />
         <input 
            type="text"
            placeholder='Ingresar el usuario'
            className='form-control'
            name='username'
            value={username}
            onChange={onInputChange} 
        />
        <input 
            type="email"
            placeholder='leonardo@gmail.com'
            className='form-control'
            name='email'
            value={email}
            onChange={onInputChange} 
        />
     </>
  )
}
 