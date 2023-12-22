import express from 'express'
import { 
    createUser, 
    deleteUser, 
    getAllUser, 
    getSingleUser, 
    updateUser 
} from '../controllers/userController.js'
import { verifyUser } from '../utils/verifyToken.js'


const router = express.Router()

//create new tour
router.post('/', createUser)

//update tour
router.put('/:id', verifyUser, updateUser)

//get single tour
router.get('/:id', verifyUser, getSingleUser)

//delet tour
router.delete('/:id', verifyUser, deleteUser)

//get all tour
router.get('/', verifyUser, getAllUser)

export default router