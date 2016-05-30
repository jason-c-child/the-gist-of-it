import chalk from 'chalk'
import raven from 'raven'

const sentry = new raven.Client('https://7e9d3d30e408465d813cab41e2a0d753:35e67248e8fc46af97bc1e0cf89a35f2@app.getsentry.com/80477')

const error = chalk.bold.red
const info = chalk.bold.green

export const errLogger = err => {
  console.error(error(`${err}`))
  sentry.captureException(err)
}

export const infoLogger = i => {
  console.info(info(i))
  sentry.captureMessage(i, {level: 'info'})
}
