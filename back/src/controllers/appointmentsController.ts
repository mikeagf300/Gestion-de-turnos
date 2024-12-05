

import { Request, Response } from 'express';
import { cancelAppointmentService, createAppointmentService, getAppointmentByIdService, getAppointmentsService } from '../services/appointmentService';
import { sendConfirmationEmail } from '../services/emailService';
import Appoinment from '../entities/Appoinment';


export const getAllAppointments = async (req: Request, res: Response) => {
    try{
        const appointments: Appoinment[] = await getAppointmentsService();
        res.status(200).json(appointments);
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
};

export const getAppointmentById = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
    const appointment : Appoinment = await getAppointmentByIdService(Number(id)); 
    res.status(200).json(appointment);
    } catch (error: any) {
        res.status(404).json({message: error.message});
    }
};
        
export const schedule = async (req: Request, res: Response) => {
    try{
        const newAppointment = await createAppointmentService(req.body)

        const { email, date, time, description } = req.body;
        const subject = 'Confirmación de cita';
        const text = `Tu cita ha sido agendada para el ${date} a las ${time}. Descripción: ${description}`;
        sendConfirmationEmail({ to: email, subject, text });
        
        res.status(201).json(newAppointment);
    } catch (error: any) {
        res.status(404).json({message: error.message});
    }

};
        
export const cancel = async (req: Request, res: Response)=> {
    try{
        const {id} = req.params;
    const cancelAppointment = await cancelAppointmentService(Number(id))
    res.status(200).json({
        message: "Turno cancelado con éxito",
        AppoinmentCanceled: cancelAppointment
    });
    } catch (error: any) {
        res.status(404).json({message: error.message});
    }
    
};