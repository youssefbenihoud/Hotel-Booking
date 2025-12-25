import roomModel from "../models/roomModel.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const addRoom = async (req, res) => {
  try {
    const image_filename = req.file.filename;
    const image_url = await cloudinary.uploader.upload(req.file.path);

    const room = new roomModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: image_url.secure_url,
    });

    await room.save();
    fs.unlink(req.file.path, () => {});
    res.json({ success: true, message: "Room Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const listRoom = async (req, res) => {
  try {
    const rooms = await roomModel.find({});
    res.json({ success: true, data: rooms });
  }
  catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const removeRoom = async (req, res) => {
  try {
    const room = await roomModel.findById(req.body.id);
    if (room.image) {
      const public_id = room.image.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(public_id);
    }
    await roomModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Room Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const singleRoom = async (req, res) => {
  try {
    const room = await roomModel.findById(req.params.id);
    res.json({ success: true, data: room });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const updateRoom = async (req, res) => {
    try {
        const room = await roomModel.findById(req.body.id);
        if (!room) {
            return res.json({ success: false, message: "Room not found" });
        }

        let image_url = room.image;
        if (req.file) {
            if (room.image) {
                const public_id = room.image.split("/").pop().split(".")[0];
                await cloudinary.uploader.destroy(public_id);
            }
            const result = await cloudinary.uploader.upload(req.file.path);
            image_url = result.secure_url;
            fs.unlink(req.file.path, () => {});
        }

        room.name = req.body.name || room.name;
        room.description = req.body.description || room.description;
        room.price = req.body.price || room.price;
        room.image = image_url;

        await room.save();
        res.json({ success: true, message: "Room Updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { addRoom, listRoom, removeRoom, singleRoom, updateRoom };
