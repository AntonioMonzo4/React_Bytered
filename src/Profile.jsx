const Profile = ({ ayo }) => {
  return (
    <div>  
        <h1>Profile</h1>
        <p>Username: {ayo}</p>{
        //aquí se muestra el valor del prop "ayo" que se le pasó al componente Profile desde el componente App. 
        // En este caso, se mostrará el valor del estado "username" que se actualiza cada vez que el usuario cambia su valor en el campo de entrada correspondiente.
        //Esto se debe a que en el componente App, se está pasando el estado "username" como prop "ayo" al componente Profile: <Profile ayo={username}/>.
        //  Por lo tanto, cada vez que el estado "username" cambie, el componente Profile se volverá a renderizar y mostrará el nuevo valor del username.
        //App es el componente padre que contiene el estado "username" y el componente Profile es el componente hijo que recibe ese estado como prop "ayo".
        
        }
    </div>
  )
}

export default Profile
