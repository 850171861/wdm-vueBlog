import mongoose from '../config/dbConfig'

const Schema = mongoose.Schema

const CategorySchema = new Schema({
  name: {
    type: String
  },
  icon: {
    type: String
  }

})

const CategoryModel = mongoose.model('category', CategorySchema)

export default CategoryModel
