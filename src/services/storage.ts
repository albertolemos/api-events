import 'dotenv/config'
import { Request, Response, NextFunction } from 'express'
import * as admin from 'firebase-admin'

import serviceAccount from '../config/firebase-key'

const BUCKET = process.env.BUCKET

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: BUCKET,
  })
}

const bucket = admin.storage().bucket()

const uploadImage = (req: Request, res: Response, next: NextFunction) => {
  if (!req.file) return next()

  const image = req.file
  const fileName = Date.now() + '.' + image.originalname.split('.').pop()
  const file = bucket.file(fileName)
  const stream = file.createWriteStream({
    metadata: {
      contentType: image.mimetype,
    },
  })

  stream.on('error', err => {
    console.error(err)
  })

  stream.on('finish', async () => {
    await file.makePublic()

    req.file.image = `https://storage.googleapis.com/${BUCKET}/${fileName}`

    next()
  })

  stream.end(image.buffer)
}

export default uploadImage
