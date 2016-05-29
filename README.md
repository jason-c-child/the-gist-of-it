##the gist of it

###parsing some json for *Avalanche*

Pull some JSON down from a [URL](https://gist.githubusercontent.com/ktilcu/ef1d416279e453389c5d4cf1e6fb708b/raw/160782d79e83b64da142969ccaa7f9cf1fa16e01/CreativeFamily.json) and parse, outputting widgets merged with the corresponding asset's props as determined by `asset-uuid`

To build, clone, `npm install`, `npm run build`, and transpiled js will be in `/lib`

To run, build first then `npm run start`

### Runtime options

```
Avalanche CreativeFamily Widget Flattener

Enter a REST URL endpoint which will return a CreativeFamily JSON file.


options:

--url <CreativeFamily JSON url || 'sample'>

--help

```