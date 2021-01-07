import mongoose from '../config/dbConfig'

const Schema = mongoose.Schema

const ArticleSchema = new Schema({
  title: { type: String },
  content: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'category' },
  label: { type: Array, ref: 'label' }

})

const ArticleModel = mongoose.model('article', ArticleSchema)

export default ArticleModel
