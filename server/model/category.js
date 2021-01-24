import mongoose from '../config/dbConfig'

const Schema = mongoose.Schema

const CategorySchema = new Schema({
  name: {
    type: String
  },
  icon: {
    type: String
  },
  created: {
    type: Date
  },
  status: {
    type: Date
  }
})

CategorySchema.pre('save', function (next) {
  this.created = new Date()
  next()
})

const CategoryModel = mongoose.model('category', CategorySchema)

export default CategoryModel
