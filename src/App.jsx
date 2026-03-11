import { useState } from 'react'//función para manejar el estado de los componentes
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Input from './Input'
import InputButton from './InputButton'
import Input2 from './Input2'
import Profile from './Profile'
import InputHandler from './InputHandler'
import { useEffect } from 'react'
import { useRef } from 'react'

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


  /*const [email, setEmail] = useState('')//estado para el email, con su función para actualizarlo. Puedes asignar un valor inicial al estado, en este caso una cadena vacía,F lo que significa que el campo de entrada estará vacío al cargar la aplicación. 
  setEmail('')//inicializamos el estado del email como una cadena vacía
  //Puedes inicializarlos tambien como un number o un booleano, dependiendo del tipo de dato que quieras manejar en tu aplicación. Por ejemplo, si quieres manejar un contador, podrías inicializar el estado como un número: const [count, setCount] = useState(0).
  //  Si quieres manejar un estado de activación/desactivación, podrías inicializarlo como un booleano: const [isActive, setIsActive] = useState(false).

  const [username, setUsername] = useState('')//estado para el username, con su función para actualizarlo. Puedes asignar un valor inicial al estado, en este caso una cadena vacía, lo que significa que el campo de entrada estará vacío al cargar la aplicación.
  setUsername('')//inicializamos el estado del username como una cadena vacía

  return (
    <>
      <input type="text" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" name="" id="" value={username} onChange={(e) => setUsername(e.target.value)} />
      { /**
     * value={email} establece el valor del campo de entrada en el estado email. Esto hace que el campo de entrada sea un componente controlado, lo que significa que su valor está controlado por React a través del estado.
     * onChange={(e) => setEmail(e.target.value)} es un manejador de eventos que se ejecuta cada vez que el usuario cambia el valor del campo de entrada.
     *  La función toma el evento (e) como argumento y actualiza el estado email con el nuevo valor ingresado por el usuario utilizando setEmail(e.target.value).
     * 
     * De manera similar, el segundo campo de entrada está vinculado al estado username y se actualiza con setUsername(e.target.value) cada vez que el usuario cambia su valor.
     *

      }
    </>
  )*/


  /*const [email, setEmail] = useState('')//estado para el email, con su función para actualizarlo. Puedes asignar un valor inicial al estado, en este caso una cadena vacía,F lo que significa que el campo de entrada estará vacío al cargar la aplicación.
setEmail('')//inicializamos el estado del email como una cadena vacía
//Puedes inicializarlos tambien como un number o un booleano, dependiendo del tipo de dato que quieras manejar en tu aplicación. Por ejemplo, si quieres manejar un contador, podrías inicializar el estado como un número: const [count, setCount] = useState(0).
//  Si quieres manejar un estado de activación/desactivación, podrías inicializarlo como un booleano: const [isActive, setIsActive] = useState(false).

const [username, setUsername] = useState('')//estado para el username, con su función para actualizarlo. Puedes asignar un valor inicial al estado, en este caso una cadena vacía, lo que significa que el campo de entrada estará vacío al cargar la aplicación.
setUsername('')//inicializamos el estado del username como una cadena vacía 

const [password, setPassword] = useState('')//estado para el password, con su función para actualizarlo. Puedes asignar un valor inicial al estado, en este caso una cadena vacía, lo que significa que el campo de entrada estará vacío al cargar la aplicación.
setPassword('')//inicializamos el estado del password como una cadena vacía
 
const [confirmPassword, setConfirmPassword] = useState('')//estado para el confirmPassword, con su función para actualizarlo. Puedes asignar un valor inicial al estado, en este caso una cadena vacía, lo que significa que el campo de entrada estará vacío al cargar la aplicación.
setConfirmPassword('')//inicializamos el estado del confirmPassword como una cadena vacía 

return (
  <>
    <Profile ayo={username}/>
    <InputHandler email={email} setEmail={setEmail} username={username} setUsername={setUsername} password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} />
  </>
)*/





  /*  const [username, setUsername] = useState('');
    const [number, setNumber] = useState(0);
  
    const handleClick = () => {
      console.log('Username:', username);
      console.log('Number:', number);
    }
  
    const addHandle = () => {
      setNumber((prevNumber) => prevNumber + 1);
    }
  
  
    return (
      <>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Escribe tu nombre"
        />
        <button onClick={handleClick}>Add</button>
        <button onClick={addHandle}>+</button>
      </>
    )*/

 /*
  let number = 0;
  const [numero, setNumero] = useState(0);
  return (
    <div>
      <p>Number: {number}</p>
      <button onClick={() => number++}>+</button>
      { /**
        * En este caso, el número no se actualizará en la interfaz de usuario cada vez que se haga clic en el botón, ya que React no detecta cambios en variables normales como number. 
        * Para que React actualice la interfaz de usuario, es necesario utilizar el estado (useState) para manejar el valor del número y su actualización.
        }
      <p>Número: {numero}</p>
      <button onClick={() => setNumero(numero + 1)}>+</button>
      { /**
        * En este caso, cada vez que se haga clic en el botón, el estado numero se actualizará utilizando la función setNumero, lo que hará que React vuelva a renderizar el componente y muestre el nuevo valor del número en la interfaz de usuario.
        } 
        
    </div>
  )
  */

