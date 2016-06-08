##the gist of it
[![CircleCI](https://circleci.com/gh/jason-c-child/the-gist-of-it/tree/master.svg?style=shield&circle-token=a658d9402936e175cc67495421a40ea70e6856e9)](https://circleci.com/gh/jason-c-child/the-gist-of-it/tree/master)
###parsing some json for project *Avalanche*
[CHANGELOG](https://github.com/jason-c-child/the-gist-of-it/blob/master/CHANGELOG.md)


Parse JSON in [this format](https://gist.githubusercontent.com/ktilcu/ef1d416279e453389c5d4cf1e6fb708b/raw/160782d79e83b64da142969ccaa7f9cf1fa16e01/CreativeFamily.json), outputting widgets merged with the corresponding asset's props as determined by `asset-uuid`

To build, clone, `npm install`, `npm run build`, and transpiled js will be in `/lib`

To run, build first then `npm run start`

To test `npm run test`

### Runtime options

Specify the portnumber: `npm run start -- --port <number>`

The service implements an endpoint `url:port/flatten` and accepts a JSON payload (creativefamily)
and returns the flattened widgets as a JSON payload. It will return an empty object if no flattenable widgets were found.
