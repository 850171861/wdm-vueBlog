import mongoose from '../config/dbConfig'

const Schema = mongoose.Schema

const CategorySchema = new Schema({
  name: { type: String },
  content: { type: String }
})

const CategoryModel = mongoose.model('category', CategorySchema)

export default CategoryModel