/*
  const [number,setNumber] = useState(0);

  return <div>
    {number<10 ? <div>Menor que 10 </div>:<div>Mayor que 10 </div>}
    {number > 10 && <div>HOLA MUNDO </div>}{//Si la condición de la izquierda es true se añade lo de la derecha}
}
    <button onClick={() => {setNumber((prev)=> prev+1 )}}></button>

    </div>

    */



/*
    const [user, setUsers] = useState([
      {
        username: "Pepe",
        age: 27,

      },
      {
        id:1,
        username: "Pe",
        age: 27,
        
      },{
        id:2,
        username: "Pep",
        age: 271,
        
      },{
        id:3,
        username: "Pee",
        age: 271,
        
      },{
        id:4,
        username: "Ppe",
        age: 272,
        
      },{
        id:5,
        username: "epe",
        age: 23,
        
      }
    ])
    //Utilización de ids para la mejora de componentes en React--> Rendering 
    

    return (<div>{
      user.map((useri) => {
        return<div key = {useReducer.id} >Heyo {useri.username}</div>;
      })
      }</div>)

*/

/*

const [number, setNumber] = useState(0);

//En este ejemplo, el useEffect se utiliza para realizar una acción cada vez que el valor de number cambia.
//El segundo argumento del useEffect es un array de dependencias, en este caso [number], 
// lo que significa que el efecto se ejecutará cada vez que el valor de number cambie.


useEffect(() => {
  console.log('El número ha cambiado:', number);
}, [number]);//El useEffect se ejecutará cada vez que el valor de number cambie, 
// lo que permite realizar acciones secundarias o efectos colaterales en respuesta a ese cambio.nn 
//Puedes meter vsrios useEffect en un mismo componente, 
// cada uno con diferentes dependencias para manejar diferentes efectos secundarios según las necesidades de tu aplicación.
//Por ejemplo: 
// useEffect(() => {
//   console.log('El número ha cambiado:', number);
// }, [number]);

// useEffect(() => {
//   console.log('El componente se ha montado o actualizado');
// });
// useEffect(() => {
//   console.log('El componente se ha desmontado');
//   return () => {
//     console.log('Limpieza al desmontar el componente');
//   };
// }, []);
//En este caso, el primer useEffect se ejecutará cada vez que el valor de number cambie,
// el segundo useEffect se ejecutará cada vez que el componente se monte o actualice, 
// y el tercer useEffect se ejecutará solo cuando el componente se desmonte, realizando una limpieza si es necesario.


return <div>
  <div>{number}</div>
  <button onClick={() => setNumber((prev) => prev + 1)}>+</button>
</div>

*/

/*
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
useEffect(() => {
  const getUserData = async () => {
    setLoading(true);
    //async se utiliza para definir una función asíncrona, lo que permite el uso de la palabra clave await dentro de esa función.
    //que es una funcion que se ejecuta de manera asíncrona, lo que significa que puede realizar operaciones que pueden tardar un tiempo en completarse,
    //  como solicitudes a una API, sin bloquear la ejecución del resto del código.
    try {
      const response = await fetch('https://randomuser.me/api/');//Realiza una solicitud a la API para obtener datos de un usuario aleatorio
      //await se utiliza para esperar a que la respuesta de la API esté disponible antes de continuar con la ejecución del código.
      //Lo que hace que el código sea más legible y fácil de entender, ya que evita el uso de promesas y callbacks anidados.
      const data = await response.json();
      console.log('Datos del usuario:', data);
      setUser(data.results[0]);
      setLoading(false);

    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
      setLoading(false);  
      setError('Error al obtener los datos del usuario');
    }finally {
      setLoading(false);
    }

    
  }
  getUserData();
}, [])//El useEffect se ejecutará solo una vez, cuando el componente se monte por primera vez.


return (
  <>
  {loading ? <div>Cargando...</div> : user && <div>{user.name.first} {user.name.last}</div>}
  {error && <div>{error}</div>}
    {user && user?.gender}
  </>
) 


*/

