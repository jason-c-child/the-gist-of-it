import fetch from 'node-fetch'
import _ from 'lodash'
const URL = 'https://gist.githubusercontent.com/ktilcu/ef1d416279e453389c5d4cf1e6fb708b/raw/160782d79e83b64da142969ccaa7f9cf1fa16e01/CreativeFamily.json'

const getWidgets = url => fetch(url).then(response => response.json()).catch(err => console.log('error fetching stuff!!', err))

const extractWidgets = data => _.flattenDeep(_.concat(_.keys(data.sizes).map(k => data.sizes[k]['frames'].map(frame => frame.widgets), _.keys(data.sizes).map(k => data.sizes[k]['background']['widgets']))))

const flattenWidgets = data => {
  let assets = data.assets
  let widgets = extractWidgets(data)
  
  return _.flatten(assets.map(asset => _.filter(widgets, widget => widget['asset-uuid'] === asset.uuid).map(pairing => {return {...asset, ...pairing}})))
}

getWidgets(URL)
.then(json => flattenWidgets(json))
.then(v => console.log(v))
