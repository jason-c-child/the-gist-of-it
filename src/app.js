// sample URL https://gist.githubusercontent.com/ktilcu/ef1d416279e453389c5d4cf1e6fb708b/raw/160782d79e83b64da142969ccaa7f9cf1fa16e01/CreativeFamily.json
import 'babel-polyfill'
import minimist from 'minimist'
import {flattenWigdets} from './widgetHandler'
import {infoLogger} from './logger'
import {PROMPT, MOTD, HELP, SAMPLE_URL} from './config'


const main = async () => {
  const _args = minimist(process.argv.slice(2))
  if(_args.help) {
    HELP.map(m => infoLogger(m))
    process.exit(0)
  }
  if(_args.url) {
    if (_args.url === 'sample') _args.url = SAMPLE_URL
    const _widgets = await flattenWigdets(_args.url)
    infoLogger(JSON.stringify(_widgets, null, 2))
  } else {
    MOTD.map(m => process.stdout.write(m+'\n'))
    process.stdout.write(PROMPT)
    process.stdin.on('readable', async () => {
      const partial = process.stdin.read()
      if(partial !== null) {
        const _widgets = await flattenWigdets(partial.toString())
        infoLogger(JSON.stringify(_widgets, null, 2))
      }
    })
  }
}

main()
