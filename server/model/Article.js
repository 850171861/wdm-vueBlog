import mongoose from '../config/dbConfig'

const Schema = mongoose.Schema

const ArticleSchema = new Schema({
  title: { type: String },
  content: { type: String },
  cid: { type: Schema.Types.ObjectId, ref: 'category' }

})

const ArticleModel = mongoose.model('article', ArticleSchema)

export default ArticleModel
