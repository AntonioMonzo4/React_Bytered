const Input2 = (props) => {  
    
    //props es un objeto que contiene las propiedades que se le pasan al componente Input2.
    //  En este caso, se espera que props tenga una propiedad llamada placeholder, que se utiliza para establecer el texto de marcador de posición en el campo de entrada.
    //tambien podemos pasarle otras propiedades como value, onChange, etc. dependiendo de las necesidades de nuestro componente.
    //Aparte en vez de usar props.placeholder, podríamos usar destructuring para extraer directamente la propiedad placeholder del objeto props, lo que haría el código más limpio y fácil de leer. Por ejemplo:
    //const Input2 = ({ placeholder }) => {
    // return <input type="text" value="" placeholder={placeholder}/>; 

    return <input type="text" value={props.value} placeholder={props.placeholder} onChange={(e) => props.setValue(e.target.value)} />;
}

export default Input2


//Destructuring: es una sintaxis de JavaScript que permite extraer valores de objetos o arreglos y asignarlos a variables de manera más concisa. En el caso de los objetos, 
// puedes usar la sintaxis de destructuring para extraer propiedades específicas y asignarlas a variables con el mismo nombre. Por ejemplo:
//const person = { name: 'Alice', age: 30 };
//const { name, age } = person;
//console.log(name); // Output: Alice
//console.log(age); // Output: 30