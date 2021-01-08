import mongoose from 'mongoose'
const dbPort = 'mongodb://localhost:27017/blogdb'

// 创建连接
mongoose.connect(dbPort, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// 连接成功
mongoose.connection.on('connected', () => {
  // console.log('Mongoose connection open to ' + config.DB_URL);
})

// 连接异常
mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err)
})

// 断开连接
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection disconnected')
})

export default mongoose