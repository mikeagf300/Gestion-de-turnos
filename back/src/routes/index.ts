import { Router, Request, Response } from "express";
import userRouter from "./userRouter";
import appointmentsRouter from "./appointmentRouter";

const router: Router = Router();

// User routes
router.use("/users", userRouter);

// Appointment routes
router.use("/appointments", appointmentsRouter);



export default router;