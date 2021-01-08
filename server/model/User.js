import mongoose from '../config/dbConfig'

const UserSchema = new Schema({
  username: { type: String },
  password: { type: String },
  name: { type: String },
  pic: { type: String, default: '/img/header.jpg' }
})

UserSchema.pre('save', function (next) {
  this.created = new Date()
  next()
})

const UserModel = mongoose.model('users', UserSchema)

export default UserModel
