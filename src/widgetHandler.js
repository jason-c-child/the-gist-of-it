import 'babel-polyfill'
import fetch from 'node-fetch'
import {errLogger} from './logger'
import _ from 'lodash'

export const flattenWigdets = async url => {
  const _json = await getWidgets(url)
  const _widgets = await extractWidgets(_json)
  return await _flattenWidgets(_json.assets, _widgets)
}

export const _flattenWidgets = (assets, widgets) => 
  Promise.resolve(_.flatten(assets.map(asset => _.filter(widgets, widget => widget['asset-uuid'] === asset.uuid).map(pairing => {return {...asset, ...pairing}}))))
  
export const getWidgets = url => fetch(url).then(response => response.json()).catch(err => errLogger(err))

export const extractWidgets = data => {
    const _keys = _.keys(data.sizes)
    return _.flattenDeep(_.concat(_keys.map(k => data.sizes[k]['frames'].map(frame => frame.widgets), _keys.map(k => data.sizes[k]['background']['widgets']))))
}


