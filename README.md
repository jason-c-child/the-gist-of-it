##the gist of it
[![CircleCI](https://circleci.com/gh/jason-c-child/the-gist-of-it/tree/master.svg?style=shield&circle-token=a658d9402936e175cc67495421a40ea70e6856e9)](https://circleci.com/gh/jason-c-child/the-gist-of-it/tree/master)
###parsing some json for *Avalanche*
[CHANGELOG](https://github.com/jason-c-child/the-gist-of-it/blob/master/CHANGELOG.md)


Pull some JSON down from a [URL](https://gist.githubusercontent.com/ktilcu/ef1d416279e453389c5d4cf1e6fb708b/raw/160782d79e83b64da142969ccaa7f9cf1fa16e01/CreativeFamily.json) and parse, outputting widgets merged with the corresponding asset's props as determined by `asset-uuid`

To build, clone, `npm install`, `npm run build`, and transpiled js will be in `/lib`

To run, build first then `npm run start`

To test `npm run test`

### Runtime options

```
Avalanche CreativeFamily Widget Flattener
v0.5.0

Enter a REST URL endpoint which will return a CreativeFamily JSON file

syntax:
        npm run start -- [options]
options:
        --url <CreativeFamily JSON url || 'sample'>
        --help
```