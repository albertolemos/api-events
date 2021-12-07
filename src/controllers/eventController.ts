import { Request, Response } from 'express'
import { createEvent, getAllEvents } from '../services/eventService'

export async function createEventHandler(
  req: Request,
  res: Response,
): Promise<Response> {

  const { category, date, hour, organizer, ticketLots } = req.body
  let { name } = req.body
  const nameUpperCase = name.toUpperCase()
  name = nameUpperCase

  const { image } = req.file ? req.file : ''

  const createdAt = new Date()
  const updatedAt = new Date()

  const body = {
    name,
    category,
    date,
    hour,
    organizer,
    imageUrl: image,
    ticketLots,
    createdAt,
    updatedAt
  }

  const response = await createEvent(body)

  if (!response) {
    return res
      .status(400)
      .json({
        type: 'error',
        message: 'Invalid data. Check and try again.'
      })
  } else {
    return res.status(201).json({
      type: 'success',
      message: 'Data saved successfully.',
      id: response.id,
    })
  }
}

export async function getAllEventsHandler(
  req: Request,
  res: Response,
): Promise<Response> {
  const response = await getAllEvents()

  return res.status(200).json(response)
}
