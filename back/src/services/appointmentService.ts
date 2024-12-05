import { appoinmentModel, userModel } from "../config/dataSource";
import IAppointmentDto from "../dto/IAppointmentDto";
import Appoinment from "../entities/Appoinment";
import User from "../entities/User";

export const getAppointmentsService = async () => {
    const allAppoinments: Appoinment[] = await appoinmentModel.find();
    return allAppoinments;
};

export const getAppointmentByIdService = async (appointmentId: number) => {
    const foundAppoinment : Appoinment | undefined = await appoinmentModel.findOneBy({id: appointmentId});
    if (!foundAppoinment) throw Error ("El turno no fue encontrado")
    return foundAppoinment;
};

export const createAppointmentService = async (createAppointmentDto: IAppointmentDto)=> {
    const newAppointment = await appoinmentModel.create(createAppointmentDto);
    await appoinmentModel.save(newAppointment)

    const user: User | null = await userModel.findOneBy({id: createAppointmentDto.userId})

    newAppointment.user = user;
    await appoinmentModel.save(newAppointment) 
    return newAppointment;
};

export const cancelAppointmentService =  async(id: number) => {
    const appointment = await appoinmentModel.findOneBy({id: id});

    if (!appointment) throw Error ("El turno no fue encontrado")

    appointment.status = 'canceled';
    await appoinmentModel.save(appointment);
    return appointment;
};