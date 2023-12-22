import express from 'express'
import {
    createTour,
    deleteTour,
    getAllTour,
    getSingleTour,
    updateTour,
    getTourBySearch,
    getFeaturedTour,
    getTourCount
} from './../controllers/tourController.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//create new tour
router.post('/', verifyAdmin, createTour)

//update tour
router.put('/:id', verifyAdmin, updateTour)

//get single tour
router.get('/:id', getSingleTour)

//delet tour
router.delete('/:id', verifyAdmin, deleteTour)

//get all tour
router.get('/', getAllTour)

//get tour by search
router.get('/search/getTourBySearch', getTourBySearch)

//get featured
router.get('/search/getFeaturedTour', getFeaturedTour)

//get tour count
router.get('/search/getTourCount', getTourCount)
export default router