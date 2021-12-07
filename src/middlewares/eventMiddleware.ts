import { Request, Response, NextFunction } from 'express'
import eventValidator from '../validators/eventValidator'

const eventMiddleware = (req: Request, res: Response, next: NextFunction) => {

  const { name } = req.body

  const { error } = eventValidator.validate({ name })
  const valid = error == null

  if (valid) {
    next()
  } else {
    const { details } = error
    const message = details.map(i => i.message).join(',')

    res.status(422).json({ message: message, type: 'error' })
  }
}

export default eventMiddleware
