import _ from 'lodash'
export const SAMPLE_URL = 'https://gist.githubusercontent.com/ktilcu/ef1d416279e453389c5d4cf1e6fb708b/raw/160782d79e83b64da142969ccaa7f9cf1fa16e01/CreativeFamily.json'
export const PROMPT = 'URL > '
export const MOTD = [
  'Avalanche CreativeFamily Widget Flattener',
  `v${process.env.npm_package_version}`,
  '',
  'Enter a REST URL endpoint which will return a CreativeFamily JSON file',
  ''
]
export const HELP = _.concat(MOTD, [
  'syntax:',
  '\tnpm run start -- [options]',
  'options: ',
  `\t--url <CreativeFamily JSON url || 'sample'>`,
  '\t--help'
])