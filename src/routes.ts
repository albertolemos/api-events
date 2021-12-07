import { Router, Request, Response } from 'express'
import {
  createEventHandler,
  getAllEventsHandler,
} from './controllers/eventController'
import eventMiddleware from './middlewares/eventMiddleware'
import uploadImage from './services/storage'

import multer from 'multer'

const Multer = multer({
  storage: multer.memoryStorage(),
})

const routes = Router()

routes.get('/', (req: Request, res: Response) =>
  res.status(200).json({ version: '0.0.1', online: true }),
)

routes.post(
  '/event',
  Multer.single('image'),
  uploadImage,
  eventMiddleware,
  createEventHandler,
)
routes.get('/event', getAllEventsHandler)

export default routes
