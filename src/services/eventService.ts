import EventModel from 'src/models/eventModel'
import IEvent from '../interfaces/eventInterface'
import AppError from '../errors/AppError'

export async function createEvent(input: IEvent) {
  const result = new EventModel(input)
  await result.save()

  return result
}

export async function getAllEvents() {
  try {
    const result = await EventModel.find()
    return result
  } catch (error) {
    throw new AppError(`Error: ${error}`)
  }
}
