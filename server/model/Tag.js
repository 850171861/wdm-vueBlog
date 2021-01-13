import mongoose from '../config/dbConfig'

const Schema = mongoose.Schema

const tagsSchema = new Schema({
  name: { type: String },
  icon: { type: String }
})

const tagsModel = mongoose.model('tag', tagsSchema)

export default tagsModel
