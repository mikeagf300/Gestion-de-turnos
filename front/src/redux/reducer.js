import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userActive: null,
    userAppointment: []
};

export const userSlice = createSlice({
    name: "userData",
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            state.userActive = action.payload;
        },
        setUserAppointments: (state, action) => {
            state.userAppointment = action.payload;
        },
        addUserAppointments: (state, action) => {
            // Filtrar turnos duplicados antes de agregarlos al estado
            const newAppointments = action.payload.filter(
                newAppointment => !state.userAppointment.some(appointment => appointment.id === newAppointment.id)
            );
            state.userAppointment = [...state.userAppointment, ...newAppointments];
        },
        cancelAppointmentAction: (state, action) => {
            state.userAppointment = state.userAppointment.map(appointment => {
                if (appointment.id === action.payload) {
                    return { ...appointment, status: 'Canceled' };
                }
                return appointment;
            });
        }
    }
});

export const { addUser, setUserAppointments, addUserAppointments, cancelAppointmentAction } = userSlice.actions;
export default userSlice.reducer;
