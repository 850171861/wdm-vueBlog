import mongoose from '../config/dbConfig'

const Schema = mongoose.Schema

const ArticleSchema = new Schema({
  title: { type: String },
  content: { type: String },
  cid: { type: Schema.Types.ObjectId, ref: 'category' },
  tag: { type: Array },
  reads: { type: Number, default: 0 }, // 计数
  answer: { type: Number, default: 0 } // 评论
})

ArticleSchema.pre('save', function (next) {
  this.created = new Date()
  next()
})

const ArticleModel = mongoose.model('article', ArticleSchema)

export default ArticleModel
