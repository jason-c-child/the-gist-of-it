import fetch from 'node-fetch'
import {errLogger} from './logger'
import _ from 'lodash'


const _flattenWidgets = data => {
    const assets = data.assets
    const widgets = extractWidgets(data)

    const _flattened = _.flatten(assets.map(asset => _.filter(widgets, widget => widget['asset-uuid'] === asset.uuid).map(pairing => {return {...asset, ...pairing}})))
  console.log(_flattened)
    return _flattened
}

export const getWidgets = url => fetch(url).then(response => response.json()).catch(err => errLogger(err))

const extractWidgets = data => {
    const _keys = _.keys(data.sizes)
    return _.flattenDeep(_.concat(_keys.map(k => data.sizes[k]['frames'].map(frame => frame.widgets), _keys.map(k => data.sizes[k]['background']['widgets']))))
}


