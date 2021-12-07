import { Router, Request, Response } from 'express'
import {
  createEventHandler,
  getAllEventsHandler,
} from 'src/controllers/eventController'
import eventMiddleware from './middlewares/eventMiddleware'
import uploadImage from './services/storage'

import multer from 'multer'

const Multer = multer({
  storage: multer.memoryStorage(),
})

const routes = Router()

routes.get('/api', (req: Request, res: Response) =>
  res.status(200).json({ version: '0.0.1', online: true }),
)

routes.post(
  '/api/event',
  Multer.single('image'),
  uploadImage,
  eventMiddleware,
  createEventHandler,
)
routes.get('/api/event', getAllEventsHandler)

export default routes
