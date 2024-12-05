import { Router } from "express";
import { cancel, getAllAppointments, getAppointmentById, schedule } from "../controllers/appointmentsController";


const appointmentRouter = Router();

appointmentRouter.get('/', getAllAppointments);
appointmentRouter.get('/:id', getAppointmentById);
appointmentRouter.post('/createAppoinment', schedule);
appointmentRouter.put('/cancel/:id', cancel);

export default appointmentRouter;