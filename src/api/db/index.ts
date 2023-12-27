import { Schema, model, connect } from 'mongoose'
import { MongoClient } from 'mongodb'
require('dotenv').config()

interface IReservation {
  roomId: number,
  user: string,
  startTime: Date,
  endTime: Date
}

const reservationSchema = new Schema<IReservation>({
  roomId: { type: Number, required: true },
  user: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true }
})

const Reservation = model<IReservation>('Reservation', reservationSchema)

export const client = new MongoClient(process.env.MONGO_URI!);
export const db = client.db(process.env.MONGO_DBNAME!);

const connectToMongoDb = async (): Promise<object> => {
  try {
    await connect(process.env.MONGO_URI!);

    const reservation = new Reservation({
     roomId: 4,
     user: 'user4',
     startTime: new Date(),
     endTime: new Date()
    })

    await reservation.save()
    // console.log("reservation added")
    return { status: 200, msg: 'OK - Connected' }
  } catch (err) {
    console.error(err)
    return { status: 400, msg: 'Bad Request - Could Not Connect' }
  }
}

export default connectToMongoDb;
