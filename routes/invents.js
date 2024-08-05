import { Router } from 'express'
import * as inventsCtrl from '../controllers/invents.js'

const router = Router()

router.get('/', inventsCtrl.index)
router.get('/new', inventsCtrl.new)
router.post('/', inventsCtrl.create)
router.get('/:inventId', inventsCtrl.show)
router.delete('/:inventId', inventsCtrl.delete)
router.put('/:inventId', inventsCtrl.update)
router.delete('/:inventId/edit', inventsCtrl.edit)

export {
  router
}