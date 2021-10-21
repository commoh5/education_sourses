const Course = require('../models/Course')
const { mongooseToObject } = require('../../Util/mongooes')
const { mutipleMongooseToObject } = require('../../Util/mongooes')


class MeControllers {
  //[GET] me/stored/courses 
  storedCourses(req, res, next) {
    Course.find({})
      .then(courses => {
        res.render('me/stored_Courses', {
          courses: mutipleMongooseToObject(courses)
        })
      })
      .catch(next)
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