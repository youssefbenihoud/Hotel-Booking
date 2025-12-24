import roomModel from "../models/roomModel.js";

import { v2 as cloudinary } from "cloudinary";

const addRoom = async (req, res) => {
  res.json({
    success: true,
    message: "Hotel room added successfully",
  });
};

const listRoom = async (req, res) => {};

const removeRoom = async (req, res) => {};

const singleRoom = async (req, res) => {};

export { addRoom, listRoom, removeRoom, singleRoom };
