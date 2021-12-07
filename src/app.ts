import express, { Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
import routes from './routes'
import AppError from './errors/AppError'
import connectToDatabase from './config/database'
import 'dotenv/config'

connectToDatabase()

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(routes)

app.use((err: Error, req: Request, res: Response) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    })
  }

  return res.status(400).json({
    status: 'error',
    message: 'Invalid Request!',
  })
})

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`App is running at http://localhost:${PORT}/api`)
})
