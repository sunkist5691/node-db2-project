const express = require('express')

const db = require('../data/connection')
// db 를 connection 파일에서 불러온다.

const router = express.Router()

router.get('/', (req, res) => {
   db('cars')
      .then(cars => {
         res.json(cars)
      })
      .catch(error => {
         res.status(500).json({ message: 'Failed to retrieve cars' })
      })
})

router.post('/', (req, res) => {
   db('cars')
      .insert(req.body)
      .then(ids => {

         db('cars').where({ id: ids[0] })
         .then(newCar => {
            res.status(201).json(newCar)
         })
      })
      .catch(error => {
         res.status(500).json({ message: 'Failed to store data' })
      })
})

module.exports = router