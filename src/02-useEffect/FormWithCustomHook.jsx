import { useForm } from "../Hooks/useForm"


export const FormWithCustomHook = () => {

   const { formState, onInputChange } = useForm({
        username: 'Leonardo',
        email: 'leonardo@gmail.com',
        password: '123456'
   });

   const { email, username, password } = formState;
   
  return (
     <>
         <h1>Formulario con CustomHook. </h1>
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
         <input 
            type="password"
            placeholder='Contraseña'
            className='form-control mt-2'
            name='password'
            value={password}
            onChange={onInputChange} 
        />
     </>
  )
}
 