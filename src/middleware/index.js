import { logger } from './logger'
import { responseTime } from './responseTime'
import  bodyParser  from 'koa-bodyparser'


export const middlewares = [ bodyParser(), responseTime, logger]