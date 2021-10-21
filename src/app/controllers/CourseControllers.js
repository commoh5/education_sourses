const Course = require('../models/Course')
const { mongooseToObject } = require('../../Util/mongooes')

class CourseControllers {
  //[GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then(course =>
        res.render('courses/show', { course: mongooseToObject(course) })
      )
      .catch(next)
  }

  //[GET] /courses/create
  create(req, res, next) {
    res.render('courses/create')
  }

  //[GET] /courses/:id/edit 
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then(course => res.render('courses/edit',{
        course: mongooseToObject(course)
      }))
      .catch(next)
  }

  //[PUT] /courses/id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id },req.body)
      .then(() => res.redirect('/me/stored/Courses'))
      .catch(next)
  }

  //[POST] /courses/store
  store(req, res, next) {
    var formData = {...req.body}
    formData.image = `http://img.youtube.com/vi/${formData.videoID}/sddefault.jpg`
    const course = new Course(formData)
    course.save()
      .then(() => res.redirect('/me/stored/courses'))
      .catch(error => {});
  }

  //[DELETE] /courses/:id
  // destroy(req, res, next) {
  //   Course.deleteOne({ _id: req.params.id })
  //     .then(() => res.redirect('back'))
  //     .catch(next)
  // }

  //[DELETE SOFT] /courses/:id
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }

    //[DELETE] /courses/:id/force
    forceDestroy(req, res, next) {
      Course.deleteOne({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next)
    }

  //[PATCH] /courses/:id/restore
  restore(req,res,next){
    Course.restore({  _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }



}

module.exports = new CourseControllers