import mongoose from '../config/dbConfig'

const Schema = mongoose.Schema

const LabelSchema = new Schema({
  name: { type: String },
  icon: { type: String },
  artilce_label: { type: Schema.Types.ObjectId, ref: 'article' }
})

const LabelModel = mongoose.model('label', LabelSchema)

export default LabelModel
