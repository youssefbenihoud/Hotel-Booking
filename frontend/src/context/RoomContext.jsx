import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RoomContext = createContext();

const RoomContextProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(`${url}/api/room/list`);
        if (response.data.success) {
          setRooms(response.data.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching rooms:", error);
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <RoomContext.Provider value={{ rooms, loading }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomContextProvider;
