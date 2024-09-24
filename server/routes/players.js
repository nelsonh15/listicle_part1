import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import playersData from '../data/players.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()
router.get('/', (req, res) => {
    res.status(200).json(playersData)
})
router.get('/:playerId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/players.html'))
})


export default router
