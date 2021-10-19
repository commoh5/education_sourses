const express = require('express')
const router = express.Router()

const coursesControllers = require('../app/controllers/CourseControllers')

router.get('/create', coursesControllers.create)
router.post('/store', coursesControllers.store)
router.get('/:slug', coursesControllers.show)
router.get('/:id/edit', coursesControllers.edit)
router.put('/:id', coursesControllers.update)
router.delete('/:id', coursesControllers.destroy)

module.exports = router