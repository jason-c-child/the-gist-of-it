import chalk from 'chalk'
const error = chalk.bold.red
const info = chalk.bold.green

export const errLogger = err => console.error(error(`${err}`))

export const infoLogger = i => console.info(info(i))