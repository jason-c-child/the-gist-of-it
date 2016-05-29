import 'babel-polyfill'
import fetch from 'node-fetch'
import {errLogger} from './logger'
import _ from 'lodash'

export const flattenWigdets = async url => {
  const _widgets = await getWidgets(url)
  const _flattened = await _flattenWidgets(_widgets)
  return _flattened
}

const _flattenWidgets = data => {
    const assets = data.assets
    const widgets = extractWidgets(data)

    const _flattened = _.flatten(assets.map(asset => _.filter(widgets, widget => widget['asset-uuid'] === asset.uuid).map(pairing => {return {...asset, ...pairing}})))
    return Promise.resolve(_flattened)
}

export const getWidgets = url => fetch(url).then(response => response.json()).catch(err => errLogger(err))

const extractWidgets = data => {
    const _keys = _.keys(data.sizes)
    return _.flattenDeep(_.concat(_keys.map(k => data.sizes[k]['frames'].map(frame => frame.widgets), _keys.map(k => data.sizes[k]['background']['widgets']))))
}


