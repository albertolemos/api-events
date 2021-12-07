import mongoose from 'mongoose'
import IEvent from 'src/interfaces/eventInterface'

const Schema = mongoose.Schema

const eventSchema = new Schema<IEvent>({
  name: {
    type: String,
    unique: true,
  },

  category: {
    type: String,
  },

  date: {
    type: String,
  },

  hour: {
    type: String,
  },

  imageUrl: {
    type: String,
  },

  organizer: {
    type: String,
  },

  ticketLots: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
})

const EventModel = mongoose.model<IEvent>('Event', eventSchema)

export default EventModel
