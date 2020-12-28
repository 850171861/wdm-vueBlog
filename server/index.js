import Koa from 'koa'
import Router from '@koa/router'
import consola from 'consola'
const {
  Nuxt,
  Builder
} = require('nuxt')

const app = new Koa()
// const router = new Router()
const router = new Router({
  prefix: '/api'
})


router.get('/a', function (ctx) {
  ctx.body = '11'
})



// Import and Set Nuxt.js options
import config from '../nuxt.config.js'
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

  // 注册路由
  app.use(router.routes(), router.allowedMethods())



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
