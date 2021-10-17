const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug)


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

module.exports = mongoose.model('Course', Course);
