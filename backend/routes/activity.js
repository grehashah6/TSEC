import express from 'express'
import auth from '../middleware/auth.js'

import { showMatchedResults } from '../controllers/activity.js'

const router = new express.Router()

router.get('/dashboard', showMatchedResults)

export default router