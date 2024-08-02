import { Router } from 'express'
import * as usersCtrl from '../controllers/users.js'

const router = Router()

// GET localhost:3000/users
router.get('/', usersCtrl.index)

// GET localhost:3000/users/new
router.get('/new', usersCtrl.new)

//POST  localhost:3000/users
router.post('/', usersCtrl.create)

//GET localhost:3000/users/:userId
router.get('/:userId', usersCtrl.show)

//PUT localhost:3000/users/:userId
router.put('/:userId', usersCtrl.update)

//DELETE localhost:3000/users/:userId 
router.delete('/:userId', usersCtrl.delete)

//DELETE localhost:3000/users/:userId/edit
router.delete('/:userId/edit', usersCtrl.edit)

export { router }
