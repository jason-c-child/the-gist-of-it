import _ from 'lodash'

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