

import Input2 from './Input2'
const InputHandler = ({ email, setEmail, username, setUsername, password, setPassword, confirmPassword, setConfirmPassword}) => {

    //En este caso, el componente InputHandler recibe tres props: placeholder, value y setValue. 
    //El prop placeholder se utiliza para establecer el texto de marcador de posición en el campo de entrada, mientras que value representa el valor actual del campo de entrada y setValue es una función que se utiliza para actualizar ese valor.  
    //Dentro del componente, se devuelve un campo de entrada controlado donde el valor del campo está vinculado al prop value y se actualiza cada vez que el usuario cambia el valor del campo de entrada utilizando la función setValue.
    return <div>
        <Input2 placeholder="Email" value={email} setValue={setEmail} />
        <Input2 placeholder="Username" value={username} setValue={setUsername} />
        <Input2 placeholder="Password" value={password} setValue={setPassword} />
        <Input2 placeholder="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} />
    </div>
}

export default InputHandler