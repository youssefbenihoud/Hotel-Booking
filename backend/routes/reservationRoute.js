import express from "express";
import { createReservation, listReservations, listAllReservations, removeReservation } from "../controllers/reservationController.js";
import authMiddleware from "../middleware/auth.js";

const reservationRouter = express.Router();

reservationRouter.post("/create", authMiddleware, createReservation);
reservationRouter.get("/list", authMiddleware, listReservations);
reservationRouter.get("/list-all", listAllReservations);
reservationRouter.post("/remove", removeReservation);


export default reservationRouter;