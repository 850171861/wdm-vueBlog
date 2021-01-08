import mongoose from '../config/dbConfig'

const Schema = mongoose.Schema

const ArticleSchema = new Schema({
  title: { type: String },
  content: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'category' },
  label: { type: Array },
  reads: { type: Number, default: 0 },
  answer: { type: Number, default: 0 }
})

ArticleSchema.pre('save', function (next) {
  this.created = new Date()
  next()
})

const ArticleModel = mongoose.model('article', ArticleSchema)

export default ArticleModel
