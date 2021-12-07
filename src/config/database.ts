import mongoose from 'mongoose'
import 'dotenv/config'

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (err) {
    // eslint-disable-next-line
    console.error(err)
  }
}

export default connectToDatabase