//Uso de useRef 
const secondInputRef = useRef(null);

const handleFocusInput = () => {

  secondInputRef.current.focus(); // Establece el foco en el segundo input
  secondInputRef.current.value = 'Hola Mundo'; // Cambia el valor del segundo input a "Hola Mundo"
} 

return (
  <div>
    <button onClick={handleFocusInput}>Click me B*tch</button>
    <input type="text" name='' id='' className=''/>
    <input type="text" name='' id='' className='' ref={secondInputRef}/>
    <input type="text" name='' id='' className=''/>
  </div>
)

//REACT ROUTER DOM 
//React Router DOM es una biblioteca de enrutamiento para aplicaciones 
// React que permite manejar la navegación entre diferentes componentes y páginas de manera sencilla.
//Con React Router DOM, puedes definir rutas para tus componentes y controlar qué componente se muestra en función de la URL actual.
//Para usar React Router DOM, primero debes instalarlo en tu proyecto utilizando npm o yarn:
//npm install react-router-dom
//Luego, puedes importar los componentes necesarios para configurar tus rutas en tu aplicación. 
//Los componentes principales de React Router DOM son BrowserRouter, Routes y Route.
//BrowserRouter es el componente que envuelve toda tu aplicación y proporciona el contexto de enrutamiento.
//Routes es el componente que contiene todas las rutas definidas en tu aplicación.
//Route es el componente que define una ruta específica y el componente que se renderizará cuando esa ruta sea accedida.
//Aquí tienes un ejemplo básico de cómo configurar rutas en tu aplicación utilizando React Router DOM:

/*
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );    

  Tambien tenemos link y NavLink para crear enlaces de navegación entre las rutas definidas en tu aplicación.
  Link es un componente que se utiliza para crear enlaces de navegación simples, mientras que NavLink es una variante de Link que permite aplicar estilos activos 
  a los enlaces cuando la ruta actual coincide con la ruta del enlace.

  Ejwmplo de uso de Link y NavLink:

  import { Link, NavLink } from 'react-router-dom';

  function Navigation() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      </nav>
    );
  }

  En este ejemplo, se utilizan Link para crear un enlace de navegación simple al componente Home, 
  y NavLink para crear enlaces de navegación a los componentes About y Contact. 
  El atributo activeClassName se utiliza para aplicar la clase CSS "active" a los enlaces cuando 
  la ruta actual coincide con la ruta del enlace, lo que permite resaltar el enlace activo en la interfaz de usuario.

  Tambien tenemos useNavigate, que es un hook que permite programáticamente navegar a diferentes rutas en tu aplicación.
  Ejemplo de uso de useNavigate:

  import { useNavigate } from 'react-router-dom';

  function MyComponent() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/about'); // Navega a la ruta "/about"
    };

    return (
      <button onClick={handleClick}>Go to About</button>
    );
  }

  En este ejemplo, se utiliza el hook useNavigate para obtener la función navigate, que se puede utilizar para navegar a diferentes rutas en tu aplicación. 
  En el manejador de eventos handleClick, se llama a navigate('/about') para navegar a la ruta "/about" cuando se hace clic en el botón. 
  Esto permite una navegación programática en tu aplicación, lo que es útil para redirigir a los usuarios después de
   realizar ciertas acciones o para manejar la navegación en función de eventos específicos. 

  */

   //UseReducer es un hook de React que se utiliza para manejar el estado de una manera más compleja y estructurada, 
   // especialmente cuando el estado tiene múltiples sub-valores o cuando las actualizaciones de estado dependen del estado anterior.
   //UseReducer es una alternativa a useState y se basa en el concepto de reducers, que son funciones puras que toman el estado actual y una acción,
   // y devuelven un nuevo estado. El hook useReducer devuelve el estado actual y una función dispatch que se utiliza para enviar acciones al reducer.

   //Ejemplo de uso de useReducer:

   /*
   import { useReducer } from 'react';

   const initialState = { count: 0 };

   function reducer(state, action) {
     switch (action.type) {
       case 'increment':
         return { count: state.count + 1 };
       case 'decrement':
         return { count: state.count - 1 };
       default:
         throw new Error();
     }
   }

   function Counter() {
     const [state, dispatch] = useReducer(reducer, initialState);

     return (
       <div>
         Count: {state.count}
         <button onClick={() => dispatch({ type: 'increment' })}>+</button>
         <button onClick={() => dispatch({ type: 'decrement' })}>-</button> 
        </div>
      );



} */
}
















function App1() {


  return (
    <>
      <InputButton />
    </>
  )
}

export default App;

