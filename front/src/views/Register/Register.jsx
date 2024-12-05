import {useState, useEffect} from 'react'
import { validateRegister } from '../../helpers/validate'
import axios from 'axios'
import styles from './Register.module.css'

    const Register = () => {
        const initialState = {
            name: '',
            email: '',
            birthdate: '',
            nDni: '',
            username: '',
            password: ''
        };

    const [form, setForm] = useState(initialState)
    const [errors, setErrors] = useState(initialState)

    useEffect(()=>{
        const errors = validateRegister(form)
        setErrors(errors)
    },[form])

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    const postData = async () => {
        try {
            const response = await axios.post("http://localhost:3000/users/register", form);

            if (response.status === 201) {
                alert ("Usuario registrado con exito")
            } else {
                alert ("Fallo al registrar al usuario")
            }
        } catch (error) {
            alert("Error en la solicitud", error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postData();
    };

    return (
        <div className={styles.container}>
            <h1>Registro de usuarios</h1>

            <form onSubmit={handleSubmit} className={styles.form}>
                {[
                    {
                        label: "Nombre:",
                        name: "name",
                        type: "text"
                    },
                    {
                        label: "Nombre de usuario",
                        name: "username",
                        type: "text"
                    },
                    {
                        label: "Contraseña",
                        name: "password",
                        type: "password"
                    },
                    {
                        label: "Correo electronico",
                        name: "email",
                        type: "text"
                    },
                    {
                        label: "Fecha de nacimiento",
                        name: "birthdate",
                        type: "date"
                    },
                    {
                        label: "Número de DNI",
                        name: "nDni",
                        type: "text"
                    }
                ].map(({label, name, type}) => {
                    return (
                        <div key={name}>
                            <label>{label}</label>
                            <input
                                value={form[name]}
                                name={name}
                                type={type}
                                onChange={handleChange}
                            />
                            {errors[name] && <span>{errors[name]}</span>}
                        </div>
                    )})}
                <button disabled={errors.email} type="submit">Registrarse</button>
            </form>
        </div>
    )
}

export default Register