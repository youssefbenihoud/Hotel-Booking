import express from "express";

import {
  addRoom,
  listRoom,
  removeRoom,
  singleRoom,
} from "../controllers/roomControllers.js";

const roomRouter = express.Router();

roomRouter.post("/add", addRoom);

export default roomRouter;
