import { useState } from 'react'//función para manejar el estado de los componentes
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './Input'
import InputButton from './InputButton'

/**
 * useState es una función que permite agregar estado a los componentes funcionales en React. 
 * Al llamar a useState, se devuelve un array con dos elementos: el valor actual del estado y una función para actualizar ese valor. 
 * En este caso, estamos utilizando useState para manejar el estado del email en el componente App.
 * 
 * En el código proporcionado, se define un estado llamado email con su función de actualización setEmail.
 *  El estado se inicializa como una cadena vacía, lo que significa que el campo de entrada estará vacío al cargar la aplicación. Luego, en el JSX, se utiliza un campo de entrada controlado donde el valor del campo está vinculado al estado email y se actualiza cada vez que el usuario cambia el valor del campo de entrada.
 */

//export default function App() { 

function App() {

  setEmail('')//inicializamos el estado del email como una cadena vacía
  const [email, setEmail] = useState('')//estado para el email, con su función para actualizarlo. Puedes asignar un valor inicial al estado, en este caso una cadena vacía,F lo que significa que el campo de entrada estará vacío al cargar la aplicación. 


  return (
    <>
      <input type="text" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} />
      { /**
     * value={email} establece el valor del campo de entrada en el estado email. Esto hace que el campo de entrada sea un componente controlado, lo que significa que su valor está controlado por React a través del estado.
     * onChange={(e) => setEmail(e.target.value)} es un manejador de eventos que se ejecuta cada vez que el usuario cambia el valor del campo de entrada.
     *  La función toma el evento (e) como argumento y actualiza el estado email con el nuevo valor ingresado por el usuario utilizando setEmail(e.target.value).
     */

      }
    </>
  )
}



function App1() {


  return (
    <>
      <InputButton />
    </>
  )
}

export default { App, App1 };

