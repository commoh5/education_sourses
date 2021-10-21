const Course = require('../models/Course')
const { mongooseToObject } = require('../../Util/mongooes')
const { mutipleMongooseToObject } = require('../../Util/mongooes')


class MeControllers {
  //[GET] me/stored/courses 
  storedCourses(req, res, next) {

    Promise.all([ Course.find({}), Course.countDocumentsDeleted()])
      .then(([courses,deleteCount]) =>
        res.render('me/stored_Courses', {
          deleteCount,
          courses: mutipleMongooseToObject(courses),
        }))
        .catch(next)

    // Course.countDocumentsDeleted()
    //   .then((deleteCount) => {

    //   })
    //   .catch(() => {})

    // Course.find({})
    //   .then(courses => {
    //     res.render('me/stored_Courses', {
    //       courses: mutipleMongooseToObject(courses)
    //     })
    //   })
  }

  //[GET] me/trash/courses 
  trashCourses(req,res,next){
    Course.findDeleted({})
      .then(courses => {
        res.render('me/trash_Courses', {
          courses: mutipleMongooseToObject(courses)
        })
      })
      .catch(next)
  }
}

module.exports = new MeControllers()