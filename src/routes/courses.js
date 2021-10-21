const express = require('express')
const router = express.Router()

const coursesControllers = require('../app/controllers/CourseControllers')

router.get('/create', coursesControllers.create)
router.post('/store', coursesControllers.store)
router.get('/:slug', coursesControllers.show)
router.get('/:id/edit', coursesControllers.edit)
router.put('/:id', coursesControllers.update)
router.patch('/:id/restore', coursesControllers.restore)
router.delete('/:id', coursesControllers.destroy)
router.delete('/:id/force', coursesControllers.forceDestroy)

module.exports = router