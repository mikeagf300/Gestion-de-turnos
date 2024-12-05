import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addUserAppointments } from '../../redux/reducer';
import styles from './NewAppointmentForm.module.css';

const NewAppointmentForm = ({ fetchData }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.userActive.id); // Obtener el userId del estado de Redux

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/appointments/createAppoinment', {
                date,
                time,
                description,
                userId, // Reemplaza con el ID del usuario actual
                email
            });
            fetchData();
            dispatch(addUserAppointments([response.data]));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <label>Date:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div>
                <label>Time:</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <button type="submit">Agregar turno</button>
        </form>
    );
};

export default NewAppointmentForm;