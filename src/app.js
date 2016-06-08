import 'babel-polyfill'
import minimist from 'minimist'
import {flattenWigdets} from './widgetHandler'
import {infoLogger, errLogger} from './logger'
import koa from 'koa'
import koaRouter from 'koa-router'
import {middlewares}  from './middleware'


const main = async () => {
  const _args = minimist(process.argv.slice(2))
  const app = koa()
  let _port = 3000
  const router = koaRouter()
  
  middlewares.map(m => app.use(m))

  if(_args.port) {
    _port = _args.port
  }

  router.post('/flatten', function *(next) {
    yield next
    let _json = {}
    try {
      _json = yield flattenWigdets(this.request.body)
    } catch (err) {
      errLogger(err)
    }
    this.body = _json
  })
  
  app.use(router.routes())
  app.use(router.allowedMethods())
  infoLogger(`Running on port ${_port}`)
  app.listen(_port)
}

main()
