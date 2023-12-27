import { db } from ".";
require("dotenv").config();

const reservationSeed = [
  {
    roomId: 1,
    user: "user1",
    startTime: new Date(2023, 1, 1),
    endTime: new Date(2023, 1, 3),
  },
  {
    roomId: 2,
    user: "user2",
    startTime: new Date(2023, 1, 2),
    endTime: new Date(2023, 3, 5),
  },
  {
    roomId: 3,
    user: "user3",
    startTime: new Date(2023, 1, 4),
    endTime: new Date(2023, 3, 5),
  }

];

const seed = async () => {
  try {
    await db.createCollection('reservations');

    const seedReservations = await db
      .collection("reservations")
      .insertMany(reservationSeed);

    console.log("Database seeded 🌱");
    return { seedMsg: seedReservations };
  } catch (x) {
    console.error(x);
    return { error: x };
  }
};

seed();