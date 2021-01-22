import mongoose from '../config/dbConfig'

const Schema = mongoose.Schema

const CommentSchema = new Schema({
  tid: {
    type: String
  },
  content: {
    type: String
  },
  pic: {
    type: String
  },
  name: {
    type: String
  },
  children: {
    type: Array
  },
  created: {
    type: Date
  }

})

CommentSchema.pre('save', function (next) {
  this.created = new Date()
  next()
})

const CommentModel = mongoose.model('comment', CommentSchema)

export default CommentModel
