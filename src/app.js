// sample URL https://gist.githubusercontent.com/ktilcu/ef1d416279e453389c5d4cf1e6fb708b/raw/160782d79e83b64da142969ccaa7f9cf1fa16e01/CreativeFamily.json
import minimist from 'minimist'
import {getWidgets, flattenWidgets} from './widgetHandler'
import {infoLogger} from './logger'
import {PROMPT, MOTD} from './config'


const main = () => {
  const _args = minimist(process.argv.slice(2))
  if(_args.url) {
    getWidgets(_args.url)
    .then(json => flattenWidgets(json))
  } else {
    
  }
  process.stdin.on('readable', () => {
    MOTD.map(m => process.stdout.write(m+'\n'))
    process.stdout.write(PROMPT)
    const partial = process.stdin.read()
    partial !== null && getWidgets(partial.toString())
    .then(json => flattenWidgets(json))
    .then(v => infoLogger(JSON.stringify(v, null, 2)))
  })
}

main()