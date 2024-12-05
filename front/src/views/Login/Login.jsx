import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { validateLogin } from '../../helpers/validate'
import styles from './Login.module.css'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/reducer'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const initialState = {
        username: "",
        password: "",
    }

    const [form, setForm] = useState(initialState)
    const [errors, setErrors] = useState(initialState)

    useEffect(()=>{
        const errors = validateLogin(form)
        setErrors(errors)
    },[form])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value })
    }

    const postData = async () => {
        try {
            const response = await axios.post("http://localhost:3000/users/login", form);

            if (response.status === 200) {
                dispatch(addUser(response.data.user));
                alert("Usuario logeado con éxito");
                navigate('/myAppointments'); // Redirigir después de un login exitoso
            } else {
                alert ("Fallo al logear al usuario")
            }

            setForm(initialState)

        } catch (error) {
            console.log("Error del servidor", error)
            alert ("Fallo al logear al usuario")
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postData();

        
    }

    return (
        <div className={styles.container}>
            <h1>Login de usuarios</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label>Nombre de usuario:</label>
                    <input type="text" name="username" value={form.username} onChange={handleChange} />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login