import React from 'react';
import './Appointment.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { cancelAppointmentAction } from '../../redux/reducer';

const Appointment = ({ id, date, time, description, status, imageUrl }) => {
    const dispatch = useDispatch ()
    const cancelAppointment = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
            console.log(response.data); // Verifica que el turno se esté cancelando correctamente
            dispatch(cancelAppointmentAction(id)); // Actualiza la UI después de cancelar
        } catch (error) {
            console.error("Error al cancelar el turno:", error);
        }
    };
    
    return (
        <div className={`appointment-card ${status.toLowerCase()}`}>
            <div className="appointment-content">
                <img src={imageUrl} alt="Appointment" className="appointment-image" />
                <div className="appointment-details">
                    <h2>{date}</h2>
                    <p>{time}</p>
                    <p>{description}</p>
                    <p className={`status ${status.toLowerCase()}`}>{status}</p>
                </div>
                    <button className="cancel-button" disabled={status === 'canceled'} onClick={()=> cancelAppointment()}>
                        Cancelar Turno
                    </button>
            </div>
        </div>
    );
};

export default Appointment;