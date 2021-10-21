const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');



const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, required: true },
  description: { type: String, maxlength: 600 },
  image: { type: String, required: true },
  slug: { type: String, slug: 'name', unique: true },
  videoID: { type: String, required: true },
  level: { type: String, maxlength: 255 },
},{
  timestamps:true,
});

//add plugins
Course.plugin(mongooseDelete,{ 
  deletedAt : true,
  overrideMethods: 'all'
 })
mongoose.plugin(slug)

module.exports = mongoose.model('Course', Course);
