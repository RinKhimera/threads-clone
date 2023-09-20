import mongoose from "mongoose"

// Variable to check is Mongoose is connected
let isConnected = false

export const connectToDB = async () => {
  mongoose.set("strictQuery", true)

  if (!process.env.MONGODB_URL) return console.log("MONGO_URL not found")
  if (isConnected) return console.log("Already connected to MongoDB")

  try {
    await mongoose.connect(process.env.MONGODB_URL)
    isConnected = true
    console.log("Connected to MongoDB")
  } catch (error) {
    console.log(error)
  }
}
