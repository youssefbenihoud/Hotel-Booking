import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";

const HotelDetails = () => {
  const { id } = useParams();
  const { rooms } = useContext(RoomContext);

  const room = rooms.find((room) => room.id === parseInt(id));

  if (!room) {
    return <div>Room not found</div>;
  }

  const { name, description, price, image, facilities } = room;

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Room Image */}
          <div>
            <img
              src={image}
              alt={name}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Room Details & Booking Form */}
          <div>
            <h2 className="text-4xl font-bold mb-4">{name}</h2>
            <p className="text-2xl text-lime-500 font-semibold mb-6">
              ${price} / night
            </p>
            <p className="text-gray-600 mb-8">{description}</p>

            {/* Facilities */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Facilities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-lime-500">{facility.icon}</span>
                    <span>{facility.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Form */}
            <form className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Book Your Stay</h3>
              <div className="grid grid-cols-1 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-md outline-none border border-gray-300 focus:border-lime-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md outline-none border border-gray-300 focus:border-lime-500"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-md outline-none border border-gray-300 focus:border-lime-500"
                />
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="date"
                    placeholder="Check-in"
                    className="w-full px-4 py-3 rounded-md outline-none border border-gray-300 focus:border-lime-500"
                  />
                  <input
                    type="date"
                    placeholder="Check-out"
                    className="w-full px-4 py-3 rounded-md outline-none border border-gray-300 focus:border-lime-500"
                  />
                </div>
                <input
                  type="number"
                  placeholder="Number of Guests"
                  min="1"
                  className="w-full px-4 py-3 rounded-md outline-none border border-gray-300 focus:border-lime-500"
                />
                <button
                  type="submit"
                  className="w-full bg-lime-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-lime-600 transition"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelDetails;
