import Koa from 'koa'
import router from './routes'
import consola from 'consola'
import koaBody from 'koa-body'
import path from 'path'
import cors from '@koa/cors'
import JWT from 'koa-jwt'

// Import and Set Nuxt.js options
import config from '../nuxt.config.js'

const {
  Nuxt,
  Builder
} = require('nuxt')

const app = new Koa()

app.use(koaBody({
  multipart: true,
  formidable: {
    keepExtensions: true,
    maxFieldsSize: 5 * 1024 * 1024
  },
  onError: err => {
    console.log('koabody TCL: err', err)
  }
}))
// 允许跨域
app.use(cors())
// 不需要验证接口,如前端的所有的路由 /api，后端的/longi
const jwt = JWT({
  secret: '33pG2mD51xMo%OUOTo$ZWOa3TYt328tcjXtW9&hn%AOb9q'
}).unless({
  path: ['/', /^\/__webpack_hmr/, /^\/_nuxt/, /^\/article/, /^\/category/, /^\/api/, /^\/login/]
})
app.use(jwt)
// 路由挂载
app.use(router())

config.dev = app.env !== 'production'

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
      port = process.env.PORT || 3000
  } = nuxt.options.server

  await nuxt.ready()
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
