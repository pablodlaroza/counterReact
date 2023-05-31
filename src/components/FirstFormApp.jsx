import{useState} from 'react';

const FirstFormApp = () =>{
    const initValues = {
        username:'',
        email:''
    }

    const [form, setForm]= useState(initValues)
    
    const [loading, setLoading] = useState(false)
    const handleInputChange = (event) => {
        const{name, value}= event.target
        // console.log(event.target)
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSend = async()=>{
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify(form),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
        const data = await response.json()
        setForm(initValues)
        setLoading(false);
        console.log(data)
    }


    return(
        <>
        
        <h1>Primer Formulario</h1>

        <input
            className='mr-10'
            type="text"
            placeholder="Usuario"
            name="username"
            value={form.username}
            onChange={handleInputChange}
        />
         <input
            className='mr-10'
            type="text"
            placeholder="Correo"
            name="email"
            value={form.email}
            onChange={handleInputChange}
        />

        <button onClick={handleSend}>Enviar</button>
        {loading && <p>Cargando...</p>}
        </>
    )
}

export default FirstFormApp;