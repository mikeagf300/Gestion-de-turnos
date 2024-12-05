import React, { useEffect, useState } from "react";
import Appointment from "../../components/Appointment/Appointment";
import NewAppointmentForm from '../../components/NewAppointmentForm/NewAppointmentForm';
import axios from 'axios'
import styles from './MyAppointments.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUserAppointments } from "../../redux/reducer";


const MyAppointments = () => {
    const navigate = useNavigate();
    const imageUrl = "https://uzhkh-irpin.org.ua/wp-content/uploads/2022/08/301163820_2118044855048198_6518272094788407258_n.jpg";
    const userData = useSelector((state) => state.userActive)
    const userAppointments = useSelector((state) => state.userAppointment)
    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/users/${userData.id}`)
            dispatch(addUserAppointments(response.data.appoinments|| []))
        } catch (error) {
            console.log(error)
        }
    };
    //montage
    useEffect(() => {
        !userData.name ? navigate("/home") : fetchData()

        }, []);



    return (
        <div className={styles.appointmentsContainer}>
            <div>
                <h2 className={styles.titleMisTurnos}> Mis turnos</h2>
                <h1>Estos son los turnos del usuario:</h1>
                <NewAppointmentForm fetchData={fetchData}/>
            </div>
            {
                Array.isArray(userAppointments) && userAppointments.length ? (
                    userAppointments.map(({ time, date, id, status, description }) => (
                        <Appointment
                            key={id}
                            id={id}
                            date={date}
                            time={time}
                            description={description}
                            status={status}
                            imageUrl={imageUrl}
                        />
                    ))
                ) : (
                        <div className="no-appointments">
                            No tienes ningún turno
                        </div>
                    )
            }
                
        </div>
    );
};

export default MyAppointments;